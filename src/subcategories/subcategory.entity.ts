import { Category } from '../categories/category.entity';
import { Place } from '../places/entities/place.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subcategory {

    @PrimaryGeneratedColumn()
    subcategory_id: number;

    @Column()
    subcategory: string;

    @ManyToOne(() => Category, (category) => category.subcategories)
    category: Category;

    @ManyToMany(() => Place)
    @JoinTable()
    places: Place[];

}