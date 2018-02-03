// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    project: [
      {
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/图片1.png",
        tit: "湘湖一号",
        style: "#法式风格#",
        event: "xianghuyihao"
      },
      {
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图1.png",
        tit: "湘湖一号",
        style: "#现代法式混搭风格#",
        event: "xianghuerhao"
      }
    ]
  },
  xianghuyihao: function () {
    wx.navigateTo({
      url: '../../pages/listmore/listaa/listaa?tap=1',
    })
  },
  xianghuerhao: function () {
    wx.navigateTo({
      url: '../../pages/listmore/listab/listab?tap=2',
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