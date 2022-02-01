import { Module } from '@nestjs/common';
import { DeeplinkToUrlLogicalService } from './deeplinkToUrl/deeplinkToUrl.service';
import { ProductDetailDeeplinkBuilder } from './deeplinkToUrl/productDetailBuilder';
import { SearchDeeplinkBuilder } from './deeplinkToUrl/searchBuilder';
import { ProductDetailUrlBuilder } from './urlToDeeplink/productDetailBuilder';
import { SearchUrlBuilder } from './urlToDeeplink/searchBuilder';
import { UrlToDeeplinkLogicalService } from './urlToDeeplink/urlToDeeplink.service';

@Module({
  providers: [
    UrlToDeeplinkLogicalService,
    ProductDetailUrlBuilder,
    SearchUrlBuilder,
    DeeplinkToUrlLogicalService,
    ProductDetailDeeplinkBuilder,
    SearchDeeplinkBuilder,
  ],
  exports: [UrlToDeeplinkLogicalService, DeeplinkToUrlLogicalService],
})
export class ConverterModule {}
