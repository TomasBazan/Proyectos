import { Note } from 'src/notes/entities/note.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column({ length: 255, unique: true })
  name: string;

  @ManyToMany(() => Note, (note) => note.categories)
  notes: Note[];
}
