

var app = getApp()
Page({
  data: {
    userInfo: {},
    markers: [{
      iconPath: "http://webapi.amap.com/theme/v1.3/markers/b/mark_bs.png",
      id: 0,
      latitude: 29.49383,
      longitude: 120.910531,
      width: 19,
      height: 33
    }]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})

