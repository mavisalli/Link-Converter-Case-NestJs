import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeeplinkToUrlLogicalService } from '../converter/deeplinkToUrl/deeplinkToUrl.service';
import { UrlToDeeplinkLogicalService } from '../converter/urlToDeeplink/urlToDeeplink.service';
import { FromDeeplinkToUrlDto } from '../dtos/FromDeeplinkToUrl.dto';
import { FromUrlToDeeplinkDto } from '../dtos/FromUrlToDeeplink.dto';

import { Converter } from '../entities/links.entity';

@Injectable()
export class LinksService {
  constructor(
    private urlToDeeplinkLogicalService: UrlToDeeplinkLogicalService,
    private deeplinkToUrlLogicalService: DeeplinkToUrlLogicalService,
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

  async convertDeeplinkToUrl(
    fromDeeplinkToUrlDto: FromDeeplinkToUrlDto,
  ): Promise<FromDeeplinkToUrlDto> {
    this.deeplinkToUrlLogicalService.deeplinkToUrlService(fromDeeplinkToUrlDto);
    const links = this.repo.create(fromDeeplinkToUrlDto);
    console.log(links);
    return await this.repo.save(links);
  }
}
