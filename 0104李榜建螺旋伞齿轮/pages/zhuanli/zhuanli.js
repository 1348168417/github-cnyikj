// pages/zhuanli/zhuanli.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhuanli:[{
      "img":"http://www.cnyikj.com/clientInfo/luoxuansan0104/谢登琴营业执照.jpg",
      "title":"营业执照",
    },
    ]
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
  
  },
  previewImage:function(){
    wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: ["http://www.cnyikj.com/clientInfo/hzmenchuang/zhengshu1.jpg"] // 需要预览的图片http链接列表
    })
  }
})