
// classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/保集湖海塘大平层/大平层.jpg",
        "tit": "保集湖海塘大平层",
        "word": "保集湖海塘大平层",
        "bindtap": "bjhhtdpc"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/保集湖海塘庄园排屋/kang/10000.jpg",
        "tit": "保集湖海塘庄园排屋",
        "word": "保集湖海塘庄园排屋",
        "bindtap": "bjhhtzypw"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/东方前城/东方前城1.jpg",
        "tit": "东方前城",
        "word": "东方前城",
        "bindtap": "dfqc"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/东孝街自建房/ke2.jpg",
        "tit": "东孝街自建房",
        "word": "东孝街自建房",
        "bindtap": "dxjzjf"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/都市郦景园/都市郦景园6-1-1101a.jpg",
        "tit": "都市郦景园",
        "word": "都市郦景园",
        "bindtap": "dsljy"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/海棠花园/海棠花园丁倩1.jpg",
        "tit": "海棠花园",
        "word": "海棠花园",
        "bindtap": "hthy"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/金城名座/金城名座B2-1703室.jpg",
        "tit": "金城名座",
        "word": "金城名座",
        "bindtap": "jcmz"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/金色海棠/mi.jpg",
        "tit": "金色海棠",
        "word": "金色海棠",
        "bindtap": "jsht"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/玫瑰郡/玫瑰郡.jpg",
        "tit": "玫瑰郡",
        "word": "玫瑰郡",
        "bindtap": "mgj"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/永和苑/客厅.jpg",
        "tit": "永和苑",
        "word": "永和苑",
        "bindtap": "yhy"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/御景花园/御景花园5-1-602.jpg",
        "tit": "御景花园",
        "word": "御景花园",
        "bindtap": "yjhy"
      },
      {
        "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/中央御府/中央御府16-2-502.jpg",
        "tit": "中央御府",
        "word": "中央御府",
        "bindtap": "zyyf"
      },

    ]
  },
  bjhhtdpc: function () {
    wx.navigateTo({
      url: '../JCaselist/JCaselist?type=bjhhtdpc'
    })
  },
  bjhhtzypw: function () {
    wx.navigateTo({
      url: '../JCaselist/JCaselist?type=bjhhtzypw'
    })
  },
  dfqc: function () {
    wx.navigateTo({
      url: '../JCaselist/JCaselist?type=dfqc'
    })
  },

  dxjzjf: function () {
    wx.navigateTo({
      url: '../JCaselist/JCaselist?type=hhlzxx'
    })
  },
  dsljy: function () {
    wx.navigateTo({
      url: '../JCaselist/JCaselist?type=dsljy'
    })
  },
  hthy: function () {
    wx.navigateTo({
      url: '../JCaselist/JCaselist?type=hthy'
    })
  },
  jcmz: function () {
    wx.navigateTo({
      url: '../JCaselist/JCaselist?type=jcmz'
    })
  },
  mgj: function () {
    wx.navigateTo({
      url: '../JCaselist/JCaselist?type=mgj'
    })
  },
  mgj: function () {
    wx.navigateTo({
      url: '../JCaselist/JCaselist?type=mgj'
    })
  },
  yhy: function () {
    wx.navigateTo({
      url: '../JCaselist/JCaselist?type=yhy'
    })
  },
  yjhy: function () {
    wx.navigateTo({
      url: '../JCaselist/JCaselist?type=yjhy'
    })
  },
  zyyf: function () {
    wx.navigateTo({
      url: '../JCaselist/JCaselist?type=zyyf'
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


