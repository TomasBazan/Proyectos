import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepository: Repository<Note>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createNoteDto: CreateNoteDto) {
    const { title, content } = createNoteDto;

    if (content && content.length > 1000) {
      throw new HttpException(
        'Content too large',
        HttpStatus.PAYLOAD_TOO_LARGE,
      );
    }

    if (title && title.length > 100) {
      throw new HttpException('Title too large', HttpStatus.PAYLOAD_TOO_LARGE);
    }

    const note = this.noteRepository.create(createNoteDto);

    try {
      return await this.noteRepository.save(note);
    } catch (error) {
      if (error.code === 'ER_DATA_TOO_LONG') {
        throw new HttpException(
          'Data too long for column',
          HttpStatus.PAYLOAD_TOO_LARGE,
        );
      }
      throw error;
    }
  }

  async getNoteCategories(noteId: number): Promise<Category[]> {
    const note = await this.noteRepository.findOne({
      where: { id: noteId },
      relations: ['categories'],
    });
    if (!note) {
      throw new NotFoundException(`Note not Found`);
    }
    return note.categories;
  }

  async findAll() {
    return await this.noteRepository.find({ relations: ['categories'] });
  }

  async findOne(id: number) {
    return await this.noteRepository.findOneBy({ id });
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
    const existingNote = await this.noteRepository.findOneBy({ id });
    if (!existingNote) {
      throw new NotFoundException(`Note With id: ${id} not found`);
    }
    if (existingNote.content.length > 1000 || existingNote.title.length > 100) {
      throw new HttpException(
        'Content too large',
        HttpStatus.PAYLOAD_TOO_LARGE,
      );
    }
    if (updateNoteDto.title !== undefined) {
      existingNote.title = updateNoteDto.title;
    }
    if (updateNoteDto.archived !== undefined) {
      existingNote.archived = updateNoteDto.archived;
    }
    if (updateNoteDto.content !== undefined) {
      existingNote.content = updateNoteDto.content;
    }
    return await this.noteRepository.save(existingNote);
  }

  async updateNoteCategories(noteId: number, categoryIds: number[]) {
    const note = await this.noteRepository.findOne({
      where: { id: noteId },
      relations: ['categories'],
    });
    if (!note) {
      throw new NotFoundException(`Note with ID ${noteId} not found`);
    }
    if (categoryIds.length === 0) {
      note.categories = [];
    } else {
      const categories = await this.categoryRepository
        .createQueryBuilder('category')
        .where('category.id IN (:...ids)', { ids: categoryIds })
        .getMany();
      note.categories = categories;
    }
    await this.noteRepository.save(note);
  }

  async addCategoryToNote(noteId: number, categoryId: number) {
    const newNote = await this.noteRepository.findOneBy({ id: noteId });
    if (!newNote) {
      throw new NotFoundException(`Note with ID ${noteId} not found`);
    }
    const category = await this.categoryRepository.findOneBy({
      id: categoryId,
    });
    if (!category) {
      throw new NotFoundException(`Category with ID ${categoryId} not found`);
    }
    if (!newNote.categories) {
      newNote.categories = [category];
    } else {
      newNote.categories.push(category);
    }
    return await this.noteRepository.save(newNote);
  }

  async removeCategory(idNote: number, idCategory: number) {
    const noteToChange = await this.noteRepository.findOne({
      where: { id: idNote },
      relations: ['categories'],
    });
    if (!noteToChange) {
      throw new NotFoundException(`Note with ID ${idNote} not found`);
    }
    const newNoteCategories = noteToChange.categories.filter(
      (cat) => cat.id !== idCategory,
    );
    noteToChange.categories = newNoteCategories;
    console.log(`colled removeCategory ${noteToChange}`);
    return await this.noteRepository.save(noteToChange);
  }
  async remove(id: number) {
    const noteToRemove = await this.noteRepository.findOneBy({ id });
    if (!noteToRemove) {
      throw new NotFoundException(`Note With id ${id} not found`);
    }
    return await this.noteRepository.delete(noteToRemove);
  }
}
