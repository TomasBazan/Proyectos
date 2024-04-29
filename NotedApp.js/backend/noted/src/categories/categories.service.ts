import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const { name } = CreateCategoryDto;
    if (name.length > 100) {
      throw new HttpException(
        'Content too large',
        HttpStatus.PAYLOAD_TOO_LARGE,
      );
    }

    const category = this.categoryRepository.create(createCategoryDto);

    try {
      return await this.categoryRepository.save(category);
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

  async findAll() {
    return await this.categoryRepository.find();
  }

  async findNoteCategories(noteId: number) {
    const categories = await this.categoryRepository
      .createQueryBuilder('category')
      .innerJoin('category.notes', 'note')
      .where('note.id = :id', { id: noteId })
      .getMany();

    return categories;
  }

  async findOne(id: number) {
    return await this.categoryRepository.findOneBy({ id });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const existingCategory = await this.categoryRepository.findOneBy({ id });
    if (!existingCategory) {
      throw new NotFoundException(`Note With id: ${id} not found`);
    }
    if (existingCategory.name.length > 1000) {
      throw new HttpException(
        'Content too large',
        HttpStatus.PAYLOAD_TOO_LARGE,
      );
    }
    if (updateCategoryDto.name !== undefined) {
      existingCategory.name = updateCategoryDto.name;
    }
    return await this.categoryRepository.save(existingCategory);
  }

  async remove(id: number) {
    const categoryToRemove = await this.categoryRepository.findOneBy({ id });
    if (!categoryToRemove) {
      throw new NotFoundException(`Category With id ${id} not found`);
    }
    return await this.categoryRepository.delete(categoryToRemove);
  }
}
