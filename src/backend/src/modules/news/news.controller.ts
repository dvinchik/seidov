// import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
// import { NewsItemService } from './news.service';

// @Controller('/news')
// export class NewsController {
//   constructor(private readonly storage: NewsItemService) {}

//   @Get('/')
//   async getAll(@Res() response) {
//     const items = await this.storage.NewsItemGetAll();
//     console.log(items)
//     return response.status(HttpStatus.OK).json(items);
//   }
//   @Get('/get_by_id/:id')
//   async getById(@Res() response, @Param('id') id) {
//     const item = this.storage.NewsItemGetById(+id);
//     if (!item) {
//       return response.status(HttpStatus.NOT_FOUND).send();
//     }
//     return response.status(HttpStatus.OK).json(item);
//   }
//   @Get('/get_by_alias/:alias')
//   async getByAlais(@Res() response, @Param('alias') alias) {
//     const item = await this.storage.NewsItemByAlias(alias);
//     if (!item) {
//       return response.status(HttpStatus.NOT_FOUND).send();
//     }
//     return response.status(HttpStatus.OK).json(item);
//   }
// }
// import { Controller, Get, Res, HttpStatus, Param, Query } from '@nestjs/common';
// import { NewsItemService } from './news.service';

// @Controller('/news')
// export class NewsController {
//   constructor(private readonly storage: NewsItemService) {}

//   @Get('/')
//   async getAll(@Res() response, @Query('page') page: number = 1) {
//     const pageSize: number = 15;
  
//     // Вычисляем смещение для запроса в базу данных
//     const offset: number = (page - 1) * pageSize;
  
//     // Получаем новости с учетом смещения и количества на странице
//     const items = await this.storage.NewsItemGetAll(pageSize, offset);
  
//     return response.status(HttpStatus.OK).json(items);
//   }

//   @Get('/get_by_alias/:alias')
//   async getByAlias(@Res() response, @Param('alias') alias) {
//     const item = await this.storage.NewsItemByAlias(alias);
//     if (!item) {
//       return response.status(HttpStatus.NOT_FOUND).send();
//     }
//     return response.status(HttpStatus.OK).json(item);
//   }
// }

import { Controller, Get, Res, HttpStatus, Param, Query } from '@nestjs/common';
import { NewsItemService } from './news.service';

@Controller('/news')
export class NewsController {
  constructor(private readonly storage: NewsItemService) {}

  @Get('/')
  async getAll(
    @Res() response,
    @Query('page') page: number = 1,
    @Query('limit') limit: string = '15',
  ) {
    // Преобразуем limit в число
    const numericLimit = +limit;
  
    // Ограничиваем numericLimit значениями 15, 30, 50, 100
    const validLimit = [15, 25, 30, 50, 100].includes(numericLimit) ? numericLimit : 30;
  
    // Вычисляем смещение для запроса в базу данных
    const offset: number = (page - 1) * validLimit;
  
    // Получаем новости с учетом смещения и количества на странице
    const items = await this.storage.NewsItemGetAll(validLimit, offset);
  
    return response.status(HttpStatus.OK).json(items);
  }

  @Get('/get_by_alias/:alias')
  async getByAlias(@Res() response, @Param('alias') alias) {
    const item = await this.storage.NewsItemByAlias(alias);
    if (!item) {
      return response.status(HttpStatus.NOT_FOUND).send();
    }
    return response.status(HttpStatus.OK).json(item);
  }
}
