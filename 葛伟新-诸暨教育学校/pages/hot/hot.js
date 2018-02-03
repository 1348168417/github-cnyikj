// hot.js
Page({
  joinUs:function(){
    wx.navigateTo({
      url: '../percenter/percenter'
    })
  },
  instrumental:function(){
    wx.navigateTo({
      url: '../commom/commom?type=instrumental'
    })
  },
  vocal: function () {
    wx.navigateTo({
      url: '../commom/commom?type=vocal'
    })
  },
  perform: function () {
    wx.navigateTo({
      url: '../commom/commom?type=perform'
    })
  },
  art: function () {
    wx.navigateTo({
      url: '../commom/commom?type=art'
    })
  },
  science: function () {
    wx.navigateTo({
      url: '../commom/commom?type=science'
    })
  },
  chess: function () {
    wx.navigateTo({
      url: '../commom/commom?type=chess'
    })
  },
  troupe: function () {
    wx.navigateTo({
      url: '../commom/commom?type=troupe'
    })
  },
  summer: function () {
    wx.navigateTo({
      url: '../commom/commom?type=summer'
    })
  },
  clean: function () {
    wx.navigateTo({
      url: '../commom/commom?type=clean'
    })
  },
  calligraphy: function () {
    wx.navigateTo({
      url: '../commom/commom?type=calligraphy'
    })
  },
  children: function () {
    wx.navigateTo({
      url: '../commom/commom?type=children'
    })
  },
  physical: function () {
    wx.navigateTo({
      url: '../commom/commom?type=physical'
    })
  },
  thought: function () {
    wx.navigateTo({
      url: '../commom/commom?type=thought'
    })
  }
})