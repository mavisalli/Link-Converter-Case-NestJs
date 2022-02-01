import { Injectable } from '@nestjs/common';
import { FromDeeplinkToUrlDto } from '../../dtos/FromDeeplinkToUrl.dto';
import Constant from '../constant/constants';

@Injectable()
export class SearchDeeplinkBuilder {
  queryParams?: string;
  public builder(fromDeeplinkToUrlDto: FromDeeplinkToUrlDto): string {
    let params = fromDeeplinkToUrlDto.source;
    this.queryParams = String(
      params.substring(
        params.lastIndexOf(Constant.SEARCH_QUERY) + 13,
        params.length,
      ),
    );
    const urlLink = Constant.HOMEPAGE_SR + this.queryParams;
    return urlLink;
  }
}
