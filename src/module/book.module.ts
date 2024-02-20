import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { BookController } from 'src/controller/book.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { BookService } from 'src/controller/book.service';
import { BookMiddleware } from 'src/middleware/book.middleware';
import { Book, BookSchema } from 'src/schema/book.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BookMiddleware).forRoutes('api/book');
  }
}
