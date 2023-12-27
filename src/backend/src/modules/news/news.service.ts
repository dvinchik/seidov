import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { NewsItem, Prisma } from '@prisma/client';
//test


@Injectable()
export class NewsItemService {
    constructor(
      private readonly prisma: PrismaService) {}
    
  
    // async newsItem(
    //   NewsItemWhereUniqueInput: Prisma.NewsItemWhereUniqueInput,
    // ): Promise<NewsItem | null> {
    //   return this.prisma.newsItem.findUnique({
    //     where: NewsItemWhereUniqueInput,
    //   });
    // }
  
    // async NewsItems(params: {
    //   skip?: number;
    //   take?: number;
    //   cursor?: Prisma.NewsItemWhereUniqueInput;
    //   where?: Prisma.NewsItemWhereInput;
    //   orderBy?: Prisma.NewsItemOrderByWithRelationInput;
    // }): Promise<NewsItem[]> {
    //   const { skip, take, cursor, where, orderBy } = params;
    //   return this.prisma.newsItem.findMany({
    //     skip,
    //     take,
    //     cursor,
    //     where,
    //     orderBy,
    //   });
    // }

    async NewsItemGetAll(limit: number, offset: number): Promise<NewsItem[]> {
      console.log(`Received limit: ${limit}, offset: ${offset}`);
      return await this.prisma.newsItem.findMany({
        take: limit,
        skip: offset,
      });
    }

  async NewsItemGetById(id: number): Promise<NewsItem> {
      const element = await this.prisma.newsItem.findUnique({
          where: { id },
      });
      return element; 
  }

  async NewsItemByAlias(alias: string): Promise<NewsItem> {
      const element = await this.prisma.newsItem.findUnique({
        where: { alias },
      });
  
      return element;
    }
//первая часть второго задания
  //   async NewsItemGetAll(pageSize: number, offset: number): Promise<NewsItem[]> {
  //     return await this.prisma.newsItem.findMany({
  //       take: pageSize,
  //       skip: offset,
  //     });
  // }

  // async NewsItemGetById(id: number): Promise<NewsItem> {
  //     const element = await this.prisma.newsItem.findUnique({
  //         where: { id },
  //     });
  //     return element; 
  // }

  // async NewsItemByAlias(alias: string): Promise<NewsItem> {
  //     const element = await this.prisma.newsItem.findUnique({
  //       where: { alias },
  //     });
  
  //     return element;
  //   }
    //до изменений 
    // async NewsItemGetAll(): Promise<NewsItem[]> {
    //     return await this.prisma.newsItem.findMany();
    // }

    // async NewsItemGetById(id: number): Promise<NewsItem> {
    //     const element = await this.prisma.newsItem.findUnique({
    //         where: { id },
    //     });
    //     return element; 
    // }

    // async NewsItemByAlias(alias: string): Promise<NewsItem> {
    //     const element = await this.prisma.newsItem.findUnique({
    //       where: { alias },
    //     });
    
    //     return element;
    //   }
  
    // async createNewsItem(data: Prisma.NewsItemCreateInput): Promise<NewsItem> {
    //   return this.prisma.newsItem.create({
    //     data,
    //   });
    // }
  
    // async updateNewsItem(params: {
    //   where: Prisma.NewsItemWhereUniqueInput;
    //   data: Prisma.NewsItemUpdateInput;
    // }): Promise<NewsItem> {
    //   const { where, data } = params;
    //   return this.prisma.newsItem.update({
    //     data,
    //     where,
    //   });
    // }
  
    // async deleteNewsItem(where: Prisma.NewsItemWhereUniqueInput): Promise<NewsItem> {
    //   return this.prisma.newsItem.delete({
    //     where,
    //   });
    // }
}
