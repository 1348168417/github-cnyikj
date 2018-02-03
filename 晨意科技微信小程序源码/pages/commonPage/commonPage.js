// pages/commonPage/commonPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:"",
    title1:"",
    title2:"",
    introduce1:"",
    introduce2:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tyPe = options.type;
    if (tyPe == "wxxcx"){
      this.setData({
        banner: "../../images/xiaochengxuBn.jpg",
        title1: "什么是微信小程序",
        title2: "小程序的优势",
        introduce1: "小程序是指微信公众平台小程序，微信版小型APP，是由腾讯公司开发研制的一款应用产品。特点是无需下载、功能实用、信息获取传播速度快，对商家的利益获取和商业推动作用巨大。",
        introduce2: "../../images/20170908113449.jpg"
      })
    } else if (tyPe == "wxgzh"){
      this.setData({
        banner: "../../images/xiaochengxuBn.jpg",
        title1: "什么是微信公众号",
        title2: "微信公众号账号类型",
        introduce1: "微信公众号是开发者或商家在微信公众平台上申请的应用账号，该账号与QQ账号互通，通过公众号，商家可在微信平台上实现和特定群体的文字、图片、语言、视频的全方位沟通、互动。形成了一种主流的线上线下微信互动营销方式。",
        introduce2: "../../images/gongzhonghao.jpg"
      })
    } else if (tyPe == "rjdz") {
      this.setData({
        banner: "../../images/xiaochengxuBn.jpg",
        title1: "什么是软件定制",
        title2: "软件定制分类",
        introduce1: "软件定制主要指企业管理软件的定制，企业管理软件是指能够体现企业管理的大部分职能（包括决策、计划、组织、领导、监控、分析等等），能够提供实时、相关、准确、完整的数据，位管理者提供决策依据的一种软件。",
        introduce2: "../../images/ruanjiandingzhi.png"
      })
    } else if (tyPe == "app") {
      this.setData({
        banner: "../../images/xiaochengxuBn.jpg",
        title1: "什么是APP",
        title2: "开发系统分类",
        introduce1: "应用程序，Application的缩写，一般指手机软件。是手机完善其功能，为用户提供更丰富的试用体验的主要手段。手机软件的运行需要有相应的手机系统，目前主要的手机系统有：1.苹果公司的IOS，2.谷歌公司的Android（安卓）系统。",
        introduce2: "../../images/appBg.jpg"
      })
    } else if (tyPe == "gsgw") {
      this.setData({
        banner: "../../images/xiaochengxuBn.jpg",
        title1: "什么是公司官网",
        title2: "公司官网优势",
        introduce1: "公司官网。即公司所拥有的正统规范化网站。主要用来介绍公司的具体信息和服务内容，展示公司的企业形象，传播企业文化。也是公司和外界交流互动的官方平台。",
        introduce2: "../../images/20170908113449.jpg"
      })
    } else if (tyPe == "xstd") {
      this.setData({
        banner: "../../images/xiaochengxuBn.jpg",
        title1: "什么是微信小程序",
        title2: "小程序的优势",
        introduce1: "小程序是指微信公众平台小程序，微信版小型APP，是由腾讯公司开发研制的一款应用产品。特点是无需下载、功能实用、信息获取传播速度快，对商家的利益获取和商业推动作用巨大。",
        introduce2: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
      })
    }
  },

  dingzhi:function(){
    wx.switchTab({
      url: '../contactUs/contactUs'
    })
  }
})