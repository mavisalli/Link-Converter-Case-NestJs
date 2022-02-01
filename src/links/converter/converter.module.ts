import { Module } from '@nestjs/common';
import { ProductDetailUrlBuilder } from './urlToDeeplink/productDetailBuilder';
import { SearchUrlBuilder } from './urlToDeeplink/searchBuilder';
import { UrlToDeeplinkLogicalService } from './urlToDeeplink/urlToDeeplink.service';

@Module({
  providers: [
    UrlToDeeplinkLogicalService,
    ProductDetailUrlBuilder,
    SearchUrlBuilder,
  ],
  exports: [UrlToDeeplinkLogicalService],
})
export class ConverterModule {}
