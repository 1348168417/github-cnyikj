// detail.js
var cf = require("../../config.js");
var util = require("../../utils/util.js");
var WxParse = require('../../wxParse/wxParse.js');
//获取应用实例
var app = getApp();
var mallSiteId = wx.getStorageSync('mallSiteId');
var cusmallToken = wx.getStorageSync('cusmallToken');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsData: {},
    goodsCover:[],
    decoration: {},
    totalCount: 1,
    bannerHeight: [],
    unitName:"",
    shoppingCartCount: 0,
    deliveryTxt:"-",
    id: "",
    price:0,
    originalPrice:0,
    contClass:"",
    fuzzyLayerStatu:"",
    infoDialogStatu:"",
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
      that.setData({ id: options.id });
      that.fetchData();
      util.getShoppingCartCount(function (count) {
        that.setData({ shoppingCartCount: count });
      });
    });
  },

  fetchData: function () {
    var that = this;
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
      url: cf.config.pageDomain +'/applet/mobile/goods/selectGoods',
      data: {
        cusmallToken: cusmallToken,
        goodsId: that.data.id
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if(res.data.ret == 0){
          var goodsData = res.data.model.goods;
          that.setData({ unitName:goodsData.unitName});
          that.setData({ originalPrice: (goodsData.originalPrice/100).toFixed(2)});
          that.setData({ price: (goodsData.price/100).toFixed(2)});
          if (goodsData.decoration == null){
            goodsData.decoration = {};
          }

          if (goodsData.pics != null){
            that.setData({ goodsCover: goodsData.pics.split(",")});
          }
          that.setData({ goodsData: goodsData });

          var decorationData = JSON.parse(goodsData.decoration);
          if (decorationData.header_data.title){
            wx.setNavigationBarTitle({
              title: decorationData.header_data.title
            })
          } else {
            wx.setNavigationBarTitle({
              title: goodsData.name
            })
          }
          // 处理decorationData
          util.processDecorationData(decorationData, that);
          that.setData({
            decoration: decorationData,
          });

          // 计算快递费用
          that.calDeliveryFee(goodsData);

          wx.hideLoading();
        } else {
          wx.hideLoading();
          wx.showModal({
            title: '获取商品信息异常',
            showCancel:false,
            content: res.data.msg
          })
        }
      }
    })

  },
  backToHome:function(){
    wx.reLaunch({
      url: '/pages/index/index'
    })
  },
  // 计算运费
  calDeliveryFee: function (goodsData){
    var that = this;
    if (goodsData.deliveryFeeType == 0) {
      that.setData({ deliveryTxt: "快递：￥" + (goodsData.deliveryPrice / 100).toFixed(2) });
    } else if (goodsData.deliveryFeeType == 1){
      wx.request({
        url: cf.config.pageDomain + '/applet/mobile/yunfei/getTemplateById',
        data: {
          id: goodsData.deliveryTemplateId,
          cusmallToken: cusmallToken
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          var template = res.data.model.template;
          that.setData({ deliveryTxt: "快递：￥" + (template.price / 100).toFixed(2) });
        }
      })
    } else{
      that.setData({ deliveryTxt: "快递包邮"});

    }
  },
  bindChange: function (event) {
    var that = this;
    var inputValue = Number(event.detail.value);
    if (inputValue > 0 && inputValue < that.data.goodsData.totalCount){
      that.setData({ totalCount: inputValue });
    }
  },
  addCount: function(){
    var that = this;
    if (that.data.totalCount < that.data.goodsData.totalCount){
      var totalCount = ++that.data.totalCount;
      that.setData({ totalCount: totalCount});
    }
  },
  minusCount: function () {
    var that = this;
    if (that.data.totalCount > 1){
      var totalCount = --that.data.totalCount;
      that.setData({ totalCount: totalCount });
    }
  },

  onBuyNow:function(){
    var that = this;
    that.setData({ contClass: "step2 onByNow" });
  },

  onAddCart:function(){
    var that = this;
    that.setData({ contClass: "step2 onAddCart" });
  },
  onBuyNowNext:function(){
    var that = this;
    wx.navigateTo({
      url: '/pages/orderinfo/orderinfo?id='+that.data.id+"&goodsCount="+that.data.totalCount
    })
  },
  // 添加到购物车
  onAddCartNext:function(){
    var that = this;
    wx.showLoading({
      title: '处理中',
    });
    wx.request({
      url: cf.config.pageDomain +'/applet/mobile/shopping_cart/addShoppingCart',
      data: {
        cusmallToken: cusmallToken,
        goodsId: that.data.id,
        category: that.data.goodsData.category,
        category2: that.data.goodsData.category2,
        goodsCount: that.data.totalCount
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.ret == 0) {
          that.setData({ contClass: "" });
          that.setData({ fuzzyLayerStatu: "fuzzylayer-show" });
          that.setData({ infoDialogStatu: "dialog-show" });
          wx.hideLoading();
        } else {
          wx.hideLoading();
          wx.showModal({
            title: '添加失败',
            showCancel: false,
            content: res.data.msg
          })
        }
      }
    })

  },
  onCloseInfoDialog:function(){
    var that = this;
    that.setData({ fuzzyLayerStatu: "fuzzylayer-hide" });
    that.setData({ infoDialogStatu: "dialog-hide" });
  },
  onCloseBuy:function(){
    var that = this;
    that.setData({ contClass: "" });
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