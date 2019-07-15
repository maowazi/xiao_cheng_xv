//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    latitude: '',
    longitude: '',
    markers: [{        
      iconPath: "/img/定位.png",
      latitude: '',
      longitude: '',
      width: 30,
      height: 30,
      // callout:{           //图标上面的文字
      //   content:"哈哈",
      //   fontSize:"50",
      //   display:"ALWAYS",
      //   bgColor:"rgba(f,f,f,1)"
      // },
      // label:{             //图标下面的文字
      //   content: "哈哈代金券的撒范德萨就",
      // }
    }],
    controls: [{
      id:0,
      iconPath: '/img/回位.png',
      clickable:true,//是否可以点击
      position: {
        left: 0,
        top: parseInt(app.globalData.Hei*0.8),
        width: 30,
        height: 30
      }
    }]
    
  },
  controltap(e) {
    this.map.moveToLocation();//挂载后map会有此方法让地图回到定位点
  },
  markertap(e){
    var id = e.markerId;
    wx.navigateTo({
      url: '/pages/details/details?id='+id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getloction();
    this.map = wx.createMapContext("map");//此方法是创建一个地图对象并挂载到map上,map是当前的地图id
    this.getdata()
  },
  getloction() {
    wx.getLocation({
      success: this.getaddress.bind(this)
    })
  },
  getaddress(res) {
    let arr = this.data.markers;
    arr[0].latitude = res.latitude;
    arr[0].longitude = res.longitude;
    this.setData({
      latitude: res.latitude,
      longitude: res.longitude,
      markers:arr
    })
  },
  getdata(){
    wx.request({
      url: 'http://localhost:3000/data',
      success:this.adddata.bind(this)
    })
  },
  adddata(data){
    let arr = this.data.markers;
    for(var item of data.data){
      arr.push(item);
    }
    this.setData({
      markers:arr
    })
  }
})
