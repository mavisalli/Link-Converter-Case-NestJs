import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinksController } from './controllers/links.controller';
import { ConverterModule } from './converter/converter.module';
import { Converter } from './entities/links.entity';
import { LinksService } from './services/links.service';

@Module({
  imports: [TypeOrmModule.forFeature([Converter]), ConverterModule],
  controllers: [LinksController],
  providers: [LinksService],
})
export class LinksModule {}
