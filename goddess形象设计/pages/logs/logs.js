//index.js
//获取应用实例
const app = getApp()

Page({
  data: {



    imgUrls: [
      {
        "img":"http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (11).jpg",
        "tit":"发型设计师：李泽庆",
        "arc":"新锐先锋设计师，年轻潮流，创意无限"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (19).jpg",
        "tit": "发型设计师：李泽庆",
        "arc": "新锐先锋设计师，年轻潮流，创意无限"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (25).jpg",
        "tit": "发型设计师：李泽庆",
        "arc": "新锐先锋设计师，年轻潮流，创意无限"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (8).jpg",
        "tit": "发型设计师：李泽庆",
        "arc": "新锐先锋设计师，年轻潮流，创意无限"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (17).jpg",
        "tit": "发型设计师：李泽庆",
        "arc": "新锐先锋设计师，年轻潮流，创意无限"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (29).jpg",
        "tit": "发型设计师：李泽庆",
        "arc": "新锐先锋设计师，年轻潮流，创意无限"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (27).jpg",
        "tit": "发型设计师：李泽庆",
        "arc": "新锐先锋设计师，年轻潮流，创意无限"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (25).jpg",
        "tit": "发型设计师：李泽庆",
        "arc": "新锐先锋设计师，年轻潮流，创意无限"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (28).jpg",
        "tit": "发型设计师：李泽庆",
        "arc": "新锐先锋设计师，年轻潮流，创意无限"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (7).jpg",
        "tit": "发型设计师：李泽庆",
        "arc": "新锐先锋设计师，年轻潮流，创意无限"
      }
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 3000,
    


    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
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
  listall: function () {
    wx.switchTab({
      url: '../../pages/classify/classify'
    })
  }
})
