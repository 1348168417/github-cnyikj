Page({
  data: {
   
   imgUrls: [
      'http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序/banner2.jpg',
      'http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序/门头.jpg',
      'http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序/配色墙.JPG'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 3000,
    pzfu: [
      {
        "img":'http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序/1.png',
        "worda":'免费预约',
        "wordb":'登记联系方式'
      },
      {
        "img": 'http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序/2.png',
        "worda": '免费量房',
        "wordb": '装修管家上门量房'
      },
      {
        "img": 'http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序/3.png',
        "worda": '专属设计',
        "wordb": '打造自己的专属空间'
      },
      {
        "img": 'http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序/4.png',
        "worda": '对比方案',
        "wordb": '对比装修公司'
      },
      {
        "img": 'http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序/5.png',
        "worda": '签订合同',
        "wordb": '签订合同及托管资金'
      },
      {
        "img": 'http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序/6.png',
        "worda": '装修施工',
        "wordb": '工人安排期施工交付'
      },
      {
        "img": 'http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序/7.png',
        "worda": '竣工验收',
        "wordb": '通过全屋装修指标'
      },
      {
        "img": 'http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序/8.png',
        "worda": '享受保障',
        "wordb": '享受国家标准质保'
      }
    ],
    Bcase :[
      {
        "img": 'http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序/b1.png',
        "bindtap":'Bcase_1',
      }, 
      {
        "img": 'http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序/b4.png',
        "bindtap":'Bcase_4',
      },
      {
        "img": 'http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序/b2.png',
        "bindtap":'Bcase_2',
      },
      {
        "img": 'http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序/b5.png',
        "bindtap":'Bcase_5',
      },
      {
        "img": 'http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序/b3.png',
        "bindtap":'Bcase_3',
      },
      {
        "img": 'http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序/b6.png',
        "bindtap":'Bcase_6',
      }
    ]
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
  Bcase_1: function(){
    wx.navigateTo({
      url: '../../pages/Bcase/Bcase?type=Bcase_1',
    })
  },
  Bcase_2: function () {
    wx.navigateTo({
      url: '../../pages/Bcase/Bcase?type=Bcase_2',
    })
  },
  Bcase_3: function () {
    wx.navigateTo({
      url: '../../pages/Bcase/Bcase?type=Bcase_3',
    })
  },
  Bcase_4: function () {
    wx.navigateTo({
      url: '../../pages/Bcase/Bcase?type=Bcase_4',
    })
  },
  Bcase_5: function () {
    wx.navigateTo({
      url: '../../pages/Bcase/Bcase?type=Bcase_5',
    })
  },
  Bcase_6: function () {
    wx.navigateTo({
      url: '../../pages/Bcase/Bcase?type=Bcase_6',
    })
  },
  yuyue: function () {
    wx.navigateTo({
      url: '../../pages/yuyue/yuyue',
    })
  },
  shejishi: function () {
    wx.navigateTo({
      url: '../../pages/shejishi/shejishi',
    })
  },
  shoufei: function () {
    // wx.navigateTo({
    //   url: '../../pages/shoufei/shoufei',
    // })
    wx.switchTab({
      url: '../../pages/about/about',
    })
  },
  jieshao: function () {
    wx.navigateTo({
      url: '../../pages/jieshao/jieshao',
    })
  },
  listaa: function(){
    wx.navigateTo({
      url: '../../pages/listmore/listaa/listaa',
    })
  },
  listab: function () {
    wx.navigateTo({
      url: '../../pages/listmore/listab/listab',
    })
  },
  listac: function () {
    wx.navigateTo({
      url: '../../pages/listmore/listac/listac',
    })
  },
  listba: function () {
    wx.navigateTo({
      url: '../../pages/listmore/listba/listba',
    })
  },
  listbb: function () {
    wx.navigateTo({
      url: '../../pages/listmore/listbb/listbb',
    })
  },
  listbc: function () {
    wx.navigateTo({
      url: '../../pages/listmore/listbc/listbc',
    })
  },
  listca: function () {
    wx.navigateTo({
      url: '../../pages/listmore/listca/listca',
    })
  },
  listcb: function () {
    wx.navigateTo({
      url: '../../pages/listmore/listcb/listcb',
    })
  },
  listcc: function () {
    wx.navigateTo({
      url: '../../pages/listmore/listcc/listcc',
    })
  },
  call: function(){
    wx.switchTab({
      url: '../../pages/about/about',
    })
  }
  
})




//index.js    
//获取应用实例    
  