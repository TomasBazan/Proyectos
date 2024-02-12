import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Query,
  Delete,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

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

  @Delete()
  remove(@Query('id') id: number) {
    return this.notesService.remove(id);
  }
}
