import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { Note } from './notes/entities/note.entity';
import { Category } from './categories/entities/category.entity';

@Module({
  imports: [
    NotesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'user_noted',
      password: 'noted',
      database: 'db_noted',
      autoLoadEntities: true,
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 10,
    }),
    TypeOrmModule.forFeature([Note, Category]),
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
