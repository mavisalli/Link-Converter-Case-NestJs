import { Test, TestingModule } from '@nestjs/testing';
import { FromDeeplinkToUrlDto } from 'src/links/dtos/FromDeeplinkToUrl.dto';
import { DeeplinkToUrlLogicalService } from './deeplinkToUrl.service';
import { ProductDetailDeeplinkBuilder } from './productDetailBuilder';
import { SearchDeeplinkBuilder } from './searchBuilder';

describe('DeeplinkToUrl method tests', () => {
  let deeplinkToUrlLogicalService: DeeplinkToUrlLogicalService;
  let searchDeeplinkBuilder: SearchDeeplinkBuilder;
  let productDetailDeeplinkBuilder: ProductDetailDeeplinkBuilder;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeeplinkToUrlLogicalService,
        SearchDeeplinkBuilder,
        ProductDetailDeeplinkBuilder,
      ],
    }).compile();

    deeplinkToUrlLogicalService = module.get<DeeplinkToUrlLogicalService>(
      DeeplinkToUrlLogicalService,
    );
    searchDeeplinkBuilder = module.get<SearchDeeplinkBuilder>(
      SearchDeeplinkBuilder,
    );
    productDetailDeeplinkBuilder = module.get<ProductDetailDeeplinkBuilder>(
      ProductDetailDeeplinkBuilder,
    );
  });

  it('DeeplinkToUrl Search&Query', () => {
    let source: FromDeeplinkToUrlDto = {
      id: 1,
      source: 'bw://?Page=Search&Query=elbise',
      target: '',
    };
    expect(searchDeeplinkBuilder.builder(source)).toEqual(
      'https://www.brandway.com/sr?q=elbise',
    );
  });
  it('DeeplinkToUrl Product&Detail both Campaign and Merchant ID', () => {
    let source: FromDeeplinkToUrlDto = {
      id: 2,
      source:
        'bw://?Page=Product&ContentId=1925865&CampaignId=439892&MerchantId=105064',
      target: '',
    };
    expect(productDetailDeeplinkBuilder.builder(source)).toEqual(
      'https://www.brandway.com/brand/name-p-1925865?boutiqueId=439892&merchantId=105064',
    );
  });
  it('DeeplinkToUrl Product&Detail only MerchantId', () => {
    let source: FromDeeplinkToUrlDto = {
      id: 3,
      source: 'bw://?Page=Product&ContentId=1925865&MerchantId=105064',
      target: '',
    };
    expect(productDetailDeeplinkBuilder.builder(source)).toEqual(
      'https://www.brandway.com/brand/name-p-1925865?merchantId=105064',
    );
  });
  it('DeeplinkToUrl Product&Detail only Campaign Id', () => {
    let source: FromDeeplinkToUrlDto = {
      id: 4,
      source: 'bw://?Page=Product&ContentId=1925865&CampaignId=439892',
      target: '',
    };
    expect(productDetailDeeplinkBuilder.builder(source)).toEqual(
      'https://www.brandway.com/brand/name-p-1925865?boutiqueId=439892',
    );
  });
  it('DeeplinkToUrl Product&Detail only Product&ContentId', () => {
    let source: FromDeeplinkToUrlDto = {
      id: 5,
      source: 'bw://?Page=Product&ContentId=1925865',
      target: '',
    };
    expect(productDetailDeeplinkBuilder.builder(source)).toEqual(
      'https://www.brandway.com/brand/name-p-1925865',
    );
  });
  it('DeeplinkToUrl Others', () => {
    let source: FromDeeplinkToUrlDto = {
      id: 6,
      source: 'bw://?Page=Favorites',
      target: '',
    };
    expect(deeplinkToUrlLogicalService.deeplinkToUrlService(source)).toEqual(
      'https://www.brandway.com',
    );
  });
});
