import { Converter } from '../entities/links.entity';
import { IsString, Contains, IsNotEmpty } from 'class-validator';

export class FromDeeplinkToUrlDto extends Converter {
  @Contains('bw://?Page')
  @IsString()
  @IsNotEmpty()
  source: string;
}
