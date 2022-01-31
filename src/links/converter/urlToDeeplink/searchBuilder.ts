import { Injectable } from '@nestjs/common';
import { FromUrlToDeeplinkDto } from '../../dtos/FromUrlToDeeplink.dto';
import Constant from '../constant/constants';

@Injectable()
export class SearchUrlBuilder {
  queryParams?: string;
  public builder(fromUrlToDeeplinkDto: FromUrlToDeeplinkDto) {
    let params = fromUrlToDeeplinkDto.source;
    this.queryParams = params.substring(
      params.lastIndexOf(Constant.Q_EQ) + 2,
      params.length,
    );
    const deeplink = Constant.HOMEPAGE_DEEPLINK_SR + this.queryParams;
    return deeplink;
  }
}
