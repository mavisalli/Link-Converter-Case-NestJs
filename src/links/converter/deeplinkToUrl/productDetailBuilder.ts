import { Injectable } from '@nestjs/common';
import { FromDeeplinkToUrlDto } from '../../dtos/FromDeeplinkToUrl.dto';
import Constant from '../constant/constants';

@Injectable()
export class ProductDetailDeeplinkBuilder {
  contentId?: string;
  boutiqueId?: string;
  merchantId?: string;
  campaignId?: string;
  first: number;
  second: any;

  public builder(fromDeeplinkToUrlDto: FromDeeplinkToUrlDto) {
    let params = fromDeeplinkToUrlDto.source;
    this.first = params.lastIndexOf(Constant.PRODUCT_CONTENTID) + 18;
    this.second = null;

    if (params.includes(Constant.AMPERSAND_CAMPAIGN_ID)) {
      this.second = params.lastIndexOf(Constant.AMPERSAND_CAMPAIGN_ID);
    } else if (params.includes(Constant.AMPERSAND_MERCHANT_ID)) {
      this.second = params.lastIndexOf(Constant.AMPERSAND_MERCHANT_ID);
    } else {
      this.second = params.length;
    }

    this.contentId = params.substring(this.first, this.second);

    this.boutiqueId = params.includes(Constant.AMPERSAND_CAMPAIGN_ID)
      ? this.getOnlyId(params.split(Constant.AMPERSAND_CAMPAIGN_ID)[1])
      : '';
    this.merchantId = params.includes(Constant.AMPERSAND_MERCHANT_ID)
      ? this.getOnlyId(params.split(Constant.AMPERSAND_MERCHANT_ID)[1])
      : '';
    this.campaignId = this.boutiqueId;

    this.campaignId = this.campaignId
      ? Constant.Q_BOUTIQUE_ID + this.campaignId
      : '';

    if (this.campaignId != '') {
      this.merchantId = this.merchantId
        ? Constant.AMPERSAND_MERCHANT_ID_LOWER + this.merchantId
        : '';
    } else {
      this.merchantId = this.merchantId
        ? Constant.Q_MERCHANT_ID + this.merchantId
        : '';
    }

    const urlLink =
      Constant.HOMEPAGE_BRAND +
      this.contentId +
      this.campaignId +
      this.merchantId;
    return urlLink;
  }
  private getOnlyId(restOfstring: string) {
    if (restOfstring.includes('&')) {
      return restOfstring.split('&')[0];
    }
    return restOfstring;
  }
}
