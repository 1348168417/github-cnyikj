// pages/detailPage/detailPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tyPe = options.type;
    console.log(tyPe);
    if (tyPe == "azfl1") {
      this.setData({
        img: [
           {
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (1).jpg',
            "A":"aa"
           },
        ]
      })
    } else if (tyPe == "azfl2") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/打包机齿轮2.jpg",
        ]
      })
    }
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