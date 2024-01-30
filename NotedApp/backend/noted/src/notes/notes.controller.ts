import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
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

  // @Post(':noteId/categories/:categoryId')
  // async addCategoryToNote(
  //   @Param('noteId') noteId: number,
  //   @Param('categoryId') categoryId: number,
  // ) {
  //   return this.notesService.addCategoryToNote(noteId, categoryId);
  // }

  // @Post(':id/add-category')
  //   addCategoryToNote(
  //     @Param('id') noteId: number,
  //     @Body('categoryId') categoryId: number,
  //   ) {
  //     return this.notesService.addCategoryToNote(noteId, categoryId);
  //   }
  // }
  //   @Get()
  //   findAll() {
  //     return this.notesService.findAll();
  //   }

  @Get('/categories')
  findNotesWithCategory(@Param('id') noteId: number) {
    return this.notesService.getNoteCategories(noteId);
  }

  @Get()
  findOne(@Param('id') id: number) {
    return this.notesService.findOne(id);
  }

  @Patch()
  update(@Param('id') id: number, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(id, updateNoteDto);
  }

  @Delete()
  remove(@Param('id') id: number) {
    return this.notesService.remove(id);
  }
}
