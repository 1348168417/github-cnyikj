//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://www.cnyikj.com/clientInfo/zhujijiaoyu/门店图片.jpg',
      '../images/pic3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular:true,
    url: [
      {
        "img": "http://www.cnyikj.com/clientInfo/zhujijiaoyu/1.jpg",
        "word": "小学奥数",
        "bindtap":"xiaoxue"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/zhujijiaoyu/3.jpg",
        "word": "初中奥数",
        "bindtap": "chuzhong"
      },
      {  
        "img": "http://www.cnyikj.com/clientInfo/zhujijiaoyu/2.jpg",
        "word": "高中奥数",
        "bindtap": "gaozhong"
      }
    ]
  },
  xiaoxue:function(){
    wx.navigateTo({
      url: '../classlist/classlist?type=xiaoxue',
    })
  },
  chuzhong: function () {
    wx.navigateTo({
      url: '../classlist/classlist?type=chuzhong',
    })
  },
  gaozhong: function () {
    wx.navigateTo({
      url: '../classlist/classlist?type=gaozhong',
    })
  },
  aboutaoshu:function(){
    wx.navigateTo({
      url: '../aboutaoshu/aboutaoshu'
    })
    // wx.switchTab({
    //   url: "../classify/classify"
    // })
  },
  newestCondition: function () {
    wx.navigateTo({
      url: '../newestCondition/newestCondition'
    })
  },
  league: function () {
    wx.navigateTo({
      url: '../league/league'
    })
  },
  hot: function () {
    wx.navigateTo({
      url: '../hot/hot'
    })
  }
})//index.js
//获取应用实例
