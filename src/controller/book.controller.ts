import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from 'src/schema/book.schema';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
@ApiTags('api/book')
@Controller('api/book')
export class BookController {
  constructor(private BookService: BookService) {}
  @Post('/add')
  @ApiBody({
    schema: {
      type: 'object',
    },
  })
  addBook(@Req() Req, @Res() Res, @Function() next): Promise<Book> {
    return this.BookService.addBook(Req, Res, next);
  }
  @Delete('/:id')
  @ApiParam({ name: 'id', type: 'string' })
  deleteBook(@Param() param, @Res() Res, @Function() next): Promise<Book> {
    return this.BookService.deleteBook(param.id, Res, next);
  }
  @Patch('/update/:id')
  @ApiBody({
    schema: {
      type: 'object',
    },
  })
  @ApiParam({ name: 'id', type: 'string' })
  updateBook(
    @Param() Param,
    @Req() Req,
    @Res() Res,
    @Function() next,
  ): Promise<Book> {
    return this.BookService.updateBook(Param.id, Req, Res, next);
  }
  @Get('/find')
  findBook(@Res() Res, @Function() next): Promise<Book> {
    return this.BookService.findBook(Res, next);
  }
}
