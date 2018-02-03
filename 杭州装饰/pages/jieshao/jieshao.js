// pages/jieshao/jieshao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    introduce: [
      {
        arc:"杭州诺瑟兰软装设计有限公司是为中高端客户解决整体软装方案的专业机构，为客户提供个性化整体软装设计服务，范围涵盖别墅、高档住宅、房地产会所、样板房软装设计服务",
    img:"http://mmbiz.qpic.cn/mmbiz_jpg/ibiaIDpj9DicjpACbSPtGubt6JDvjFmQ03kDAUC4HwibSCxlxPMwIfeS7j0grYmaWSicsCliaJhnbKTejBcmLypxzOgw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1"
      },
      {
        arc: "软装设计在室内设计中起到烘托室内气氛、创造环境意境、丰富空间层次、加强并赋予空间涵义、强化室内环境风格、柔化空间、调节环境色彩的重要作用！诺瑟兰以全新的视角和理念对室内空间进行解读，并以专业、细致、规范的服务理念，为客户提供专业的软装整体配饰服务。",
        img: "http://mmbiz.qpic.cn/mmbiz_png/ibiaIDpj9DicjrLZPVWG1GMGk9SmrFK6v3AggLKUDib78F4BVrAvReYMJSPqzsjDJXnbicWib3TAagTUxs0SxpgJ4ZFA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1"
      },
      {
        arc: "任何脱离人的设计都不能称之为好的设计，因此，我们认准人这个家居中的主体，秉持“以人为本”的原则，从客户角度考虑，在把握总体风格的前提下，融入主人的性格特点，使个性与共性达到最完美的融合，从中诠释主人的独特品味与涵养。",
        img: "http://mmbiz.qpic.cn/mmbiz_png/ibiaIDpj9DicjrLZPVWG1GMGk9SmrFK6v3ARic5l3QWNnwyKrVsAbIcJA4s0CvUBSFR4xOMDXcJdv3Urz0fcnDeybw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1"
      },
      {
        arc: "针对不同空间、客户喜好，我们为客户提供咨询、设计、采购、布置一站式服务，服务内容包括：窗帘、地毯、灯具、家具、饰品、挂画等后期软装产品。为客户量身订做独一无二的家居空间，从整体角度出发，进行整体搭配，全方位塑造居室形象及细节，凸显主人与众不同的个性。",
        img: "http://mmbiz.qpic.cn/mmbiz_jpg/ibiaIDpj9DicjrLZPVWG1GMGk9SmrFK6v3Abib3fV9gic3zPCoLHvib7E9wrxslJbn6ic9UXoPSuOlj1D1HTUPhmaibplg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1"
      },
      {
        arc: "公司的服务遍及武林壹号、武林外滩、武林国际、湘湖壹号、昆仑公馆、东方府邸、蓝色钱江、远洋公馆、远洋大河宸章、桃花源别墅、九溪玫瑰园别墅等高档住宅……",
        img: "http://mmbiz.qpic.cn/mmbiz_jpg/ibiaIDpj9DicjpACbSPtGubt6JDvjFmQ03k4jiarJl9iaZEBDYicvOK9AtClBOaTYMQR7djc8lNDqEIafcLbF01Aq7dw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1"
      }
    ],
    introduce_img: [
      "http://mmbiz.qpic.cn/mmbiz_jpg/ibiaIDpj9DicjpACbSPtGubt6JDvjFmQ03koXuDR5xibSpgJYUic7BJpncLxAtJHv3Tz7VicdtNSicfFia51OictKJRY4og/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/ibiaIDpj9DicjrLZPVWG1GMGk9SmrFK6v3A1ibLYIu47bVKIPgiaSf4ugW0Owo5dzaMMniaS5SL5FQZfOyu3wEmhYokA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/ibiaIDpj9DicjpACbSPtGubt6JDvjFmQ03kjTexbMxywdHlgibCLAbVb5CG9UM3S0BFPPiaL3dgAba2bEib32LG4o17Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/ibiaIDpj9DicjrLZPVWG1GMGk9SmrFK6v3Ae1Hcvkt43wMqxlmym2714fv3XJAy6DpfTP8fbudXLD7e4mNanKTv3g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/ibiaIDpj9DicjpACbSPtGubt6JDvjFmQ03kjUfhlx3zaFaMr9CiaoKYV0u69Sl50maLjVcLjMsX086WLOkh502Pj8g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/ibiaIDpj9DicjpACbSPtGubt6JDvjFmQ03kQDn0wGiaKDicyKibdGkqxSX7pJrXklmllEcGUFZz6IDItcEjlSJU9cBeQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/ibiaIDpj9DicjpACbSPtGubt6JDvjFmQ03kannDh7fY6cI6E9vJnUwfup4kTGBS1Ucz6mpibdvX0YBE1KRicPfezicvQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/ibiaIDpj9DicjpACbSPtGubt6JDvjFmQ03ksahZaYP2I9N0DNC9DP6BTZwwdH12YNHibVXYZkGlcEb9Ivmsg9hqexw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1",
      

    ]
  },
  max: function(){
    wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: ["http://mmbiz.qpic.cn/mmbiz_jpg/ibiaIDpj9DicjrM5JYVxRaj36FBCY2PvkkHEMzQKkicxiaU9Q9E0Toqib5RoGZNLICmO9ArFruY1VORDibCJC7a7HfmKw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1"] // 需要预览的图片http链接列表
    }),
      wx.getImageInfo({
        src: 'images/a.jpg',
        success: function (res) {
          console.log(res.width)
          console.log(res.height)
        }
      }),

    wx.chooseImage({
      success: function (res) {
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success: function (res) {
            console.log(res.width)
            console.log(res.height)
          }
        })
      }
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