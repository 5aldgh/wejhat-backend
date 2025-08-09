import { Exclude, Expose } from 'class-transformer';
import { IsString, IsNumber, IsEnum } from 'class-validator';
import { Category } from '../../categories/category.entity';
import { Comment } from '../../comments/comment.entity';
import { Place } from '../../places/entities/place.entity';
import { UsersFavorites } from '../../users-favorites/users_favorites.entity';
import { JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { UserRole } from '../user.entity';

export class UserDto {
  @Expose()
  user_id: number;

  @Expose()
  @IsString()
  username: string;
  
  @Expose()
  @IsString()
  email: string;
  
  @IsString()
  password: string;

  @IsString()
  role: UserRole;

  @OneToMany(() => Place, (place) => place.creatorId)
  place: Place[];

  @OneToMany(() => Comment, (comment) => comment.user)
  Comment: Comment[];

  @ManyToMany(() => Category)
  @JoinTable()
  Categories: Category[];

  @OneToMany(() => UsersFavorites, (usersFavorites) => usersFavorites.place)
  usersFavorites: UsersFavorites[];

//   @ManyToMany(() => Place)
//   @JoinTable()
//   places: Place[];


}
