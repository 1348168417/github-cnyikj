// pages/classlist/classlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tYpe = options.type;
    if (tYpe == "xiaoxue") {
      this.setData({
        url: [
          {
            "word":"小学课表",
            "img": "http://www.cnyikj.com/clientInfo/zhujijiaoyu/葛伟新课表img/小学1011.jpg",
          }
        ]
      })
    }
    else if (tYpe == "chuzhong") {
      this.setData({
        url: [
          {
            "img": "http://www.cnyikj.com/clientInfo/zhujijiaoyu/葛伟新课表img/初中.jpg",
            "word": "初中课表"
          }
        ]
      })
    }
    else if (tYpe == "gaozhong") {
      this.setData({
        url: [
          {
            "img": "http://www.cnyikj.com/clientInfo/zhujijiaoyu/葛伟新课表img/高中1.jpg",
            "word": "高中课表"
          }
        ]
      })
    }
    else if (tYpe == "hhlzxx") {
      this.setData({
        url: [
          {
            "img": "http://www.cnyikj.com/clientInfo/zhujijiaoyu/葛伟新课表img/荷花路中小学课表.jpg",
            "word": "荷花路中小学课表"
          }
        ]
      })
    }
    else if (tYpe == "hhlgz") {
      this.setData({
        url: [
          {
            "img": "http://www.cnyikj.com/clientInfo/zhujijiaoyu/葛伟新课表img/荷花路高中.jpg",
            "word": "荷花路高中课表"
          }
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