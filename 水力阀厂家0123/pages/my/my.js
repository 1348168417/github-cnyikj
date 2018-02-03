//logs.js
//获取应用实例
var app = getApp()
//var sta = require("../../utils/statistics.js");
Page({
  data: {
    userInfo: {},
  },
  // onShow: function () {
  //   sta();
  // },
  onLoad: function () {
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      });
    })
  },
  callPhone:function(){
    wx.makePhoneCall({
      phoneNumber: '15167719797'
    })
  },
  leaveMessage: function () {
    
  },
  data: {
    markers: [{
      id: 0,
      latitude: 28.046093,
      longitude: 120.615282,
      width: 50,
      height: 50,
      title: "永嘉县华华阀门有限公司",
      color: "#ccc",
      fontSize: 20,
      iconPath: "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序/logo1.JPG",
    }],
    callout:[{
      content:"wode",
      color:"#ccc",
      fontSize:20,
      borderRadius:30,
      bgColor:"#aaa",
      padding:20
    }],
    polyline: [{
      points: [{
        longitude: 120.615282,
        latitude: 28.046093
      }, {
        longitude: 120.615282,
        latitude: 28.046093
      }],
      color: "#1dbbd3",
      width: 2,
      dottedLine: true
    }],
    circles:[{
      latitude: 28.046093,
      longitude: 120.615282,
      radius:20,
      color: "#1dbbd3",
      fillColor: "#1dbbd3",
      strokeWidth:200
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
      urls: ["http://www.cnyikj.com/clientInfo/luoxuansan0104/微信二维码.png"] // 需要预览的图片http链接列表
    })
  },
})
