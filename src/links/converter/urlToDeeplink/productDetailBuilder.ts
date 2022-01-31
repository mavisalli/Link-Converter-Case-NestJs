import { Injectable } from '@nestjs/common';
import { FromUrlToDeeplinkDto } from '../../dtos/FromUrlToDeeplink.dto';
import Constant from '../constant/constants';

@Injectable()
export class ProductDetailUrlBuilder {
  contentId?: string;
  boutiqueId?: string;
  merchantId?: string;
  campaignId?: string;

  public builder(fromUrlToDeeplinkDto: FromUrlToDeeplinkDto) {
    let params = fromUrlToDeeplinkDto.source;
    this.contentId = params.substring(
      params.lastIndexOf(Constant.P_PARAM) + 3,
      params.includes(Constant.Q_PARAM)
        ? params.lastIndexOf(Constant.Q_PARAM)
        : params.length,
    );
    this.boutiqueId = params.includes(Constant.BOUTIQUE_ID_LOWER)
      ? this.getOnlyId(params.split(Constant.BOUTIQUE_ID_EQ)[1])
      : '';
    this.merchantId = params.includes(Constant.MERCHANT_ID_LOWER)
      ? this.getOnlyId(params.split(Constant.MERCHANT_ID_EQ)[1])
      : '';
    this.campaignId = this.boutiqueId;

    this.campaignId = this.campaignId
      ? Constant.AMPERSAND_CAMPAIGN_ID_EQ + this.campaignId
      : '';
    this.merchantId = this.merchantId
      ? Constant.AMPERSAND_MERCHANT_ID_EQ + this.merchantId
      : '';
    const deeplink =
      Constant.HOMEPAGE_DEEPLINK_PD +
      this.contentId +
      this.campaignId +
      this.merchantId;
    return deeplink;
  }
  private getOnlyId(restOfstring: string): string {
    if (restOfstring.includes('&')) {
      return restOfstring.split('&')[0];
    }
    return restOfstring;
  }
}
