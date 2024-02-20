import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @IsNotEmpty()
  @Prop({ required: true })
  title: string;
}

export const BookSchema: any = SchemaFactory.createForClass(Book);
