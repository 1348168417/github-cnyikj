//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      '../../images/pic1.jpg',
      '../../images/pic2.jpg',
      '../../images/pic3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000
  }
})