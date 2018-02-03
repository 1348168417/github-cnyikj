//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://www.cnyikj.com/clientInfo/shuilifa/banner/b1.jpg',
      'http://www.cnyikj.com/clientInfo/shuilifa/banner/b2.jpg',
      'http://www.cnyikj.com/clientInfo/shuilifa/banner/b1.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 1000,
    menuList:[{
      "img":"../../images/icon1.png",
      "type":"product",
      "typeName":"产品中心"
    },
    {
      "img": "../../images/icon2.png",
      "type": "carpenter",
      "typeName": "阀门简介"
    },
    {
      "img": "../../images/icon3.png",
      "type": "Case",
      "typeName": "在线询价"
    },
    {
      "img": "../../images/icon4.png",
      "type": "jianjie",
      "typeName": "企业简介"
    },
    {
      "img": "../../images/icon5.png",
      "type": "zhuanli",
      "typeName": "荣誉证书"
    },
    {
      "img": "../../images/icon6qiyewenhua.png",
      "type": "wenhua",
      "typeName": "华华文化"
    }]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  //事件处理函数
  zhuanli: function () {
    wx.navigateTo({
      url: '../zhuanli/zhuanli'
    })
  }, 
  product: function () {
    wx.navigateTo({
      url: '../product/product'
    })
  },
  carpenter: function () {
    wx.navigateTo({
      url: '../carpenter/carpenter'
    })
  }, 
  jianjie: function () {
    wx.navigateTo({
      url: '../jianjie/jianjie'
    })
  }, 
  wenhua: function () {
    wx.navigateTo({
      url: '../wenhua/wenhua'
    })
  }, 
  Case: function () {
    wx.switchTab({
      url: '../my/my'
    })
  },
 

  // smdb: function () {//底部优选栏目跳转
  //   wx.navigateTo({
  //     url: '../listPage/listPage?type=smskt'
  //   })
  // },
  // drwsmdb: function () {
  //   wx.navigateTo({
  //     url: '../listPage/listPage?type=azfl'
  //   })
  // },
  // qhdb: function () {
  //   wx.navigateTo({
  //     url: '../listPage/listPage?type=qhdb'
  //   })
  // },
  // smfhdb: function () {
  //   wx.navigateTo({
  //     url: '../listPage/listPage?type=smfhdb'
  //   })
  // },
  // fl: function () {
  //   wx.navigateTo({
  //     url: '../listPage/listPage?type=fl'
  //   })
  // },
  // scsmdb: function () {
  //   wx.navigateTo({
  //     url: '../listPage/listPage?type=scsmdb'
  //   })
  // },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  
})
