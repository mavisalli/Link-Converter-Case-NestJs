const enum Constant {
  //use inside urlToDeeplink folder

  HOMEPAGE_DEEPLINK_PD = 'ty://?Page=Product&ContentId=',
  HOMEPAGE_DEEPLINK_SR = 'ty://?Page=Search&Query=',
  HOMEPAGE_DEEPLINK = 'ty://?Page=Home',

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
}
export default Constant;
