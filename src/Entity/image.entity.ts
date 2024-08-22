import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/* eslint-disable prettier/prettier */
@Entity()
export class ImgEntity {
@PrimaryGeneratedColumn()
id: number;

@Column()
name: string;

@Column()
url: string;
}