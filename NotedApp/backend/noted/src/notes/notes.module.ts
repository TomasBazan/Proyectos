import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { CategoriesModule } from 'src/categories/categories.module';
@Module({
  imports: [TypeOrmModule.forFeature([Note]), CategoriesModule],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
