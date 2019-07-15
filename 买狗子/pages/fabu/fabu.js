// pages/fabu/fabu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:"点击选择,要勾选哦~",
    latitude:'',
    longitude:''
  },
  userdata:{
    address:'',
    leixing:'',
    shuoming:'',
    dianhua:'',
    latitude:'',
    longitude:'',
    iconPath:'',
    width: 30,
    height: 30
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    },
  
  radioChange(e){
    this.userdata.leixing=e.detail.value
  },
  inputChang(e){
    switch(e.target.dataset.id){
      case "1":
      this.userdata.shuoming=e.detail.value;
      break;
      case "2":
      this.userdata.dianhua=e.detail.value;
      break;
    }
  },
  dingwei(){
    wx.chooseLocation({
      success:this.getaddress.bind(this)
    })
  },
  getaddress(res){
    this.setData({
      value:res.address
    })
    this.userdata.address = res.address;
    this.userdata.latitude = res.latitude;
    this.userdata.longitude = res.longitude;
  },
  handadd(){
    let str = this.userdata;
    str.iconPath="/img/timg1.jpg"
    this.setData({
      userdata:str
    })
    wx.request({
      url: 'http://localhost:3000/data',
      method:"post",
      data:this.userdata,
      success:this.addsuccess.bind(this)
    })
  },
  addsuccess(){
    wx.showToast({
      title: "发布成功",
      image: '/img/timg.jpg',
      mask: true
    })
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
  handcmane(){
    wx.navigateTo({
      url: '/pages/paizhao/paizhao',
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