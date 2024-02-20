import { Module } from '@nestjs/common';
import { BookModule } from './module/book.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BookModule,
    MongooseModule.forRoot(
      process.env.MONGO_URI
    ),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('Main Module');
  }
}
