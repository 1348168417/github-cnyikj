// shoppingcar.js
var cf = require("../../config.js");
var cusmallToken = wx.getStorageSync('cusmallToken');
var mallSiteId = wx.getStorageSync('mallSiteId');
//获取应用实例
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoppingCarList: [],
    goodsCountContent:{},
    cartSelectStatu: {},
    allSelected:true,
    totalPrice:0,
    scrolltop:0,
    btnClass:"",
    cartSelectedCount :0,
    staticResPath: cf.config.staticResPath,
    userImagePath: cf.config.userImagePath
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    cusmallToken = wx.getStorageSync('cusmallToken');
    mallSiteId = wx.getStorageSync('mallSiteId');
    wx.hideShareMenu();
    wx.setNavigationBarTitle({
      title: "购物车"
    })
    this.fetchData();
  },
  changeSelect: function (event) {
    var that = this;
    var cartId = event.currentTarget.dataset.itemid;
    var goodsId = that.findGoodsId(cartId);
    that.data.cartSelectStatu[cartId] = !that.data.cartSelectStatu[cartId];
    that.setData({ cartSelectStatu: that.data.cartSelectStatu });
    that.data.allSelected = that.data.cartSelectedCount == that.data.shoppingCarList.length;
    that.setData({ allSelected: that.data.allSelected });
    that.reRenderCount();
  },
  onAllSelect: function (event) {
    var that = this;
    if (that.data.allSelected){
      that.data.allSelected = false;
      for (var i = 0; i < that.data.shoppingCarList.length; i++) {
        var cart = that.data.shoppingCarList[i];
        that.data.cartSelectStatu[cart.id] = false;
      }
      that.setData({ allSelected: that.data.allSelected });
      that.setData({ cartSelectStatu: that.data.cartSelectStatu });
    } else{
      that.data.allSelected = true;
      for (var i = 0; i < that.data.shoppingCarList.length; i++) {
        var cart = that.data.shoppingCarList[i];
        that.data.cartSelectStatu[cart.id] = true;
      }
      that.setData({ allSelected: that.data.allSelected });
      that.setData({ cartSelectStatu: that.data.cartSelectStatu });
    }
    that.reRenderCount();
  },
  // 计算已选择商品数和总金额
  reRenderCount:function(){
    var that = this;
    var count = 0;
    for (var i = 0; i < that.data.shoppingCarList.length; i++) {
      var cart = that.data.shoppingCarList[i];
      if (that.data.cartSelectStatu[cart.id] && cart.status != 0) {
        count += (cart.price * that.data.goodsCountContent[cart.id]);
      }
    }
    that.data.totalPrice = count;
    that.setData({ totalPrice: that.data.totalPrice });
    that.data.cartSelectedCount = that.getSelectedCount();
    that.setData({ cartSelectedCount: that.data.cartSelectedCount });
    that.setData({ btnClass:count==0?"disabled":""});
  },
  // 获取已选择的购物车数量
  getSelectedCount: function(){
    var count = 0;
    var that = this;
    for (var i = 0; i < that.data.shoppingCarList.length;i++){
      var cart = that.data.shoppingCarList[i];
      if (that.data.cartSelectStatu[cart.id]){
        count ++;
      }
    }
    return count;
  },
  bindChange: function (event) {
    var that = this;
    var cartId = event.currentTarget.dataset.itemid;
    if (that.findGoodsStatus(cartId) == 0) {
      return false;
    }
    var goodsId = that.findGoodsId(cartId);
    that.data.goodsCountContent[cartId] = Number(event.detail.value);
    that.updateGoodsCount(cartId, goodsId, that.data.goodsCountContent[cartId]);
    that.reRenderCount();
  },
  addCount: function (event) {
    var that = this;
    var cartId = event.currentTarget.dataset.itemid;
    if (that.findGoodsStatus(cartId) == 0){
      return false;
    }
    var goodsId = that.findGoodsId(cartId);
    that.data.goodsCountContent[cartId] += 1;
    that.setData({ goodsCountContent: that.data.goodsCountContent });
    that.updateGoodsCount(cartId, goodsId, that.data.goodsCountContent[cartId]);
    that.reRenderCount();
  },
  minusCount: function (event) {
    var that = this;
    var cartId = event.currentTarget.dataset.itemid;
    if (that.findGoodsStatus(cartId) == 0) {
      return false;
    }
    var goodsId = that.findGoodsId(cartId);
    if (that.data.goodsCountContent[cartId] > 1){
      that.data.goodsCountContent[cartId] -= 1;
      that.setData({ goodsCountContent: that.data.goodsCountContent });
      that.updateGoodsCount(cartId, goodsId, that.data.goodsCountContent[cartId]);
      that.reRenderCount();
    }
  },
  findGoodsId: function(cartId){
    var that = this;
    for (var i = 0; i < that.data.shoppingCarList.length;i++){
      var cart = that.data.shoppingCarList[i];
      if(cart.id == cartId){
        return cart.goodsId;
      }
    }
  },
  findGoodsStatus: function (cartId) {
    var that = this;
    for (var i = 0; i < that.data.shoppingCarList.length; i++) {
      var cart = that.data.shoppingCarList[i];
      if (cart.id == cartId) {
        return cart.status;
      }
    }
  },
  onDelCart: function(){
    var that = this;
    var selectCount = that.getSelectedCount();
    if (selectCount == 0){
      wx.showModal({
        showCancel: false,
        content: "您还没有选择任何商品"
      })
    } else{
      wx.showModal({
        title: "温馨提示",
        content: "您确定删除么？",
        success: function (res) {
          if (res.confirm) {
            wx.showLoading({
              title: '处理中',
            });
            wx.request({
              url: cf.config.pageDomain + '/applet/mobile/shopping_cart/del',
              data: {
                cusmallToken: cusmallToken,
                cartIds: that.getSelectedCartIds()
              },
              header: {
                'content-type': 'application/json'
              },
              success: function (res) {
                that.fetchData();
              }
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  },
  updateGoodsCount: function (cartId, goodsId, count){
    wx.request({
      url: cf.config.pageDomain + '/applet/mobile/shopping_cart/changeCount',
      data: {
        cusmallToken: cusmallToken,
        cartId: cartId,
        goodsId: goodsId,
        count: count
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.ret == 0) {
        } else {
          wx.showModal({
            showCancel: false,
            content: res.data.msg
          })
        }
      }
    })
  },

  fetchData: function () {
    var that = this;
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
      url: cf.config.pageDomain +'/applet/mobile/shopping_cart/getShoppingCartList',
      data: {
        cusmallToken: cusmallToken,
        start:0,
        limit: 10
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.ret == 0) {
          var shoppingCarList = res.data.model.list;
          that.setData({ shoppingCarList: shoppingCarList });
          var goodsCountContent = {};
          var cartSelectStatu = {};
          for(var i=0;i<shoppingCarList.length;i++){
            var cart = shoppingCarList[i];
            goodsCountContent[cart.id] = cart.goodsCount;
            cartSelectStatu[cart.id] = true;
          }
          that.setData({ goodsCountContent: goodsCountContent});
          that.setData({ cartSelectStatu: cartSelectStatu});
          that.reRenderCount();
          wx.hideLoading();
        } else {
          wx.hideLoading();
          wx.showModal({
            title: '获取购物车信息异常',
            showCancel: false,
            content: res.data.msg
          })
        }
      }
    })

  },
  getSelectedCartIds:function(filterDeleted){
    var that = this;
    var selectedIds = [];
    for (var i = 0; i < that.data.shoppingCarList.length; i++) {
      var cart = that.data.shoppingCarList[i];
      if (filterDeleted && cart.status==0){
        continue;
      }
      if (that.data.cartSelectStatu[cart.id]) {
        selectedIds.push(cart.id);
      }
    }
    return selectedIds.join(",");
  },

  onBtnPay:function(){
    var that = this;
    wx.navigateTo({
      url: '/pages/orderinfo/orderinfo?fromShopingCart=true&cartIds=' + that.getSelectedCartIds(true),
    })
  },


  scrollHandle: function (e) { //滚动事件
    console.log("ff");
    this.setData({
      scrolltop: e.detail.scrollTop
    })
  },
  goToTop: function () { //回到顶部
    this.setData({
      scrolltop: 0
    })
  },
  scrollLoading: function () { //滚动加载
    this.fetchData();
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

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  }
})