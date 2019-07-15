// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:"",
    name:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {id,name} = options;
    console.log()
    this.setData({
      src:id,
      name:name
    })
    this.handmove(id,name)
    wx.setNavigationBarTitle({
      title:name
    })
  },
  handmove(id,name){
    // wx.request({
    //   url: 'https://m.douban.com/movie/subject/'+id+'/?refer='+name,
    //   success:this.handmoves.bind(this)
    // })
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