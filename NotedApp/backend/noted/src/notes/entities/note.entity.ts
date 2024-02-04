import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';

@Entity()
export class Note {
  @Column({ primary: true, generated: true })
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column({ length: 1000 })
  content: string;

  @Column({ default: false })
  archived: boolean;

  @ManyToMany(() => Category, (category) => category.notes)
  @JoinTable({
    // nombre de la tabla generada en muchos a muchos
    name: 'note_categories',
    // setear las foreing keys
    // en este caso la de la entidad que estamos
    joinColumn: {
      name: 'note_id',
    },
    // la de la entidad con la que estamos relacionados
    inverseJoinColumn: {
      name: 'category_id',
    },
  })
  categories: Category[];
}
