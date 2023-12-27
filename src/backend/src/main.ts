// import { PrismaClient } from '@prisma/client';
// import { Injectable, OnModuleDestroy } from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import { EntrypointModule } from './entrypoint.modules';
async function bootstrap() {
  const app = await NestFactory.create(EntrypointModule, {cors: true});
  console.log('run on 3000 port');
  await app.listen(3000);
}
bootstrap();

// @Injectable()
// export class PrismaService extends PrismaClient implements OnModuleDestroy {
//   constructor() {
//     super();
//   }

//   async onModuleDestroy(): Promise<void> {
//     await this.$disconnect();
//   }
// }