import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from 'src/schema/book.schema';

@Injectable()
export class BookService {
  constructor(@InjectModel('Book') private bookModel: Model<Book>) {}

  async addBook(Req, Res, next): Promise<Book> {
    try {
      const { title } = Req?.body;
      const addBook: any = new this.bookModel({ title });
      await addBook.save();
      return Res.sendStatus(201);
    } catch (error) {
      next(error);
    }
  }
  async deleteBook(id, Res, next): Promise<Book> {
    try {
      await this.bookModel?.findByIdAndDelete(id);
      return Res.status(201).json({ message: 'successfully delete item' });
    } catch (error) {
      next(error);
    }
  }
  async findBook(Res, next): Promise<Book> {
    try {
      const getData = await this.bookModel.find({});
      return Res.status(200).json(getData);
    } catch (error) {
      next(error);
    }
  }
  async updateBook(id, Req, Res, next): Promise<Book> {
    try {
      const { title } = Req.body;
      await this.bookModel.findByIdAndUpdate(id, { title }, { new: true });
      return Res.status(201).json({ message: 'successfully update' });
    } catch (error) {
      next(error);
    }
  }
}
