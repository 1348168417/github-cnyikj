// pages/Case/Case.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    listPage: [
      {
      "imgUrl": "http://www.cnyikj.com/clientInfo/hzDb/工程案例/星屿国际.jpg",
      "title": "修高层公寓，建筑外立面以现代风格为主。用地面积为95566㎡，拟建高层住宅、多层商业、办公用房等，地下车库，并配有相应的公用配套设施，总建筑面积约25.9万㎡，总居住户数为1448户。",
      "bindtap": "Cade1"
      },
      {
        "imgUrl": "http://www.cnyikj.com/clientInfo/hzDb/工程案例/王子酒店.jpg",
        "title": "送花糊西武王子大饭店由万科集团与日本王子集团携手打造，特邀日本著名酒店设计公司观光企画设计社（KKS）主持设计。酒店配备高端客房208间，标准间面积达60平方米。游客可直接在酒店与滑雪场间实现滑进/滑出，体验完美的滑雪度假生活。",
        "bindtap": "Cade2"
      },
      {
        "imgUrl": "http://www.cnyikj.com/clientInfo/hzDb/工程案例/迪欧咖啡.jpg",
        "title": "是迪欧餐饮集团下知名餐饮连锁品牌之一，是中国复合式休闲餐饮咖啡类的领先者。自2002年1月在上海青浦创设首家门店以来，迪欧咖啡始终秉承优雅欧亚气息和“诚信、尊重、关怀”的核心价值观，成为咖啡行业的品质典范并的到广泛的认同和赞誉。目前，迪欧咖啡在全国已开设了400余家门店。",
        "bindtap": "Cade3"
      },
      {
        "imgUrl": "http://www.cnyikj.com/clientInfo/hzDb/工程案例/集团大厦.jpg",
        "title": "大连阿尔滨集团始创于1979年，是以建筑和房地产为主，集土石方运输、混凝土制造、装饰装修、机电消防安装、盐业、海水综合利用以及对外贸易、投资、宾馆娱乐、足球产业于一体的大型民营企业集团。",
        "bindtap": "Cade4"
      },
      {
        "imgUrl": "http://www.cnyikj.com/clientInfo/hzDb/工程案例/七天连锁酒店.jpg",
        "title": "7天连锁酒店集团是铂涛酒店集团旗下品牌之一。它创立于2005年，2009年11月20日在美国纽约证券交易所上市（股票代码：SVN）。7天连锁酒店秉承让顾客“天天睡好觉”的愿景，致力于注重价值的商旅客人提供干净、环保、舒适、安全的住宿服务，满足客户核心的住宿需求。",
        "bindtap": "Cade5"
      },
      {
        "imgUrl": "http://www.cnyikj.com/clientInfo/hzDb/工程案例/凯宾斯基酒店.jpg",
        "title": "酒店位于青年大街中心地段109号，于南运河畔与辽宁彩电塔遥相呼应，是沈阳市唯一的滨河五星级饭店，尽享青年公园和南运河畔之旖旎风光。",
        "bindtap": "Cade6"
      },
      {
        "imgUrl": "http://www.cnyikj.com/clientInfo/hzDb/工程案例/水晶城.jpg",
        "title": "万科水晶城项目位于顺德区陈村街道登洲村区域内，由佛山市顺德区中航万科房地产有限公司开发，高层洋房已推出6栋，主要为120-230㎡三房至五房产品，每户均可饱览酒店式度假园林美景，是自住首选的品质大城。",
        "bindtap": "Cade7"
      }],
  },

  Cade1:function(){
    wx.previewImage({
      current: '',
      urls: ["http://www.cnyikj.com/clientInfo/hzDb/工程案例/星屿国际.png"]
    })
  },
  Cade2: function () {
    wx.previewImage({
      current: '',
      urls: ["http://www.cnyikj.com/clientInfo/hzDb/工程案例/王子酒店.png"]
    })
  },
  Cade3: function () {
    wx.previewImage({
      current: '',
      urls: ["http://www.cnyikj.com/clientInfo/hzDb/工程案例/迪欧咖啡.png"]
    })
  },
  Cade4: function () {
    wx.previewImage({
      current: '',
      urls: ["http://www.cnyikj.com/clientInfo/hzDb/工程案例/集团大厦.png"]
    })
  },
  Cade5: function () {
    wx.previewImage({
      current: '',
      urls: ["http://www.cnyikj.com/clientInfo/hzDb/工程案例/七天连锁酒店.png"]
    })
  },
  Cade6: function () {
    wx.previewImage({
      current: '',
      urls: ["http://www.cnyikj.com/clientInfo/hzDb/工程案例/凯宾斯基酒店.png"]
    })
  },
  Cade7: function () {
    wx.previewImage({
      current: '',
      urls: ["http://www.cnyikj.com/clientInfo/hzDb/工程案例/水晶城.png"]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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