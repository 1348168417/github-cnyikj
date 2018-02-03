Page({
  data: {
    markers: [{
      iconPath: "http://webapi.amap.com/theme/v1.3/markers/b/mark_bs.png",
      id: 0,
      latitude: 30.331609,
      longitude: 120.107299,
      width: 19,
      height: 33
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    imgUrls: [
      'http://mmbiz.qpic.cn/mmbiz_png/ibiaIDpj9DicjrLZPVWG1GMGk9SmrFK6v3AggLKUDib78F4BVrAvReYMJSPqzsjDJXnbicWib3TAagTUxs0SxpgJ4ZFA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1',
      'http://mmbiz.qpic.cn/mmbiz_png/ibiaIDpj9DicjrLZPVWG1GMGk9SmrFK6v3ARic5l3QWNnwyKrVsAbIcJA4s0CvUBSFR4xOMDXcJdv3Urz0fcnDeybw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1',
      'http://mmbiz.qpic.cn/mmbiz_jpg/ibiaIDpj9DicjrLZPVWG1GMGk9SmrFK6v3Abib3fV9gic3zPCoLHvib7E9wrxslJbn6ic9UXoPSuOlj1D1HTUPhmaibplg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 3000
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }

})




//index.js    
//获取应用实例    
