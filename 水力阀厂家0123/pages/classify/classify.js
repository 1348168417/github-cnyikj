// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classify: [
      {
        "name": "倒流防止器",
        "bindtap": "azfl"
      }, 
      {
        "name": "蝶阀",
        "bindtap": "smtjx"
      },
      {
        "name": "多功能水泵控制阀",
        "bindtap": "qhtjx"
      },
      {
        "name": "截止阀",
        "bindtap": "smskt"
      },
      {
        "name": "排泥阀",
        "bindtap": "qhskt"
      },
      {
        "name": "排气阀",
        "bindtap": "qhpmdb"
      },
      {
        "name": "球阀",
        "bindtap": "qhfgdb"
      },
      {
        "name": "水锤消除器",
        "bindtap": "qhphdb"
      },
      {
        "name": "水力控制阀",
        "bindtap": "qhzsdb"
      },
      {
        "name": "调流阀",
        "bindtap": "scsmdb"
      },
      {
        "name": "闸阀",
        "bindtap": "drwsmdb"
      }
      ,
      {
        "name": "止回阀",
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