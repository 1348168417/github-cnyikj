//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 2000,
    indicatorActiveColor:"#17c0e3",
    servers:[
      {
        title:"微信小程序",
        name:"wxxcx",
        imgUrl:"../../images/xiaochengxu.png"
      }, 
      {
        title: "微信公众号",
        name: "wxgzh",
        imgUrl: "../../images/weixin.png"
      },
      {
        title: "软件定制",
        name: "rjdz",
        imgUrl: "../../images/dingzhi.png"
      },
      {
        title: "APP",
        name: "app",
        imgUrl: "../../images/APP.png"
      },
      {
        title: "公司官网",
        name: "gsgw",
        imgUrl: "../../images/gsgw.png"
      },
      {
        title: "销售团队",
        name: "xstd",
        imgUrl: "../../images/xiaoshou.png"
      },
    ]
  },
  wxxcx:function(){
    wx.navigateTo({
      url: '../commonPage/commonPage?type=wxxcx'
    })
  },
  wxgzh: function () {
    wx.navigateTo({
      url: '../commonPage/commonPage?type=wxgzh'
    })
  },
  rjdz: function () {
    wx.navigateTo({
      url: '../commonPage/commonPage?type=rjdz'
    })
  },
  app: function () {
    wx.navigateTo({
      url: '../commonPage/commonPage?type=app'
    })
  },
  gsgw: function () {
    wx.navigateTo({
      url: '../commonPage/commonPage?type=gsgw'
    })
  },
  xstd: function () {
    wx.navigateTo({
      url: '../commonPage/commonPage?type=xstd'
    })
  }
})
