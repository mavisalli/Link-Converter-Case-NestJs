const enum Constant {
  //use inside urlToDeeplink folder

  HOMEPAGE_DEEPLINK_PD = 'bw://?Page=Product&ContentId=',
  HOMEPAGE_DEEPLINK_SR = 'bw://?Page=Search&Query=',
  HOMEPAGE_DEEPLINK = 'bw://?Page=Home',

  P_PARAM = '-p-',
  Q_PARAM = '?',
  Q_EQ = 'q=',

  BOUTIQUE_ID_LOWER = 'boutiqueId',
  BOUTIQUE_ID_EQ = 'boutiqueId=',

  MERCHANT_ID_LOWER = 'merchantId',
  MERCHANT_ID_EQ = 'merchantId=',
  AMPERSAND_MERCHANT_ID_EQ = '&MerchantId=',

  AMPERSAND_CAMPAIGN_ID_EQ = '&CampaignId=',

  SEARCH_PARAM = '/sr',

  //use inside deeplinkToUrl folder

  HOMEPAGE_LINK = 'https://www.brandway.com',
  HOMEPAGE_SR = 'https://www.brandway.com/sr?q=',
  HOMEPAGE_BRAND = 'https://www.brandway.com/brand/name-p-',

  PRODUCT_CONTENTID = 'Product&ContentId=',

  AMPERSAND_CAMPAIGN_ID = '&CampaignId',

  Q_BOUTIQUE_ID = '?boutiqueId',

  AMPERSAND_MERCHANT_ID_LOWER = '&merchantId',
  AMPERSAND_MERCHANT_ID = '&MerchantId',
  Q_MERCHANT_ID = '?merchantId',

  SEARCH_QUERY = 'Search&Query=',
}
export default Constant;
