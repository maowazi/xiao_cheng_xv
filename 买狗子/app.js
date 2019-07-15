//app.js
App({
  globalData: {
    userInfo: null
  },
  //一下是获取设备信息,屏宽
  onLaunch() {
    this.getshebeixinxi();
  },
  getshebeixinxi(){
    wx.getSystemInfo({
      success: this.getsystemInfosuccess.bind(this),
    })
  },
  getsystemInfosuccess(res){
    this.globalData.Hei = res.windowHeight;
    this.globalData.Weig = res.windowWidth;
  }
})