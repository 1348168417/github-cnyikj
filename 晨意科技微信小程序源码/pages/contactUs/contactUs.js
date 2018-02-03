//logs.js
//获取应用实例
var app = getApp()
//var sta = require("../../utils/statistics.js");
Page({
  data: {
    userInfo: {},
  },
  
  onLoad: function () {
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      });
    })
  },
  callPhone: function () {
    wx.makePhoneCall({
      phoneNumber: '057187038971'
    })
  },
  leaveMessage: function () {

  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function (res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  }
})