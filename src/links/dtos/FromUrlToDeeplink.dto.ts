import { Converter } from '../entities/links.entity';
import { IsString, IsNotEmpty, Contains } from 'class-validator';

export class FromUrlToDeeplinkDto extends Converter {
  @Contains('https://www.trendyol.com')
  @IsNotEmpty()
  @IsString()
  source: string;
}
