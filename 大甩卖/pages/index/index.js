//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imglist:[
      "http://www.800zhe.com//data/uploads/banner/20170603/93a9bfecf36f1a8fb6d6f02303ff95ed.png",
      "http://www.800zhe.com//data/uploads/banner/20170524/18dd0c9339544cfb7d5922c8d55cd91d.png",
      "http://www.800zhe.com//data/uploads/banner/20170524/80b6ce9c5bd8f0ad6129957f4dc9bb19.png",
      "http://www.800zhe.com//data/uploads/banner/20170603/ed2047e2f322abf2b071b1225cda9b08.png",
      "http://www.800zhe.com//data/uploads/banner/20170603/93a9bfecf36f1a8fb6d6f02303ff95ed.png",
      "http://www.800zhe.com//data/uploads/banner/20170524/18dd0c9339544cfb7d5922c8d55cd91d.png"
    ],
    datalist:[
      {
        discount_price: 14.8,
        img: "http://img.haodanku.com/oimg_579135004493_1560333363.jpg",
        intro: "网红饮品水果茶，是水果也是茶，精选优质水果原料，低温烘焙，富含维生素c，独立食品级内袋，冲泡方便，10种口味，每天一种新口味，每天一个好心情！！【赠运费险】",
        price: 39.8,
        video: "http://cloud.video.taobao.com/play/u/1/p/1/e/6/t/1/212948999068.mp4",
        coupon_price: 25
      },
      {
        discount_price: 49.9,
        img: "https://img.alicdn.com/bao/uploaded/i1/3527339645/O1CN01VbqgRM2L7San8MzeU_!!0-item_pic.jpg",
        intro: "送气垫1个【我是大美人力荐品牌】湖南卫视广告产品，女神的魔盒。Larastyle官方直营，正品保证。高光，鼻影，腮红，侧影，一盒搞定，质量好，上色好，时尚精致，携带方便【过敏包退】",
        price: 99.9,
        video: "http://cloud.video.taobao.com/play/u/1/p/1/e/6/t/1/50255432634.mp4",
        coupon_price: 50
      },
      {
        discount_price: 13.9,
        img: "https://img.alicdn.com/imgextra/i1/2834611865/TB2j7wAqwJkpuFjSszcXXXfsFXa_!!2834611865.jpg",
        price: 15.9,
        coupon_price: 2
      },
      {
        discount_price: 9.9,
        img: "https://img.alicdn.com/imgextra/i1/2005506561/O1CN0106nohl1yKz84Z9UhP_!!2005506561.jpg",
        intro: "【赠运费险】熬夜刷剧，一脸苍白憔悴！抹点韩式恋意好气色腮红！细腻的矿物质粉，贴合肌肤，不堵塞毛孔！还是好上手的蘑菇粉扑！限时9.9！多色可选！让你轻松抹出少女颜！",
        price: 39.9,
        video: "http://cloud.video.taobao.com/play/u/1/p/1/e/6/t/1/50096018269.mp4",
        coupon_price: 30
      }
    ]
  },
  onLoad(){
    wx.request({
      url: 'http://800zhe.com/index.php/m/index/index.html',
      method:"POST",
      // data:{
      //   p: "1",
      //   wd: null
      // },
      success:this.handdatalist.bind(this)
    })
  },
  handdatalist(data){

  },
  handTo(e){
    let { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/list/list?id='+id,
    })
  },
  onReachBottom() {
    let datalist = this.data.datalist;
    this.setData({
      datalist: [...datalist, ...this.data.datalist]
    })
    console.log(this.data.datalist.length)
  }
  
 
  
})
