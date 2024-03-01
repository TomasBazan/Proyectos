import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { DeleteNoteCategoryDto } from './dto/delete-note-category.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  create(@Body() createNoteDto: CreateNoteDto) {
    return this.notesService.create(createNoteDto);
  }

  @Patch('/add-category')
  addCategoryToNote(
    @Query('noteId') noteId: number,
    @Query('categoryId') categoryId: number,
  ) {
    console.log('holis');
    return this.notesService.addCategoryToNote(noteId, categoryId);
  }

  @Get('/categories')
  findNotesWithCategory(@Query('id') noteId: number) {
    return this.notesService.getNoteCategories(noteId);
  }

  @Get()
  findOneOrMany(@Query('id') id?: number) {
    if (id) {
      return this.notesService.findOne(id);
    } else {
      return this.notesService.findAll();
    }
  }

  @Patch()
  update(@Query('id') id: number, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(id, updateNoteDto);
  }

  @Patch('/update-categories')
  async updateNoteCategories(
    @Query('noteId') noteId: number,
    @Body() updateCategoriesDto: { categoryIds: number[] },
  ) {
    const { categoryIds } = updateCategoriesDto;
    await this.notesService.updateNoteCategories(noteId, categoryIds);
    return { message: 'Categories updated successfully' };
  }

  @Patch('/category')
  removeCategory(
    @Query('idNote') idNote: number,
    @Body() DeleteNoteCategoryDto: { idCategory: number },
  ) {
    const { idCategory } = DeleteNoteCategoryDto;
    return this.notesService.removeCategory(idNote, idCategory);
  }
  @Delete()
  remove(@Query('id') id: number) {
    return this.notesService.remove(id);
  }
}
