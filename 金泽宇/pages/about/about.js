// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      id: 0,
      latitude: 29.064456,
      longitude: 119.630661,
      width: 50,
      height: 50,
      title:"盖亚空间设计工作室",
      iconPath: "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序/logo1.JPG",
    }],
    polyline: [{
      points: [{
        longitude: 119.630661,
        latitude: 29.064456
      }, {
          longitude: 119.630661,
        latitude: 29.064456
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: 'http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序/logo1.JPG',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    callout:[{
      content:"盖亚空间设计工作室",
    }]
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

  makecall: function () {
    wx.makePhoneCall({
      phoneNumber: '18006549667' //仅为示例，并非真实的电话号码
    })
  },
  about_gaiya: function(){
   wx.navigateTo({
     url: '../../pages/about_gaiya/about_gaiya',
   })
  },
  about_people: function () {
    wx.navigateTo({
      url: '../../pages/jieshao/jieshao',
    })
  }

})