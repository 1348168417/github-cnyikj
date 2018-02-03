// pages/remen/remen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listPage: [{
      "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/打包机齿轮1.jpg",
      "title": "打包机齿轮",
      "bindtap": "azfl"
    },{
        "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/减速器01.jpg",
        "title": "减速器",
        "bindtap": "smtjx"
      }, {
        "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/自行车齿轮1.jpg",
        "title": "自行车齿轮",
        "bindtap": "qhtjx"
    }, {
        "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/6马力船外机齿轮.jpg",
        "title": "马力船外机齿轮",
        "bindtap": "smskt"
      }, ]
  },
  azfl: function () {
    wx.navigateTo({
      url: '../listPage/listPage?type=azfl'
    })
  },
  smtjx: function () {
    wx.navigateTo({
      url: '../listPage/listPage?type=smtjx'
    })
  },
  qhtjx: function () {
    wx.navigateTo({
      url: '../listPage/listPage?type=qhtjx'
    })
  },
  smskt: function () {
    wx.navigateTo({
      url: '../listPage/listPage?type=smskt'
    })
  },
  fl: function () {
    wx.navigateTo({
      url: '../listPage/listPage?type=fl'
    })
  },
  scsmdb: function () {
    wx.navigateTo({
      url: '../listPage/listPage?type=scsmdb'
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