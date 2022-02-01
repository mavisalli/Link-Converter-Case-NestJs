import { Test, TestingModule } from '@nestjs/testing';
import { FromUrlToDeeplinkDto } from 'src/links/dtos/FromUrlToDeeplink.dto';
import { ProductDetailUrlBuilder } from './productDetailBuilder';
import { SearchUrlBuilder } from './searchBuilder';
import { UrlToDeeplinkLogicalService } from './urlToDeeplink.service';

describe('UrlToDeeplink method tests', () => {
  let urlToDeeplinkLogicalService: UrlToDeeplinkLogicalService;
  let searchUrlBuilder: SearchUrlBuilder;
  let productDetailUrlBuilder: ProductDetailUrlBuilder;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UrlToDeeplinkLogicalService,
        SearchUrlBuilder,
        ProductDetailUrlBuilder,
      ],
    }).compile();

    urlToDeeplinkLogicalService = module.get<UrlToDeeplinkLogicalService>(
      UrlToDeeplinkLogicalService,
    );
    searchUrlBuilder = module.get<SearchUrlBuilder>(SearchUrlBuilder);
    productDetailUrlBuilder = module.get<ProductDetailUrlBuilder>(
      ProductDetailUrlBuilder,
    );
  });
  it('UrlToDeeplink Search&Query', () => {
    let source: FromUrlToDeeplinkDto = {
      id: 1,
      source: 'https://www.trendyol.com/sr?q=elbise',
      target: '',
    };
    expect(searchUrlBuilder.builder(source)).toEqual(
      'ty://?Page=Search&Query=elbise',
    );
  });

  it('UrlToDeeplink Product&Detail both Boutique and Merchant ID', () => {
    let source: FromUrlToDeeplinkDto = {
      id: 2,
      source:
        'https://www.trendyol.com/casio/saat-p-1925865?boutiqueId=439892&merchantId=105064',
      target: '',
    };
    expect(productDetailUrlBuilder.builder(source)).toEqual(
      'ty://?Page=Product&ContentId=1925865&CampaignId=439892&MerchantId=105064',
    );
  });

  it('UrlToDeeplink Product&Detail only Product&ContentId', () => {
    let source: FromUrlToDeeplinkDto = {
      id: 3,
      source: 'https://www.trendyol.com/casio/erkek-kol-saati-p-1925865',
      target: '',
    };
    expect(productDetailUrlBuilder.builder(source)).toEqual(
      'ty://?Page=Product&ContentId=1925865',
    );
  });

  it('UrlToDeeplink Product&Detail only Boutique Id', () => {
    let source: FromUrlToDeeplinkDto = {
      id: 4,
      source:
        'https://www.trendyol.com/casio/erkek-kol-saati-p-1925865?boutiqueId=439892',
      target: '',
    };
    expect(productDetailUrlBuilder.builder(source)).toEqual(
      'ty://?Page=Product&ContentId=1925865&CampaignId=439892',
    );
  });

  it('UrlToDeeplink Product&Detail only Merchant Id', () => {
    let source: FromUrlToDeeplinkDto = {
      id: 5,
      source:
        'https://www.trendyol.com/casio/erkek-kol-saati-p-1925865?merchantId=105064',
      target: '',
    };
    expect(productDetailUrlBuilder.builder(source)).toEqual(
      'ty://?Page=Product&ContentId=1925865&MerchantId=105064',
    );
  });

  it('UrlToDeeplink Others', () => {
    let source: FromUrlToDeeplinkDto = {
      id: 6,
      source: 'https://www.trendyol.com/Hesabim/Favoriler',
      target: '',
    };

    expect(urlToDeeplinkLogicalService.urlToDeeplinkService(source)).toEqual(
      'ty://?Page=Home',
    );
  });
});
