
// classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/横店小红楼甜品店/茶餐厅2.jpg",
        "tit": "横店小红楼甜品店",
        "word": "横店小红楼甜品店",
        "bindtap": "hdxhltpd"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/咖啡店/1.jpg",
        "tit": "咖啡店",
        "word": "咖啡店",
        "bindtap": "kfd"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/明月街美甲店/明月街238号美甲.jpg",
        "tit": "明月街美甲店",
        "word": "明月街美甲店",
        "bindtap": "myjmjd"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/武义瑜伽馆/瑜伽2.jpg",
        "tit": "武义瑜伽馆",
        "word": "武义瑜伽馆",
        "bindtap": "dxjzjf"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/永康无界健身房/236.jpg",
        "tit": "永康无界健身房",
        "word": "永康无界健身房",
        "bindtap": "ykwjjsf"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/御园禅修教室/heshang0000.jpg",
        "tit": "御园禅修教室",
        "word": "御园禅修教室",
        "bindtap": "yycxjs"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/展位/展会1.jpg",
        "tit": "展位",
        "word": "展位",
        "bindtap": "zh"
      }
    ]
  },
  hdxhltpd: function () {
    wx.navigateTo({
      url: '../Gcaselist/Gcaselist?type=hdxhltpd'
    })
  },
  kfd: function () {
    wx.navigateTo({
      url: '../Gcaselist/Gcaselist?type=kfd'
    })
  },
  myjmjd: function () {
    wx.navigateTo({
      url: '../Gcaselist/Gcaselist?type=myjmjd'
    })
  },

  dxjzjf: function () {
    wx.navigateTo({
      url: '../Gcaselist/Gcaselist?type=hhlzxx'
    })
  },
  ykwjjsf: function () {
    wx.navigateTo({
      url: '../Gcaselist/Gcaselist?type=ykwjjsf'
    })
  },
  yycxjs: function () {
    wx.navigateTo({
      url: '../Gcaselist/Gcaselist?type=yycxjs'
    })
  },
  zh: function () {
    wx.navigateTo({
      url: '../Gcaselist/Gcaselist?type=zh'
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
