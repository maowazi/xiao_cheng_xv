// pages/list/list.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    n:app.globalData.n,
    mag:"box",
    num:" ",
    arr:[10,20,30,40,50,60],
    flag:3
  },
  handadd(){
    this.setData({
      n: ++app.globalData.n
    })
  },
  hand1(e){
    console.log(e.currentTarget.dataset.id)
    this.setData({
      num: e.currentTarget.dataset.id
    })
  },
  hand2(){
    this.setData({
      num:++this.data.num
    })
  },
  handchange(e){
    let val = e.detail.value;
    this.setData({
      n:val
    })
  },
  gogo(){
    wx.redirectTo({
      url:"/pages/todo/todo"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log("页面加载了")
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
    // console.log("页面影藏了")
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
    // console.log("你辣死了")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // console.log("没有了别拉了")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})