// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "http://webapi.amap.com/theme/v1.3/markers/n/mark_bs.png",
      id: 0,
      latitude: 30.332148,
      longitude: 120.106768,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 120.106768,
        latitude: 30.332148
      }, {
          longitude: 120.106768,
        latitude: 30.332148
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_bs.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
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
      phoneNumber: '123456789' //仅为示例，并非真实的电话号码
    })
  },
  about_gaiya: function(){
    wx.navigateTo({
      url: '../../pages/about_gaiya/about_gaiya',
    })
  },
  about_people: function () {
    wx.navigateTo({
      url: '../../pages/about_people/about_people',
    })
  }

})