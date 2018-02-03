//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://www.cnyikj.com/clientInfo/youqituliao/小程序/BANNER.jpg',
      'http://www.cnyikj.com/clientInfo/youqituliao/小程序/BANNER1.jpg',
      'http://www.cnyikj.com/clientInfo/youqituliao/小程序/BANNER2.JPG'
    ],
    vertical: false,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 3000,


    gonggao: [
      {
      "img":'http://www.cnyikj.com/clientInfo/youqituliao/小程序/A.png',
      "word":"最新资讯:立邦荣获上海市企业标准“领跑者”标准荣誉称号"
      },
      {
      "img":'http://www.cnyikj.com/clientInfo/youqituliao/小程序/A.png',
      "word":"公告：小程序为初步的上线测试，敬请期待后续开发"
      },
      {
      "img":'http://www.cnyikj.com/clientInfo/youqituliao/小程序/A.png',
      "word":"欢迎进入油漆涂料网。"
      }
    ],
    vertical_a: true,
    indicatorDots_a: false,
    autoplay_a: true,
    interval_a: 3000,
    duration_a: 3000,
    circular_a: true,
    shoplist: [
      {
        "img":"http://www.cnyikj.com/clientInfo/youqituliao/小程序/Q1.png",
        "word":"金装净味五合一",
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/youqituliao/小程序/q2.png",
        "word": "倍易净无添加五合一",
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/youqituliao/小程序/q3.png",
        "word": "倍易净无添加五合一",
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/youqituliao/小程序/q4.png",
        "word": "加净味家丽安墙面漆",
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/youqituliao/小程序/a5.png",
        "word": "第二代五合一无添加",
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/youqituliao/小程序/q6.png",
        "word": "第二代五合一无添加",
      },
      
    ],
    shoplistB: [
      {
        "img": "http://www.cnyikj.com/clientInfo/youqituliao/小程序/q7.png",
        "word": "家丽安倍涂墙面漆",
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/youqituliao/小程序/q8.png",
        "word": "多乐士净味墙面漆",
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/youqituliao/小程序/q9.png",
        "word": "家丽安倍涂墙面漆",
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/youqituliao/小程序/q10.png",
        "word": "多乐士净味墙面漆",
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/youqituliao/小程序/q7.png",
        "word": "真彩无添加乳胶漆",
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/youqituliao/小程序/q8.png",
        "word": "多乐士净味五合一",
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/youqituliao/小程序/q9.png",
        "word": "真彩净味墙乳胶漆",
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/youqituliao/小程序/q10.png",
        "word": "多乐士净味五合一",
      },
    ],
    shoplistC:[
      "http://www.cnyikj.com/clientInfo/youqituliao/小程序/1.jpg",
      "http://www.cnyikj.com/clientInfo/youqituliao/小程序/2.jpg",
      "http://www.cnyikj.com/clientInfo/youqituliao/小程序/3.jpg",
      "http://www.cnyikj.com/clientInfo/youqituliao/小程序/4.jpg",
      "http://www.cnyikj.com/clientInfo/youqituliao/小程序/5.jpg",
      
    ]
  },
  //事件处理函数
  bindViewTap: function() {
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
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
