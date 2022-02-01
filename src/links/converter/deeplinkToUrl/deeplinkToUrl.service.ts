import { SearchDeeplinkBuilder } from './searchBuilder';
import { ProductDetailDeeplinkBuilder } from './productDetailBuilder';
import Constant from '../constant/constants';
import { FromDeeplinkToUrlDto } from '../../dtos/FromDeeplinkToUrl.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeeplinkToUrlLogicalService {
  constructor(
    private readonly productDetailDeeplinkBuilder: ProductDetailDeeplinkBuilder,
    private readonly searchDeeplinkBuilder: SearchDeeplinkBuilder,
  ) {}
  public deeplinkToUrlService(fromDeeplinkToUrlDto: FromDeeplinkToUrlDto) {
    if (fromDeeplinkToUrlDto.source.includes(Constant.PRODUCT_CONTENTID)) {
      return (fromDeeplinkToUrlDto.target =
        this.productDetailDeeplinkBuilder.builder(fromDeeplinkToUrlDto));
    } else if (fromDeeplinkToUrlDto.source.includes(Constant.SEARCH_QUERY)) {
      return (fromDeeplinkToUrlDto.target =
        this.searchDeeplinkBuilder.builder(fromDeeplinkToUrlDto));
    } else {
      return (fromDeeplinkToUrlDto.target = Constant.HOMEPAGE_LINK);
    }
  }
}
