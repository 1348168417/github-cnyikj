//index.js
var cf = require("../../config.js");
var util = require("../../utils/util.js");
var cusmallToken = wx.getStorageSync('cusmallToken');
//获取应用实例
var app = getApp();
Page({
  data: {
    decoration: {},
    shoppingCartCount:0,
    bannerHeight:[],
    staticResPath: cf.config.staticResPath,
    userImagePath: cf.config.userImagePath
  },
  onLoad: function () {
    wx.showShareMenu({
      withShareTicket: false
    });
    //生命周期函数--监听页面加载
    var that = this;
    // //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo, res){
      if(res){
        that.fetchData(res);
        util.getShoppingCartCount(function(count){
          that.setData({ shoppingCartCount: count});
        });
      } else {
        app.fetchMallSite(function (userInfo, res){
          that.fetchData(res);
          util.getShoppingCartCount(function (count) {
            that.setData({ shoppingCartCount: count });
          });
        });
      }
    })
    //util.addPVStat();
  },
  search:function(e){
    wx.navigateTo({
      url: '/pages/search/search?keyword=' + e.detail.value,
    })
  },
  fetchData: function (res) {
    var that = this;
    var decorationData = {};
    var mallSite = res.data.model.mallSite;
    if(res.data.model.decoration){
      decorationData = JSON.parse(res.data.model.decoration);
    } else {
      decorationData = JSON.parse(mallSite.decoration);
    }
    wx.setNavigationBarTitle({
      title: decorationData.header_data.title
    })
    // 处理decorationData
    util.processDecorationData(decorationData,that);
    that.setData({
      decoration: decorationData,
    });
  },
  changeRoute: function (url) {
    wx.navigateTo({
      url: `../${url}/${url}`
    })
  },
  onBannerImgLoad:function(e){
    var that = this;
    util.processBannerImgLoad(e, that);
  },
  onReady: function () {
    //生命周期函数--监听页面初次渲染完成
    // console.log('onReady');
  },
  onShow: function () {
    //生命周期函数--监听页面显示
    // console.log('onShow');
  },
  onHide: function () {
    //生命周期函数--监听页面隐藏
    // console.log('onHide');
  },
  onUnload: function () {
    //生命周期函数--监听页面卸载
    // console.log('onUnload');
  },
  onPullDownRefresh: function () {
    //页面相关事件处理函数--监听用户下拉动作
    // console.log('onPullDownRefresh');
  },
  onReachBottom: function () {
    //页面上拉触底事件的处理函数
    // console.log('onReachBottom');
  }
})
