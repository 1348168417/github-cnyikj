// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classify: [
      {
        "name": "打包机齿轮",
        "bindtap": "azfl"
      }, 
      {
        "name": "减速器齿轮",
        "bindtap": "smtjx"
      },
      {
        "name": "自行车齿轮",
        "bindtap": "qhtjx"
      },
      {
        "name": "马力船外机齿轮",
        "bindtap": "smskt"
      },
      {
        "name": "割草机齿轮",
        "bindtap": "qhskt"
      },
      {
        "name": "女式摩托齿轮",
        "bindtap": "qhpmdb"
      },
      {
        "name": "汽车盆角齿轮",
        "bindtap": "qhfgdb"
      },
      {
        "name": "挖机齿轮",
        "bindtap": "qhphdb"
      },
      {
        "name": "玩具车齿轮",
        "bindtap": "qhzsdb"
      },
      {
        "name": "直伞齿轮",
        "bindtap": "scsmdb"
      },
      {
        "name": "无链条自行车齿轮",
        "bindtap": "drwsmdb"
      },
      {
        "name": "食品机械齿轮",
        "bindtap": "pmtjmdb"
      },
      // {
      //   "name": "仿古钛晶面地板",
      //   "bindtap": "fgtjmdb"
      // },
      // {
      //   "name": "多层平面实木复合地板",
      //   "bindtap": "dcpmsmfhdb"
      // },
      // {
      //   "name": "多层仿古实木复合地板",
      //   "bindtap": "dcfgsmfhdb"
      // },
      // {
      //   "name": "多层拼花实木复合地板",
      //   "bindtap": "dcphsmfhdb"
      // },
      // {
      //   "name": "多层庄森实木复合地板",
      //   "bindtap": "dczssmfhdb"
      // }
    ]
  },

  azfl:function(){
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
  qhskt: function () {
    wx.navigateTo({
      url: '../listPage/listPage?type=qhskt'
    })
  },
  qhpmdb: function () {
    wx.navigateTo({
      url: '../listPage/listPage?type=qhpmdb'
    })
  },
  qhfgdb: function () {
    wx.navigateTo({
      url: '../listPage/listPage?type=qhfgdb'
    })
  },
  qhphdb: function () {
    wx.navigateTo({
      url: '../listPage/listPage?type=qhphdb'
    })
  },
  qhzsdb: function () {
    wx.navigateTo({
      url: '../listPage/listPage?type=qhzsdb'
    })
  },
  scsmdb: function () {
    wx.navigateTo({
      url: '../listPage/listPage?type=scsmdb'
    })
  },
  drwsmdb: function () {
    wx.navigateTo({
      url: '../listPage/listPage?type=drwsmdb'
    })
  },
  pmtjmdb: function () {
    wx.navigateTo({
      url: '../listPage/listPage?type=pmtjmdb'
    })
  },
  fgtjmdb: function () {
    wx.navigateTo({
      url: '../listPage/listPage?type=fgtjmdb'
    })
  },
  dcpmsmfhdb: function () {
    wx.navigateTo({
      url: '../listPage/listPage?type=dcpmsmfhdb'
    })
  },
  dcfgsmfhdb: function () {
    wx.navigateTo({
      url: '../listPage/listPage?type=dcfgsmfhdb'
    })
  },
  dcphsmfhdb: function() {
    wx.navigateTo({
      url: '../listPage/listPage?type=dcphsmfhdb'
    })
  },
  dczssmfhdb: function () {
    wx.navigateTo({
      url: '../listPage/listPage?type=dczssmfhdb'
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