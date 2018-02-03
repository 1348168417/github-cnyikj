// pages/listPage/listPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    listPage: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tyPe = options.type;
    console.log(tyPe);
    if (tyPe == "azfl") {//全部分类
      this.setData({
        title: "打包机齿轮",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/打包机齿轮1.jpg",
            "title": "打包机齿轮",
            "bindtap": "azfl1"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/打包机齿轮2.jpg",
            "title": "打包机齿轮",
            "bindtap": "azfl2"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/打包机齿轮02.jpg",
            "title": "打包机齿轮",
            "bindtap": "azfl3"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/打包机齿轮03.jpg",
            "title": "打包机齿轮",
            "bindtap": "azfl4"
          }
        ]
      })
    } else if (tyPe == "smtjx") {
      this.setData({
        title: "减速器齿轮",
        listPage: [

          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/减速器01.jpg",
            "title": "减速器齿轮",
            "bindtap": "smtjx1"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/减速器02.jpg",
            "title": "减速器齿轮",
            "bindtap": "smtjx2"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/减速器齿轮.jpg",
            "title": "减速器齿轮",
            "bindtap": "smtjx3"
          },
        ]
      })
    } else if (tyPe == "qhtjx") {
      this.setData({
        title: "自行车齿轮",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/自行车齿轮1.jpg",
            "title": "自行车齿轮",
            "bindtap": "qhtjx1"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/自行车齿轮2.jpg",
            "title": "自行车齿轮",
            "bindtap": "qhtjx2"
          }
        ]
      })
    } else if (tyPe == "smskt") {
      this.setData({
        title: "马力船外机齿轮",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/6马力船外机齿轮.jpg",
            "title": "6马力船外机齿轮",
            "bindtap": "smskt1"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/30马力船外机齿轮1.jpg",
            "title": "30马力船外机齿轮",
            "bindtap": "smskt2"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/30马力船外机齿轮2.jpg",
            "title": "30马力船外机齿轮",
            "bindtap": "smskt3"
          }
        ]
      })
    } else if (tyPe == "qhskt") {
      this.setData({
        title: "割草机齿轮",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/割草机齿轮2.jpg",
            "title": "割草机齿轮",
            "bindtap": "qhskt1"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/割草机齿轮3.jpg",
            "title": "割草机齿轮",
            "bindtap": "qhskt2"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/割草机齿轮1.jpg",
            "title": "割草机齿轮",
            "bindtap": "qhskt3"
          }
        ]
      })
    } else if (tyPe == "qhpmdb") {
      this.setData({
        title: "女式摩托齿轮",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/女式摩托齿轮.jpg",
            "title": "女式摩托齿轮",
            "bindtap": "qhpmdb1"
          }
        ]
      })
    } else if (tyPe == "qhfgdb") {
      this.setData({
        title: "汽车盆角齿轮",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/汽车盆角齿轮.jpg",
            "title": "汽车盆角齿轮",
            "bindtap": "qhfgdb1"
          }
        ]
      })
    } else if (tyPe == "qhphdb") {
      this.setData({
        title: "挖机齿轮",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/挖机齿轮2.jpg",
            "title": "挖机齿轮",
            "bindtap": "qhphdb1"
          }
        ]
      })
    } else if (tyPe == "qhzsdb") {
      this.setData({
        title: "玩具车齿轮",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/玩具车齿轮1.jpg",
            "title": "玩具车齿轮",
            "bindtap": "qhzsdb1"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/玩具车齿轮2.jpg",
            "title": "玩具车齿轮",
            "bindtap": "qhzsdb2"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/玩具车模型齿轮3.jpg",
            "title": "玩具车模型齿轮",
            "bindtap": "qhzsdb3"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/玩具车模型齿轮3.jpg",
            "title": "玩具车模型齿轮",
            "bindtap": "qhzsdb4"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/玩具车模型齿轮1.jpg",
            "title": "玩具车模型齿轮",
            "bindtap": "qhzsdb5"
          }
        ]
      })
    } else if (tyPe == "scsmdb") {
      this.setData({
        title: "直伞齿轮",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/直伞齿轮1.jpg",
            "title": "直伞齿轮",
            "bindtap": "scsmdb1"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/直伞齿轮2.jpg",
            "title": "直伞齿轮",
            "bindtap": "scsmdb2"
          }
        ]
      })
    }











    else if (tyPe == "drwsmdb") {
      this.setData({
        title: "无链条自行车齿轮",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/无链条自行车齿轮.jpg",
            "title": "无链条自行车齿轮",
            "bindtap": "drwsmdb1"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/无链条自行车齿轮1.jpg",
            "title": "无链条自行车齿轮",
            "bindtap": "drwsmdb2"
          }
        ]
      })
    }












    else if (tyPe == "pmtjmdb") {
      this.setData({
        title: "食品机械齿轮",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/食品机械齿轮1.jpg",
            "title": "食品机械齿轮",
            "bindtap": "pmtjmdb1"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/食品机械齿轮2.jpg",
            "title": "食品机械齿轮",
            "bindtap": "pmtjmdb2"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/食品机械齿轮3.jpg",
            "title": "食品机械齿轮",
            "bindtap": "pmtjmdb3"
          }
        ]
      })//螺旋伞齿轮
    } else if (tyPe == "dcpmsmfhdb") {
      this.setData({
        title: "多层平面实木复合地板",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/多层平面实木复合地板/亚花梨F57G01-06-TJ（E0）.jpg",
            "title": "亚花梨F57G01-06-TJ（E0）",
            "bindtap": "dcpmsmfhdb1"
          }
        ]
      })
    } else if (tyPe == "dcfgsmfhdb") {
      this.setData({
        title: "多层仿古实木复合地板",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/多层仿古实木复合地板/白金汉宫F-SJ0508(E0).jpg",
            "title": "白金汉宫F-SJ0508(E0)",
            "bindtap": "dcfgsmfhdb1"
          }
        ]
      })
    } else if (tyPe == "dcphsmfhdb") {
      this.setData({
        title: "暂无内容"
      })
    } else if (tyPe == "dczssmfhdb") {
      this.setData({
        title: "多层庄森实木复合地板",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/多层庄森实木复合地板/总统庄园F-SJ6551(E0).jpg",
            "title": "总统庄园F-SJ6551(E0)",
            "bindtap": "dczssmfhdb1"
          }
        ]
      })
    } else if (tyPe == "smdb") {//产品中心
      this.setData({
        title: "实木地板",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/平面钛晶面地板/那不勒斯轻语S108G02-TJ.jpg",
            "title": "那不勒斯轻语S108G02-TJ",
            "bindtap": "smdb1"
          }
        ]
      })
    } else if (tyPe == "qhdb") {
      this.setData({
        title: "强化地板",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/强化平面地板/北美黄橡LF751.jpg",
            "title": "北美黄橡LF751",
            "bindtap": "qhdb1"
          }
        ]
      })
    } else if (tyPe == "smfhdb") {
      this.setData({
        title: "实木复合地板",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/多层平面实木复合地板/亚花梨F57G01-06-TJ（E0）.jpg",
            "title": "亚花梨F57G01-06-TJ（E0）",
            "bindtap": "smfhdb1"
          }
        ]
      })
    } else if (tyPe == "fl") {
      this.setData({
        title: "5A级辅料",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/luoxuansan0104/安装辅料/阴角阳角.jpg",
            "title": "阴角阳角",
            "bindtap": "fl1"
          }
        ]
      })
    }
  },

  azfl1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=azfl1'
    })
  },
  azfl2: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=azfl2'
    })
  },
  azfl3: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=azfl3'
    })
  },
  azfl4: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=azfl4'
    })
  },
  smtjx1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=smtjx1'
    })
  },
  smtjx2: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=smtjx2'
    })
  },
  smtjx3: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=smtjx3'
    })
  },

  qhtjx1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhtjx1'
    })
  },
  qhtjx2: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhtjx2'
    })
  },
  smskt1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=smskt1'
    })
  },
  smskt2: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=smskt2'
    })
  },
  smskt3: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=smskt3'
    })
  }, qhskt1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhskt1'
    })
  },
  qhskt2: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhskt2'
    })
  },
  qhskt3: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhskt3'
    })
  }, qhpmdb1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhpmdb1'
    })
  }, qhfgdb1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhfgdb1'
    })
  }, qhphdb1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhphdb1'
    })
  }, qhzsdb1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhzsdb1'
    })
  }, qhzsdb2: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhzsdb2'
    })
  }, qhzsdb3: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhzsdb3'
    })
  }, qhzsdb4: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhzsdb4'
    })
  }, qhzsdb5: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhzsdb5'
    })
  }, scsmdb1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=scsmdb1'
    })
  },
  scsmdb2: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=scsmdb2'
    })
  }, drwsmdb1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=drwsmdb1'
    })
  },
  drwsmdb2: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=drwsmdb2'
    })
  }, pmtjmdb1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=pmtjmdb1'
    })
  },
  pmtjmdb2: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=pmtjmdb2'
    })
  },
  pmtjmdb3: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=pmtjmdb3'
    })
  },
  fgtjmdb1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=fgtjmdb1'
    })
  },
  dcpmsmfhdb1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=dcpmsmfhdb1'
    })
  },
  dcfgsmfhdb1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=dcfgsmfhdb1'
    })
  },
  dczssmfhdb1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=dczssmfhdb1'
    })
  },
  smdb1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=smdb1'
    })
  },
  qhdb1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhdb1'
    })
  },
  smfhdb1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=smfhdb1'
    })
  },
  fl1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=fl1'
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