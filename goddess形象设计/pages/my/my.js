//logs.js
//获取应用实例
var app = getApp()
//var sta = require("../../utils/statistics.js");
Page({
  data: {
    userInfo: {},

    imgUrls: [
      'http://www.cnyikj.com/clientInfo/goddess/门店2.jpg',
      'http://www.cnyikj.com/clientInfo/goddess/banner/a6.png',
      'http://www.cnyikj.com/clientInfo/goddess/门店2.jpg',

    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 3000,
  },
  // onShow: function () {
  //   sta();
  // },



  
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  callPhone: function () {
    wx.makePhoneCall({
      phoneNumber: '15058399762'
    })
  },
  leaveMessage: function () {

  },
  data: {
    markers: [{
      id: 0,
      latitude: 28.144781,
      longitude: 120.684509,
      width: 50,
      height: 50,
      title: "永嘉县上塘镇明珠花园南门Goddess形象设计",
      color: "#ccc",
      fontSize: 20,
      iconPath: "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序/logo1.JPG",
    }],
    callout: [{
      content: "wode",
      color: "#ccc",
      fontSize: 20,
      borderRadius: 30,
      bgColor: "#aaa",
      padding: 20
    }],
    polyline: [{
      points: [{
        longitude: 120.684509,
        latitude: 28.144781
      }, {
        longitude: 120.684509,
        latitude: 28.144781
      }],
      color: "#1dbbd3",
      width: 2,
      dottedLine: true
    }],
    circles: [{
      latitude: 28.144781,
      longitude: 120.684509,
      radius: 20,
      color: "#1dbbd3",
      fillColor: "#1dbbd3",
      strokeWidth: 200
    }],
    controls: [{
      id: 1,
      iconPath: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3798475220,1495556061&fm=58',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  fd: function () {
    wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: ["http://www.cnyikj.com/clientInfo/goddess/qrCode.jpg"] // 需要预览的图片http链接列表
    })
  },
})
