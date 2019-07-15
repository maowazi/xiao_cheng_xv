// pages/serch/serch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[],
    value:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handvalue(e){
    let val = e.detail.value;
    this.setData({
      value:val
    })
  },
  handserch(){
    if(this.data.value == ""){
      this.setData({
        datalist:[]
      })
      return;
    }
    wx.request({
      url: 'http://localhost:3000/data?q='+this.data.value,
      success:this.handdata.bind(this)
    })
  },
  handdata(data){
    let arr = data.data;
    this.setData({
      datalist:arr
    })
  },
  handdetails(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/details/details?id='+id,
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