import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Comment } from '../../comments/entities/comment.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  titleColor: string;

  @CreateDateColumn()
  createdAt: string;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];
}
