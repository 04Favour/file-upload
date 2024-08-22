/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { FileService } from './file/file.service';
import { FileModule } from './file/file.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImgEntity } from './Entity/image.entity';

@Module({
  imports: [MulterModule.register({
    dest: './upload'
  }), FileModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'imaabasi123.',
    database: 'fileupload',
    entities: [ImgEntity],
    synchronize: true})],
  controllers: [AppController],
  providers: [AppService, FileService],
})
export class AppModule {}
