import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UrlToDeeplinkLogicalService } from '../converter/urlToDeeplink/urlToDeeplink.service';
import { FromUrlToDeeplinkDto } from '../dtos/FromUrlToDeeplink.dto';

import { Converter } from '../entities/links.entity';

@Injectable()
export class LinksService {
  constructor(
    private urlToDeeplinkLogicalService: UrlToDeeplinkLogicalService,
    @InjectRepository(Converter) private repo: Repository<Converter>,
  ) {}

  async convertUrlToDeeplink(
    fromUrlToDeeplinkDto: FromUrlToDeeplinkDto,
  ): Promise<FromUrlToDeeplinkDto> {
    this.urlToDeeplinkLogicalService.urlToDeeplinkService(fromUrlToDeeplinkDto);
    const links = this.repo.create(fromUrlToDeeplinkDto);
    console.log(links);
    return await this.repo.save(links);
  }
}
