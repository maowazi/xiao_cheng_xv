// pages/paizhao/paizhao.js
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
    this.handcamerquanxian()
  },
  handcamerquanxian(){
    wx.authorize({
      scope: 'scope.camera',
      success: this.handpoph.bind(this)
    })
  },
  handpoph() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: this.maer.bind(this)
        // console.log(res)
        // this.setData({
        //   src: res.tempImagePath
        // })
      
    })
    
  },
  maer(){
    CameraContext.takePhoto({
      quality: "high",
      success: (res) => {
        console.log(res)
      }
    })
  },
  // takePhoto() {
  //   const ctx = wx.createCameraContext()
  //   ctx.takePhoto({
  //     quality: 'high',
  //     success: (res) => {
  //       this.setData({
  //         src: res.tempImagePath
  //       })
  //     }
  //   })
  // },
  error(e) {
    console.log(e.detail)
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