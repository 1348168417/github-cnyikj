//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://img3.imgtn.bdimg.com/it/u=1861630001,4236820166&fm=26&gp=0.jpg',
      'http://img0.imgtn.bdimg.com/it/u=494232447,3845838457&fm=26&gp=0.jpg',
      'http://img2.imgtn.bdimg.com/it/u=564885829,1376548219&fm=26&gp=0.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true

  },
  joiners: function () {
    wx.navigateTo({
      url: '../../pages/fruitType/fruitType',
    })
  },
  cases: function () {
    wx.navigateTo({
      url: '../../pages/introduce/introduce',
    })
  },
  join: function () {
    wx.navigateTo({
      url: '../../pages/joinus/joinus',
    })
  }
})