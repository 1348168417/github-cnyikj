// pages/Bcase/Bcase.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tYpe = options.type;
    if (tYpe == "Bcase_1") {
      this.setData({
        url: [
          {
            "word": "悦府江南",
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/悦府江南/悦府江南.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/悦府江南/悦府江南.jpg",
          }
        ]
      })
    }
    else if (tYpe == "Bcase_2") {
      this.setData({
        url: [
          {
            "word": "保集湖海塘大平层",
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/保集湖海塘大平层/10000.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/保集湖海塘大平层/20000.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/保集湖海塘大平层/30000.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/保集湖海塘大平层/40000.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/保集湖海塘大平层/50000.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/保集湖海塘大平层/60000.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/保集湖海塘大平层/70000.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/保集湖海塘大平层/80000.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/保集湖海塘大平层/90000.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/保集湖海塘大平层/100000.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/保集湖海塘大平层/300000.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/保集湖海塘大平层/400000.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/保集湖海塘大平层/大平层.jpg",
          },
        ]
      })
    }
  else if (tYpe == "Bcase_3") {
    this.setData({
      url: [
        {
          "word": "东孝街自建房"
        },
        {
          "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/东孝街自建房/ke2.jpg",
        },
      ]
    })
  }
    else if (tYpe == "Bcase_4") {
      this.setData({
        url: [
          {
            "word": "中央御府",
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/家装/中央御府/中央御府16-2-502.jpg",
          },
        ]
      })
    }
    else if (tYpe == "Bcase_5") {
      this.setData({
        url: [
          {
            "word": "御园禅修教室"
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/御园禅修教室/heshang0000.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/御园禅修教室/heshang20000.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/御园禅修教室/TB2Meh4drWJ.eBjSspdXXXiXFXa_!!2901378455.jpg",
          },
        ]
      })
    }
    else if (tYpe == "Bcase_6") {
      this.setData({
        url: [
          {
            "word": "明月街美甲店",
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/明月街美甲店/明月街.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/明月街美甲店/明月街2.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/明月街美甲店/明月街238号美甲.jpg",
          },
        ]
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