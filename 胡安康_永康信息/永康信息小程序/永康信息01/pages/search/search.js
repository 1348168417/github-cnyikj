// search.js
var cf = require("../../config.js");
var mallSiteId = wx.getStorageSync('mallSiteId');
var cusmallToken = wx.getStorageSync('cusmallToken');
//获取应用实例
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword:"",
    staticResPath: cf.config.staticResPath,
    userImagePath: cf.config.userImagePath,
    goodsList:[]
  },
  search: function (e) {
    this.setData({ keyword: e.detail.value });
    this.fetchData();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    app.getUserInfo(function (userInfo, res) {
      cusmallToken = wx.getStorageSync('cusmallToken');
      mallSiteId = wx.getStorageSync('mallSiteId');
      wx.setNavigationBarTitle({
        title: "商品搜索列表"
      })
      that.setData({ keyword: options.keyword });
      that.fetchData();
    });
  },

  fetchData: function () {
    var that = this;
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
      url: cf.config.pageDomain + '/applet/mobile/goods/findGoods',
      data: {
        mallsiteId: mallSiteId,
        cusmallToken: cusmallToken,
        goodsName:that.data.keyword,
        start:0,
        limit:10
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var goodsList = res.data.model.result;
        that.setData({ goodsList: goodsList });
        wx.hideLoading();
      }
    })

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