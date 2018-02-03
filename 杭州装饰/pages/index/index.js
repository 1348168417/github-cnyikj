Page({
  data: {
    imgUrls: [
      'http://mmbiz.qpic.cn/mmbiz_png/ibiaIDpj9DicjrLZPVWG1GMGk9SmrFK6v3AggLKUDib78F4BVrAvReYMJSPqzsjDJXnbicWib3TAagTUxs0SxpgJ4ZFA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1',
      'http://mmbiz.qpic.cn/mmbiz_png/ibiaIDpj9DicjrLZPVWG1GMGk9SmrFK6v3ARic5l3QWNnwyKrVsAbIcJA4s0CvUBSFR4xOMDXcJdv3Urz0fcnDeybw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1',
      'http://mmbiz.qpic.cn/mmbiz_jpg/ibiaIDpj9DicjrLZPVWG1GMGk9SmrFK6v3Abib3fV9gic3zPCoLHvib7E9wrxslJbn6ic9UXoPSuOlj1D1HTUPhmaibplg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,

    project: [
      {
        img:"http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/图片1.png",
        tit:"湘湖一号",
        style:"#法式风格#",
        event:"xianghuyihao"
      },
      {
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图1.png",
        tit: "湘湖一号",
        style: "#现代法式混搭风格#",
        event: "xianghuerhao"
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
    wx.navigateTo({
      url: '../../pages/shoufei/shoufei',
    })
  },
  jieshao: function () {
    wx.navigateTo({
      url: '../../pages/jieshao/jieshao',
    })
  },
  xianghuyihao: function(){
    wx.navigateTo({
      url: '../../pages/listmore/listaa/listaa?tap=1',
    })
  },
  xianghuerhao: function () {
    wx.navigateTo({
      url: '../../pages/listmore/listab/listab?tap=2',
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
  }
  
})




//index.js    
//获取应用实例    
  