// orderinfo.js
var cf = require("../../config.js");
var util = require("../../utils/util.js");
//获取应用实例
var app = getApp();
var mallSiteId = wx.getStorageSync('mallSiteId');
var cusmallToken = wx.getStorageSync('cusmallToken');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    orderId:"",
    orderData:null,
    btnLoading:true,
    fromShopingCart:false,
    cartIds: "",
    goodsList: [],
    addressInfo:null,
    orderStatus:"",
    tel:"",
    areaId:"",
    inputContent: { remark:""},
    totalPrice:0,
    allPrice:0,
    deliveryPrice:0,
    staticResPath: cf.config.staticResPath,
    userImagePath: cf.config.userImagePath,
    goodsCount:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    cusmallToken = wx.getStorageSync('cusmallToken');
    mallSiteId = wx.getStorageSync('mallSiteId');
    wx.hideShareMenu();
    var pageTitle = "订单详情";
    this.setData({ id: options.id });
    this.setData({ orderId: options.orderid });
    this.setData({ goodsCount: options.goodsCount });
    if (options.fromShopingCart){
      this.setData({ fromShopingCart: true });
      this.setData({ cartIds: options.cartIds });
      pageTitle = "提交订单";
    }
    
    if (options.orderid){
      this.fetchOrderData();
    } else if (options.fromShopingCart){
      this.fetchShoppingCartData();
      this.fetchAddressData();
    } else {
      pageTitle = "提交订单";
      this.fetchData();
      this.fetchAddressData();
    }
    wx.setNavigationBarTitle({
      title: pageTitle
    })
    
  },

  bindChange: function (e) {
    this.data.inputContent[e.currentTarget.id] = e.detail.value
  },

  fetchAddressData:function(){
    var that = this;
    if (wx.getStorageSync('addrId')){
      wx.request({
        url: cf.config.pageDomain + '/applet/mobile/address/getAddressDetail',
        data: {
          cusmallToken: cusmallToken,
          id: wx.getStorageSync('addrId')
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          that.setData({ addressInfo: res.data.model.detail });
          if (res.data.model.detail != null && !that.data.orderId && that.data.goodsList.length > 0) {
            that.calDeliveryFee();
          }
        }
      })
    } else {
      wx.request({
        url: cf.config.pageDomain + '/applet/mobile/address/getDefaultAddress',
        data: {
          cusmallToken: cusmallToken
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          that.setData({ addressInfo: res.data.model.address}); 
          if(res.data.model.address != null && !that.data.orderId && that.data.goodsList.length > 0){
              that.calDeliveryFee();
          }
        }
      })
    }
    // var addressData = {};
    // addressData.clientName = "李聪平";
    // addressData.address = "深圳市南山区迈科龙大厦";
    // addressData.areaId = "100888";
    // addressData.tel = "15099912519";
    // that.setData({ addressInfo: addressData }); 
  },
  // 根据商品ID获取信息
  fetchData: function () {
    var that = this;
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
      url: cf.config.pageDomain + '/applet/mobile/goods/selectGoods',
      data: {
        cusmallToken: cusmallToken,
        goodsId: that.data.id
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.ret == 0) {
          var goodsData = res.data.model.goods;
          that.setData({ totalPrice: (goodsData.price / 100 * that.data.goodsCount).toFixed(2) });
          that.data.goodsList.push({
            "id": goodsData.id,
            "name": goodsData.name,
            "unit_name": goodsData.unitName,
            "cover": goodsData.goodsCover,
            "category": goodsData.category,
            "category2": goodsData.category2,
            "displaySpecOrCategory": goodsData.displaySpecOrCategory,
            "price": goodsData.price,
            "count": that.data.goodsCount,
            "total_price": that.data.goodsCount * goodsData.price
          });
          that.setData({ goodsList: that.data.goodsList });
          if (that.data.addressInfo != null){
            that.calDeliveryFee();
          }
          wx.hideLoading();
        } else {
          wx.hideLoading();
          wx.showModal({
            title: '获取商品信息异常',
            showCancel: false,
            content: res.data.msg
          })
        }
      }
    })

  },
  // 从订单获取商品信息
  fetchOrderData: function () {
    var that = this;
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
      url: cf.config.pageDomain + '/applet/mobile/order/getOrderDetail',
      data: {
        cusmallToken: cusmallToken,
        parId: that.data.orderId
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.ret == 0) {
          var parOrder = res.data.model.parOrder;
          util.processOrderData(parOrder);
          that.setData({ totalPrice: (parOrder.totalPrice/100).toFixed(2) });
          that.setData({ goodsList: JSON.parse(parOrder.goodsList) });
          that.setData({ orderData: parOrder});
          that.setData({ goodsCount: parOrder.totalCount});
          that.setData({ addressInfo: {
            "userName": parOrder.clientName,
            "tel": parOrder.tel,
            "areaName": "",
            "address": parOrder.address,
          }});
          that.setData({ orderStatus: util.getOrderStatus(parOrder.status)});
          wx.hideLoading();
          that.calDeliveryFee();
        } else {
          wx.hideLoading();
          wx.showModal({
            title: '获取订单信息异常',
            showCancel: false,
            content: res.data.msg
          })
        }
      }
    })

  },
  // 从购物车获取商品信息
  fetchShoppingCartData: function () {
    var that = this;
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
      url: cf.config.pageDomain + '/applet/mobile/shopping_cart/getByIds',
      data: {
        cusmallToken: cusmallToken,
        ids: that.data.cartIds
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.ret == 0) {
          var cartList = res.data.model.list;
          that.data.goodsCount = 0;
          for(var i=0;i<cartList.length;i++){
            var cart = cartList[i];
            that.data.goodsList.push({
              "id": cart.goodsId,
              "name": cart.name,
              "unit_name": cart.unitName,
              "cover": cart.cover,
              "category": cart.category,
              "category2": cart.category2,
              "displaySpecOrCategory": cart.displaySpecOrCategory,
              "price": cart.price,
              "count": cart.goodsCount,
              "total_price": cart.totalPrice
            });
            that.data.totalPrice += cart.totalPrice;
            that.data.goodsCount += cart.goodsCount;
          }
          that.setData({ goodsCount: that.data.goodsCount });
          that.setData({ totalPrice: (that.data.totalPrice/100).toFixed(2) });
          that.setData({ goodsList: that.data.goodsList });
          if (that.data.addressInfo != null) {
            that.calDeliveryFee();
          }
          wx.hideLoading();
        } else {
          wx.hideLoading();
          wx.showModal({
            title: '获取订单信息异常',
            showCancel: false,
            content: res.data.msg
          })
        }
      }
    })

  },

  onConfirmOrder: function () {
    var that = this;
    if (that.data.addressInfo == null){
      wx.showModal({
        showCancel: false,
        content: "请填写配送地址"
      })
      return false;
    }

    wx.showLoading({
      title: '订单提交中',
    });
    that.setData({ btnLoading:true});

    var submitData = {
      cusmallToken: cusmallToken,
      goodsList: that.genGoodsListString(),
      clientName: that.data.addressInfo.userName,
      tel: that.data.addressInfo.tel,
      address: that.data.addressInfo.areaName + that.data.addressInfo.address,
      areaId: that.data.addressInfo.areaId,
      deliveryPrice: (that.data.deliveryPrice*100).toFixed(0),
      remark: that.data.inputContent.remark,
    };
    if (that.data.fromShopingCart){
      submitData.cartIds = that.data.cartIds;
    }
    wx.request({
      url: cf.config.pageDomain + '/applet/mobile/order/addOrder',
      data: submitData,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({ btnLoading: false });
        if (res.data.ret == 0) {
          wx.hideLoading();
          wx.navigateTo({
            url: '/pages/orderpay/order_pay?id=' + res.data.model.parId,
          })
        } else {
          wx.hideLoading();
          wx.showModal({
            title: '提交订单信息异常',
            showCancel: false,
            content: res.data.msg
          })
        }
      }
    })
  },

  onBtnPay: function (e) {
    var that = this;
    wx.navigateTo({
      url: '/pages/orderpay/order_pay?id=' + that.data.orderId,
    })
  },

  onBtnCancel:function(e){
    var that = this;
    wx.showModal({
      title: "温馨提示",
      content: "您确定取消订单么？",
      success: function (res) {
        if (res.confirm) {
          wx.showLoading({
            title: '处理中',
          });
          wx.request({
            url: cf.config.pageDomain + '/applet/mobile/order/cancelOrder',
            data: {
              cusmallToken: cusmallToken,
              parId: that.data.orderId
            },
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              wx.showToast({
                title: '您已成功取消了订单',
                duration:2500,
                complete:function(){
                  
                }
              });
              setTimeout(function(){
                that.fetchOrderData();
              },2800);
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  onReturnOrder:function(e){
    var that = this;
    wx.showModal({
      title: "温馨提示",
      content: "您确定申请退款么？",
      success: function (res) {
        if (res.confirm) {
          wx.redirectTo({
            url: '/pages/refund/refund?id=' + that.data.orderId + "&orderNum=" + that.data.orderData.orderNum+"&status="+that.data.orderData.status,
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  onFinishOrder:function(e){
    var that = this;
    wx.showModal({
      title: "温馨提示",
      content: "确认收货后无法申请退款，确定要收货么？",
      success: function (res) {
        if (res.confirm) {
          wx.showLoading({
            title: '处理中',
          });
          wx.request({
            url: cf.config.pageDomain + '/applet/mobile/order/confirm',
            data: {
              cusmallToken: cusmallToken,
              id: that.data.orderId
            },
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              wx.showToast({
                title: '确认订单处理成功',
                duration:2500,
                complete:function(){
                  
                }
              });
              setTimeout(function(){
                that.fetchOrderData();
              },2800);
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  genGoodsListString:function(){
    var that = this;
    var goodsList = [];
    for (var i = 0; i < that.data.goodsList.length; i++) {
      var goodsInfo = that.data.goodsList[i];
      goodsList.push({
        "id": goodsInfo.id,
        "name": goodsInfo.name,
        "unit_name": goodsInfo.unit_name,
        "cover": goodsInfo.cover,
        "category": goodsInfo.category,
        "category2": goodsInfo.category2,
        "displaySpecOrCategory": "",
        "price": goodsInfo.price,
        "count": goodsInfo.count,
        "total_price": goodsInfo.total_price
      });
    }
    return JSON.stringify(goodsList);
  },

  // 计算运费
  calDeliveryFee: function () {
    var that = this;
    if (that.data.orderData != null){
      that.setData({ deliveryPrice: (that.data.orderData.deliveryPrice / 100).toFixed(2) });
      that.setData({ allPrice: ((Number(that.data.totalPrice)*100 + Number(that.data.orderData.deliveryPrice))/100).toFixed(2)});
      that.setData({ btnLoading: false });
    } else {
      wx.request({
        url: cf.config.pageDomain + '/applet/mobile/yunfei/getDeliveryFee',
        data: {
          goodsList: that.genGoodsListString(),
          areaId: that.data.addressInfo.areaId,
          cusmallToken: cusmallToken
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          var deliveryPrice = res.data.model.deliveryPrice;
          that.setData({ deliveryPrice: (deliveryPrice / 100).toFixed(2) });
          that.setData({ allPrice: (Number(that.data.totalPrice) + Number(that.data.deliveryPrice)).toFixed(2)});
          that.setData({ btnLoading: false });
        }
      })
    }

  },

  onTapAddress:function(){
    var that = this;
    if (that.data.orderData == null){
      var addressUrl = '/pages/addresslist/addresslist';
      if (that.data.orderData != null){
        addressUrl+="?orderid="+that.data.orderId;
      } else if (that.data.fromShopingCart){
        addressUrl += "?fromShopingCart=true&cartIds=" + that.data.cartIds;
      } else {
        addressUrl += "?id=" + that.data.id + "&goodsCount=" + that.data.goodsCount;
      }
      wx.redirectTo({
        url: addressUrl,
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