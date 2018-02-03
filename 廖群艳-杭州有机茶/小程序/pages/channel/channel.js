// channel.js
var cf = require("../../config.js");
var util = require("../../utils/util.js");
var mallSiteId = wx.getStorageSync('mallSiteId');
var cusmallToken = wx.getStorageSync('cusmallToken');
var WxParse = require('../../wxParse/wxParse.js');
//获取应用实例
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    decoration: {},
    imgUrls: [],
    id:"",
    bannerHeight: [],
    shoppingCartCount: 0,
    staticResPath: cf.config.staticResPath,
    userImagePath: cf.config.userImagePath
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    app.getUserInfo(function (userInfo, res) {
      cusmallToken = wx.getStorageSync('cusmallToken');
      mallSiteId = wx.getStorageSync('mallSiteId');
      that.setData({id:options.id});
      that.fetchData();
      util.getShoppingCartCount(function (count) {
        that.setData({ shoppingCartCount: count });
      });
    });
  },
  fetchData: function () {
    var that = this;
    var decorationData = {};
    var cusmallToken = wx.getStorageSync('cusmallToken');
    var mallSiteId = wx.getStorageSync('mallSiteId');
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: cf.config.pageDomain +'/applet/mobile/siteBar/selectSiteBar',
      data: {
        cusmallToken: cusmallToken,
        siteBarId: that.data.id
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var decorationData = JSON.parse(res.data.model.siteBar.decoration);
        wx.setNavigationBarTitle({
          title: decorationData.header_data.title
        })
        // 处理decorationData
        util.processDecorationData(decorationData, that);
        that.setData({
          decoration: decorationData
        });
        if (decorationData != null && decorationData.items != null){
          for (var i = 0; i < decorationData.items.length; i++) {
            var item = decorationData.items[i];
            if(item.item_type == "goodslist"){
              (function(item,i){
                // 加载商品分类数据
                wx.request({
                  url: cf.config.pageDomain +'/applet/mobile/goods/findGoods',
                  data: {
                    cusmallToken: cusmallToken,
                    mallSiteId: mallSiteId,
                    siteBarId: item.data.sitebar_id,
                    start:0,
                    limit:12
                  },
                  header: {
                    'content-type': 'application/json'
                  },
                  success: function (res) {
                    if (res.data.ret == 0) {
                      item.data.list = res.data.model.result;
                      // 处理价格（除以100取两位小数）
                      if (item.data.list != null){
                        for (var i = 0; i < item.data.list.length; i++){
                          var goods = item.data.list[i];
                          goods.price = (goods.price/100).toFixed(2);
                          goods.originalPrice = (goods.originalPrice/100).toFixed(2);
                        }
                      }
                      
                      that.setData({
                        decoration: decorationData
                      });
                    }
                  }
                })
              })(item,i)
              
            }
          }
        }

        wx.hideLoading();
      }
    })
  },
  search: function (e) {
    wx.navigateTo({
      url: '/pages/search/search?keyword=' + e.detail.value,
    })
  },
  onBannerImgLoad: function (e) {
    var that = this;
    util.processBannerImgLoad(e, that);
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