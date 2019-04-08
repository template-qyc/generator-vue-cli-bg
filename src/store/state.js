export default {
  /*banner*/
  bannerSite:"",
  /*di*/
  keyword:"",
  time:[],
  selectConditions:[],
  selectKeywords:[],
  addKeywordState:false,
  /*cf*/
  /*shopee*/
  /*公共*/
  platformCategory: "",
  siteType:"AMZ",//平台
   //站点
  sites:"",
  //榜单类型
  scgsTags:'',
  //表格总数
  A9totalCount:0,
  /**********DI**********/
  category:[],
  bsr:"",
  noMoreData:false,
  site:"com",
  categoryArray:[],
  selectTab:"tab1",
  brandCount:0,
  commentCount:0,
  isShowAsin:false,
  asinParmas:{},
  ebayisCollect:'tab1',
  condition:[],
  isReadTotal:0,
  developStatus:"ALL",
  categorySearch:false,
  taskId:0,
  /*********ebay**********/
  ebaySite:"",
  ebaycategory:[],
  ebaysellerCategory:[],//ebay
  /*monitor*/
  monitorCompetitiveBtn:0,
  /*helpcenter*/
   path:"",
  /******aliExpress*******/
  aliExpressCategory:[],
  //按钮
  btnId:0,
  //tab
  tabId:1,
  aliExpressSite:"",
  //过滤字段
  rankType:4,
  /******铺货*******/
  isDistribution:false,
  //关联参数
  supplierId:[],
  fromTable:true, //从哪里关联供应商
  puhuoParams: {
    category: "string",
    emaPlatform: "AMAZON",
    emaProductId: "string",
    emaTag: "AMAZON_DETON_TOTAL",
    sellerInfoIds: [
      {
        productInfo1688Id: 0,
        supplierInfoId: 0
      }
    ],
    siteType: "string"
  },
  emaTag:"AMAZON_DETON_TOTAL",
  puhuourl:[],
  initTable:false,
  showPuhuo:false,
  puhuoPath:'/di/amzSelection/dataObserve/news/newRecommend/newRecommendCrossList',
  isBaoguan:false,
  tableScroll: [],
  /*********用户信息**********/
  userName:'',
  userInfo:{}
}
