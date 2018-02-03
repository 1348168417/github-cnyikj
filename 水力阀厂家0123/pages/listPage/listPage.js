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
        title: "倒流防止器",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/倒流防止器/防污隔断阀1.jpg",
            "title": "防污隔断阀",
            "bindtap": "azfl1"
          }
        ]
      })
    } else if (tyPe == "smtjx") {
      this.setData({
        title: "蝶阀",
        listPage: [

          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/蝶阀/D343H硬密封蝶阀1.jpg",
            "title": "D343H硬密封蝶阀",
            "bindtap": "smtjx1"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/蝶阀/对焊蝶阀1.jpg",
            "title": "对焊蝶阀",
            "bindtap": "smtjx2"
          }
        ]
      })
    } else if (tyPe == "qhtjx") {
      this.setData({
        title: "多功能水泵控制阀",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/多功能水泵控制阀/AX742X泄压持压阀.jpg",
            "title": "AX742X泄压持压阀",
            "bindtap": "qhtjx1"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/多功能水泵控制阀/DY30AX缓开缓闭止回阀.jpg",
            "title": "DY30AX缓开缓闭止回阀",
            "bindtap": "qhtjx2"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/多功能水泵控制阀/F745X遥控浮球阀.jpg",
            "title": "F745X遥控浮球阀",
            "bindtap": "qhtjx3"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/多功能水泵控制阀/J145X电动遥控阀.jpg",
            "title": "J145X电动遥控阀",
            "bindtap": "qhtjx4"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/多功能水泵控制阀/JD745X多功能水泵控制阀.jpg",
            "title": "JD745X多功能水泵控制阀",
            "bindtap": "qhtjx5"
          },
          
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/多功能水泵控制阀/JTJD745X反冲洗多功能水泵控制阀.jpg",
            "title": "JTJD745X反冲洗多功能水泵控制阀",
            "bindtap": "qhtjx6"
          }, 
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/多功能水泵控制阀/YX741X减压稳压阀.jpg",
            "title": "YX741X减压稳压阀",
            "bindtap": "qhtjx7"
          }
        ]
      })
    } else if (tyPe == "smskt") {
      this.setData({
        title: "截止阀",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/截止阀/铸钢截止阀1.jpg",
            "title": "铸钢截止阀",
            "bindtap": "smskt1"
          }
        ]
      })
    } else if (tyPe == "qhskt") {
      this.setData({
        title: "排泥阀",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/排泥阀/J744X气动、液动快开排泥阀1.jpg",
            "title": "J744X气动、液动快开排泥阀1",
            "bindtap": "qhskt1"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/排泥阀/JM744X快开排泥阀1.jpg",
            "title": "JM744X快开排泥阀1",
            "bindtap": "qhskt2"
          }
        ]
      })
    } else if (tyPe == "qhpmdb") {
      this.setData({
        title: "排气阀",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/排气阀/复合式排气阀1.jpg",
            "title": "复合式排气阀",
            "bindtap": "qhpmdb1"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/排气阀/排气阀.jpg",
            "title": "排气阀",
            "bindtap": "qhpmdb2"
          }
        ]
      })
    } else if (tyPe == "qhfgdb") {
      this.setData({
        title: "球阀",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/球阀/球阀1.jpg",
            "title": "球阀",
            "bindtap": "qhphdb1"
          }
        ]
      })
    } else if (tyPe == "qhphdb") {
      this.setData({
        title: "水锤消除器",
        listPage: [
          
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水锤消除器/水锤消除器1.jpg",
            "title": "水锤消除器",
            "bindtap": "qhfgdb1"
          }
        ]
      })
    }else if (tyPe == "qhzsdb") {
      this.setData({
        title: "水力控制阀",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/100X遥控浮球阀1.jpg",
            "title": "100X遥控浮球阀",
            "bindtap": "qhzsdb1"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/200X减压阀1.jpg",
            "title": "200X减压阀",
            "bindtap": "qhzsdb2"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/300X缓闭止回阀1.jpg",
            "title": "300X缓闭止回阀",
            "bindtap": "qhzsdb3"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/400X流量控制阀1.jpg",
            "title": "400X流量控制阀",
            "bindtap": "qhzsdb4"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/500X泄压持压阀1.jpg",
            "title": "500X泄压持压阀",
            "bindtap": "qhzsdb5"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/600X水力电动控制阀1.jpg",
            "title": "600X水力电动控制阀",
            "bindtap": "qhzsdb6"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/700X1.jpg",
            "title": "700X压差旁通阀1",
            "bindtap": "qhzsdb7"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/800X压差旁通阀1.jpg",
            "title": "800X压差旁通阀",
            "bindtap": "qhzsdb8"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/900X紧急关闭阀1.jpg",
            "title": "900X紧急关闭阀",
            "bindtap": "qhzsdb9"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/Y42X减压阀1.jpg",
            "title": "Y42X减压阀",
            "bindtap": "qhzsdb10"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/Y43H蒸汽减压阀1.jpg",
            "title": "Y43H蒸汽减压阀",
            "bindtap": "qhzsdb11"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/YK43X减压阀1.jpg",
            "title": "YK43X减压阀",
            "bindtap": "qhzsdb12"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/缓闭式止回阀1.jpg",
            "title": "缓闭式止回阀",
            "bindtap": "qhzsdb13"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/遥控浮球阀-1.jpg",
            "title": "遥控浮球阀-1",
            "bindtap": "qhzsdb14"
          }
        ]
      })
    } else if (tyPe == "scsmdb") {
      this.setData({
        title: "调流阀",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/调流阀/活塞式调流阀1.jpg",
            "title": "活塞式调流阀",
            "bindtap": "scsmdb1"
          }
        ]
      })
    }  else if (tyPe == "drwsmdb") {
      this.setData({
        title: "闸阀",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/闸阀/不锈钢闸阀1.jpg",
            "title": "不锈钢闸阀",
            "bindtap": "drwsmdb1"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/闸阀/美标闸阀1.jpg",
            "title": "美标闸阀",
            "bindtap": "drwsmdb2"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/闸阀/伞齿轮闸阀1.jpg",
            "title": "伞齿轮闸阀",
            "bindtap": "drwsmdb3"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/闸阀/铸钢闸阀1.jpg",
            "title": "铸钢闸阀",
            "bindtap": "drwsmdb4"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/闸阀/铸铁闸阀1.jpg",
            "title": "铸铁闸阀",
            "bindtap": "drwsmdb5"
          }
        ]
      })
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    else if (tyPe == "pmtjmdb") {
      this.setData({
        title: "止回阀",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/HC42X静音止回阀1.jpg",
            "title": "HC42X静音止回阀",
            "bindtap": "pmtjmdb1"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/HH44X微阻缓闭止回阀1.jpg",
            "title": "HH44X微阻缓闭止回阀",
            "bindtap": "pmtjmdb2"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/HH49X微阻缓闭蝶式止回阀1.jpg",
            "title": "HH49X微阻缓闭蝶式止回阀",
            "bindtap": "pmtjmdb3"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/底阀1.jpg",
            "title": "底阀",
            "bindtap": "pmtjmdb4"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/蝶式缓冲止回阀1.jpg",
            "title": "蝶式缓冲止回阀",
            "bindtap": "pmtjmdb5"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/多弹簧静音止回阀1.jpg",
            "title": "多弹簧静音止回阀",
            "bindtap": "pmtjmdb6"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/管力阀1.jpg",
            "title": "管力阀",
            "bindtap": "pmtjmdb7"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/配水管道用管力阀1.jpg",
            "title": "配水管道用管力阀",
            "bindtap": "pmtjmdb8"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/球形止回阀1.jpg",
            "title": "球形止回阀",
            "bindtap": "pmtjmdb9"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/微阻缓闭蝶式止回阀1.jpg",
            "title": "微阻缓闭蝶式止回阀",
            "bindtap": "pmtjmdb10"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/橡胶板止回阀1.jpg",
            "title": "橡胶板止回阀",
            "bindtap": "pmtjmdb11"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/消声止回阀1.jpg",
            "title": "消声止回阀",
            "bindtap": "pmtjmdb12"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/旋启式止回阀1.jpg",
            "title": "旋启式止回阀",
            "bindtap": "pmtjmdb13"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/液力自动阀1.jpg",
            "title": "液力自动阀",
            "bindtap": "pmtjmdb14"
          },
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/智能自控阀1.jpg",
            "title": "智能自控阀",
            "bindtap": "pmtjmdb15"
          }
        ]
      })//螺旋伞齿轮
    } 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    else if (tyPe == "dcpmsmfhdb") {
      this.setData({
        title: "多层平面实木复合地板",
        listPage: [
          {
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家多层平面实木复合地板/亚花梨F57G01-06-TJ（E0）.jpg",
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
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家多层仿古实木复合地板/白金汉宫F-SJ0508(E0).jpg",
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
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家多层庄森实木复合地板/总统庄园F-SJ6551(E0).jpg",
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
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家平面钛晶面地板/那不勒斯轻语S108G02-TJ.jpg",
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
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家强化平面地板/北美黄橡LF751.jpg",
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
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家多层平面实木复合地板/亚花梨F57G01-06-TJ（E0）.jpg",
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
            "imgUrl": "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家安装辅料/阴角阳角.jpg",
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
  qhtjx3: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhtjx3'
    })
  },
  qhtjx4: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhtjx4'
    })
  },
  qhtjx5: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhtjx5'
    })
  },
  qhtjx6: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhtjx6'
    })
  },
  qhtjx7: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhtjx7'
    })
  },
  qhtjx8: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhtjx8'
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
  }, qhpmdb2: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhpmdb2'
    })
  }, qhfgdb2: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhfgdb2'
    })
  }, qhphdb1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhphdb1'
    })
  }, qhfgdb1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhfgdb1'
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
  }, qhzsdb6: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhzsdb6'
    })
  }, qhzsdb7: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhzsdb7'
    })
  }, qhzsdb8: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhzsdb8'
    })
  }, qhzsdb9: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhzsdb9'
    })
  }, qhzsdb10: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhzsdb10'
    })
  }, qhzsdb11: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhzsdb11'
    })
  }, qhzsdb12: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhzsdb12'
    })
  }, qhzsdb13: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhzsdb13'
    })
  }, qhzsdb14: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=qhzsdb14'
    })
  },scsmdb1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=scsmdb1'
    })
  },
  scsmdb2: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=scsmdb2'
    })
  },drwsmdb1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=drwsmdb1'
    })
  },

  drwsmdb2: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=drwsmdb3'
    })
  }, drwsmdb3: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=drwsmdb3'
    })
  }, drwsmdb4: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=drwsmdb4'
    })
  }, drwsmdb5: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=drwsmdb5'
    })
  },
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   pmtjmdb1: function () {
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
  }, pmtjmdb4: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=pmtjmdb4'
    })
  }, pmtjmdb5: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=pmtjmdb5'
    })
  }, pmtjmdb6: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=pmtjmdb6'
    })
  }, pmtjmdb7: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=pmtjmdb7'
    })
  }, pmtjmdb8: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=pmtjmdb8'
    })
  }, pmtjmdb9: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=pmtjmdb9'
    })
  }, pmtjmdb10: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=pmtjmdb10'
    })
  }, pmtjmdb11: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=pmtjmdb11'
    })
  }, pmtjmdb12: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=pmtjmdb12'
    })
  }, pmtjmdb13: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=pmtjmdb13'
    })
  }, pmtjmdb14: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=pmtjmdb14'
    })
  }, pmtjmdb15: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=pmtjmdb15'
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