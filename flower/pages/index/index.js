//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      '../../pages/images/flower01.jpg',
      '../../pages/images/flower03.jpg',
      '../../pages/images/flower04.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular:true,
    list: [
      {
        img: "http://img01.hua.com/uploadpic/newpic/9010011.jpg_220x240.jpg",
        tit: "一心一意",
        pri: "￥129"
      },
      {
        img: "http://img01.hua.com/uploadpic/newpic/9010966.jpg_220x240.jpg",
        tit: "一往情深",
        pri: "￥235"
      },
      {
        img: "http://img01.hua.com/uploadpic/newpic/9012177.jpg_220x240.jpg",
        tit: "不变的承诺",
        pri: "￥518"
      },
      {
        img: "http://img01.hua.com/uploadpic/newpic/9012175.jpg_220x240.jpg",
        tit: "月光女神",
        pri: "￥228"
      },
      {
        img: "http://img01.hua.com/uploadpic/newpic/9012161.jpg_220x240.jpg",
        tit: "爱的诺言",
        pri: "￥195"
      },
      {
        img: "http://img01.hua.com/uploadpic/newpic/9012185.jpg_220x240.jpg",
        tit: "梦的光点",
        pri: "￥335"
      },
      {
        img: "http://img01.hua.com/uploadpic/newpic/9012141.jpg_220x240.jpg",
        tit: "柔情似水",
        pri: "￥148"
      },
      {
        img: "http://img01.hua.com/uploadpic/newpic/1073003.jpg_220x240.jpg",
        tit: "永生花·触摸",
        pri: "￥158"
      },
      {
        img: "http://img01.hua.com/uploadpic/newpic/1073047.jpg_220x240.jpg",
        tit: "永生花 · 十二星座经典七彩·狮子座",
        pri: "￥288"
      },
      {
        img: "http://img01.hua.com/uploadpic/newpic/1073112.jpg_220x240.jpg",
        tit: "永生花·小公主",
        pri: "￥489"
      },
      {
        img: "http://img01.hua.com/uploadpic/newpic/1073125.jpg_220x240.jpg",
        tit: "永生花 · 公主的水晶鞋·粉",
        pri: "￥198"
      }
    ]
  },
  tiaozhuan: function () {
    wx.navigateTo({
      url: '../../pages/first/first',
    })
  }

})