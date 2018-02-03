//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://www.cnyikj.com/clientInfo/jinhuajixie/产品4.jpg',
      'http://www.cnyikj.com/clientInfo/jinhuajixie/产品7.jpg',
      'http://www.cnyikj.com/clientInfo/jinhuajixie/产品9.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,

    shoplist: [
      {
        img: 'http://www.cnyikj.com/clientInfo/jinhuajixie/产品1.jpg',
        tit: "五金器件"
      },
      {
        img: 'http://www.cnyikj.com/clientInfo/jinhuajixie/产品2.jpg',
        tit: "五金器件"
      },
      {
        img: 'http://www.cnyikj.com/clientInfo/jinhuajixie/产品5.jpg',
        tit: "五金器件"
      },
      {
        img: 'http://www.cnyikj.com/clientInfo/jinhuajixie/产品4.jpg',
        tit: "五金器件"
      },
      {
        img: 'http://www.cnyikj.com/clientInfo/jinhuajixie/产品6.jpg',
        tit: "五金器件"
      },
      {
        img: 'http://www.cnyikj.com/clientInfo/jinhuajixie/产品7.jpg',
        tit: "五金器件"
      },
      {
        img: 'http://www.cnyikj.com/clientInfo/jinhuajixie/产品8.jpg',
        tit: "五金器件"
      },
      {
        img: 'http://www.cnyikj.com/clientInfo/jinhuajixie/产品9.jpg',
        tit: "五金器件"
      },
      {
        img: 'http://www.cnyikj.com/clientInfo/jinhuajixie/产品10.jpg',
        tit: "五金器件"
      },
      {
        img: 'http://www.cnyikj.com/clientInfo/jinhuajixie/产品11.jpg',
        tit: "五金器件"
      },
      {
        img: 'http://www.cnyikj.com/clientInfo/jinhuajixie/产品12.jpg',
        tit: "五金器件"
      },
      {
        img: 'http://www.cnyikj.com/clientInfo/jinhuajixie/产品13.jpg',
        tit: "五金器件"
      },
      {
        img: 'http://www.cnyikj.com/clientInfo/jinhuajixie/产品15.jpg',
        tit: "五金器件"
      },
      {
        img: 'http://www.cnyikj.com/clientInfo/jinhuajixie/产品16.jpg',
        tit: "五金器件"
      }
    ],
    chejian: [
      {
        img: 'http://www.cnyikj.com/clientInfo/jinhuajixie/工作车间1.jpg',
        tit: "数控机床"
      },
      {
        img: 'http://www.cnyikj.com/clientInfo/jinhuajixie/工作车间2.jpg',
        tit: "数控机床"
      },
      {
        img: 'http://www.cnyikj.com/clientInfo/jinhuajixie/工作车间3.jpg',
        tit: "数控机床"
      },
      {
        img: 'http://www.cnyikj.com/clientInfo/jinhuajixie/工作车间4.jpg',
        tit: "数控机床"
      },
      {
        img: 'http://www.cnyikj.com/clientInfo/jinhuajixie/工作车间5.jpg',
        tit: "数控机床"
      },
      {
        img: 'http://www.cnyikj.com/clientInfo/jinhuajixie/工作车间6.jpg',
        tit: "数控机床"
      },
      {
        img: 'http://www.cnyikj.com/clientInfo/jinhuajixie/工作车间7.jpg',
        tit: "数控机床"
      },
      {
        img: 'http://www.cnyikj.com/clientInfo/jinhuajixie/工作车间8.jpg',
        tit: "数控机床"
      },
    ]
  },
  news: function () {
    wx.navigateTo({
      url: '../../pages/news/news',
    })
  },
  chanpin: function () {
    wx.navigateTo({
      url: '../../pages/chanpin/chanpin',
    })
  },
  lianxi: function () {

    wx.switchTab({
      url: '../../pages/about/about',
    })
  },
  guanyu: function () {
    wx.navigateTo({
      url: '../../pages/about_gaiya/about_gaiya',
    })
  }
})