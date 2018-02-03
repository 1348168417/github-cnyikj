// pages/listmore/listaa/listaa.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:[
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号3.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号4.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号5.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号6.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号7.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号8.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号9.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号10.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号11.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号12.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号13.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号14.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号15.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号16.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号17.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号18.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号19.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号20.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号21.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号22.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号23.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号24.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号25.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号26.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号27.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号28.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号29.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号30.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号31.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号32.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号33.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号34.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号35.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号36.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号37.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号38.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号39.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号40.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号41.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号42.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号43.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号44.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号45.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号46.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号47.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号48.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号49.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号50.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号51.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号52.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号53.png",
      "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖一号/湘湖一号54.png",
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
  
  }
})