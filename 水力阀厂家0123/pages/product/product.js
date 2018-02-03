// pages/remen/remen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listPage: [{
      "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/倒流防止器/防污隔断阀1.jpg",
      "title": "防污隔断阀",
      "bindtap": "azfl"
    },{
        "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/蝶阀/D343H硬密封蝶阀1.jpg",
        "title": "蝶阀",
        "bindtap": "smtjx"
      }, {
        "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/多功能水泵控制阀/AX742X泄压持压阀.jpg",
        "title": "多功能水泵控制阀",
        "bindtap": "qhtjx"
    }, {
        "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/截止阀/铸钢截止阀1.jpg",
        "title": "截止阀",
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