import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Query,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  findAllOrSome(@Query('id') noteId?: number) {
    if (!noteId) {
      return this.categoriesService.findAll();
    } else {
      return this.categoriesService.findNoteCategories(noteId);
    }
  }

  @Patch()
  update(
    @Query('id') id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete()
  remove(@Query('id') id: number) {
    return this.categoriesService.remove(id);
  }
}
