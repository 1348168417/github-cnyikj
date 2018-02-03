//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://mmbiz.qpic.cn/mmbiz_jpg/tpknAg6bhddnibCa3kf9PnzPR0eP4Fo48sy3pxdhiakibKkDMCM9IYOlp20QUWUDnUvNjwvFdqfiaicfs5JwEmj9rpw/640?wx_fmt=jpeg',
      'http://mmbiz.qpic.cn/mmbiz_jpg/tpknAg6bhdcUXykiaCjzhwyIWvhNqOSGzzXpSc3ChRJCc54FAxf5k4x5iamjLjKDpCUWAd4A50fyzpaGMhiakeJog/640?wx_fmt=jpeg',
      'http://mmbiz.qpic.cn/mmbiz_jpg/tpknAg6bhdcOHO12Lubv2Oam02PvqzUBKZAqolf8eLEtiaogJGSxC5oCicz0XjvwibSh1z5p2KOUOpiaetyrWLsxEQ/640?wx_fmt=jpeg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true
    
  },
  joiners: function(){
    wx.navigateTo({
      url: '../../pages/joiners/joiners',
    })
  },
  cases: function () {
    wx.navigateTo({
      url: '../../pages/cases/cases',
    })
  },
  join: function () {
    wx.navigateTo({
      url: '../../pages/joinus/joinus',
    })
  }
})