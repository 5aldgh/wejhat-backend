import { Exclude, Expose } from 'class-transformer';
import { IsString, IsNumber } from 'class-validator';
import { Category } from '../../categories/category.entity';
import { Comment } from '../../comments/comment.entity';
import { Place } from '../../places/entities/place.entity';
import { User } from '../../users/user.entity';
import { JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';

export class UsersFavoriteDto {
  @Expose()
  user_id: number;

  @Expose()
  email: string;

  @IsString()
  password: string;

  @ManyToOne(() => User, (user) => user.usersFavorites)
  user: User;

  @ManyToOne(() => Place, (place) => place.usersFavorites)
  place: Place;

  // @ManyToMany(() => Place)
  // @JoinTable()
  // places: Place[];
}
