import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { LinksService } from '../services/links.service';
import { FromUrlToDeeplinkDto } from '../dtos/FromUrlToDeeplink.dto';
import { FromDeeplinkToUrlDto } from '../dtos/FromDeeplinkToUrl.dto';

@Controller()
export class LinksController {
  constructor(private linksService: LinksService) {}

  @Post('/url-to-deeplink')
  async urlToDeeplink(@Body() body: FromUrlToDeeplinkDto) {
    try {
      return await this.linksService.convertUrlToDeeplink(body);
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  @Post('/deeplink-to-url')
  async deeplinktourl(@Body() body: FromDeeplinkToUrlDto) {
    try {
      return await this.linksService.convertDeeplinkToUrl(body);
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }
}
