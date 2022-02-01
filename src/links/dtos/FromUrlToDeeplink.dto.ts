import { Converter } from '../entities/links.entity';
import { IsString, IsNotEmpty, Contains } from 'class-validator';

export class FromUrlToDeeplinkDto extends Converter {
  @Contains('https://www.brandway.com')
  @IsNotEmpty()
  @IsString()
  source: string;
}
