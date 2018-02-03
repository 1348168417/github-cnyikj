// classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list: [
        {
          "img":"http://www.cnyikj.com/clientInfo/zhujijiaoyu/1.jpg",
          "tit":"小学",
          "word": "所含课程：奥数初级预科班、奥数初级班、奥数中级班、奥数高级培优班、冲双语北大数学班、金牌乐易英语、金牌写作 等",
          "bindtap": "xiaoxue"
        },
        {
          "img": "http://www.cnyikj.com/clientInfo/zhujijiaoyu/3.jpg",
          "tit": "初中",
          "word": "所含课程：初中全科班（语英数科、奥数诸中班、奥数北大班、数学提升班、数学诸中提前班  等",
          "bindtap": "chuzhong"
        },
        {
          "img": "http://www.cnyikj.com/clientInfo/zhujijiaoyu/2.jpg",
          "tit": "高中",
          "word": "所含课程：高中数学/英语名师班、语物化生政史地技选科班 等",
          "bindtap": "gaozhong"
        },
        {
          "img": "http://www.cnyikj.com/clientInfo/zhujijiaoyu/1.jpg",
          "tit": "[荷花路]中小学",
          "word": "所含课程：英语预科、奥数初级、所有艺术、科技课程、写作10人名师、 等",
          "bindtap": "hhlzxx"
        },
        {
          "img": "http://www.cnyikj.com/clientInfo/zhujijiaoyu/2.jpg",
          "tit": "[荷花路]高中",
          "word": "所含课程：英语预科、奥数初级、所有艺术、科技课程、写作10人名师、 等",
          "bindtap": "hhlgz"
        },
       
      ]
  },
  xiaoxue: function () {
    wx.navigateTo({
      url: '../classlist/classlist?type=xiaoxue'
    })
  },
  chuzhong: function () {
    wx.navigateTo({
      url: '../classlist/classlist?type=chuzhong'
    })
  },
  gaozhong: function () {
    wx.navigateTo({
      url: '../classlist/classlist?type=gaozhong'
    })
  },
  
  hhlzxx: function () {
    wx.navigateTo({
      url: '../classlist/classlist?type=hhlzxx'
    })
  },
  hhlgz: function () {
    wx.navigateTo({
      url: '../classlist/classlist?type=hhlgz'
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
