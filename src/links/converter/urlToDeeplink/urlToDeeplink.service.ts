import Constant from '../constant/constants';
import { SearchUrlBuilder } from './searchBuilder';
import { ProductDetailUrlBuilder } from './productDetailBuilder';
import { FromUrlToDeeplinkDto } from '../../dtos/FromUrlToDeeplink.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UrlToDeeplinkLogicalService {
  constructor(
    private readonly productDetailUrlBuilder: ProductDetailUrlBuilder,
    private readonly searchUrlBuilder: SearchUrlBuilder,
  ) {}
  public urlToDeeplinkService(fromUrlToDeeplinkDto: FromUrlToDeeplinkDto) {
    if (fromUrlToDeeplinkDto.source.includes(Constant.P_PARAM)) {
      return (fromUrlToDeeplinkDto.target =
        this.productDetailUrlBuilder.builder(fromUrlToDeeplinkDto));
    } else if (fromUrlToDeeplinkDto.source.includes(Constant.SEARCH_PARAM)) {
      return (fromUrlToDeeplinkDto.target =
        this.searchUrlBuilder.builder(fromUrlToDeeplinkDto));
    } else {
      return (fromUrlToDeeplinkDto.target = Constant.HOMEPAGE_DEEPLINK);
    }
  }
}
