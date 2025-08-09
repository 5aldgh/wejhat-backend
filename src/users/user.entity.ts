import { Category } from '../categories/category.entity';
import { Comment } from '../comments/comment.entity';
import { Place } from '../places/entities/place.entity';
import { UsersFavorites } from '../users-favorites/users_favorites.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum UserRole {
  OWNER = 'owner',
  ADMIN = 'admin',
  VENDOR = 'vendor',
  USER = 'user',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER})
  role: UserRole;

  @OneToMany(() => Place, (place) => place.creatorId)
  place: Place[];

  @OneToMany(() => Comment, (comment) => comment.user)
  Comment: Comment[];

  @ManyToMany(() => Category)
  @JoinTable({ name: 'preferences' })
  Categories: Category[];

  @OneToMany(() => UsersFavorites, (usersFavorites) => usersFavorites.user)
  usersFavorites: UsersFavorites[];

}
