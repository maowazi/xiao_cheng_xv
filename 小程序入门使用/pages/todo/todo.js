// pages/todo/todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
    ],
    jiao:"",
    phone:"",
    address:""
  },
  handval(e){
    let val = e.detail.value;
    
    switch(e.target.dataset.id){
      case "1":
        this.setData({
          jiao:val
        })
      break;
      case "2":
        this.setData({
          phone: val
        })
        break;
      case "3":
        this.setData({
          address: val
        })
        break;
    }
    
    
  },
  handadd(){
    let obj = {};
    let num = [];
    num = this.data.list;
    obj["jiao"] = this.data.jiao;
    obj["phone"] = this.data.phone;
    obj["address"] = this.data.address;
    num.push(obj);
    this.setData({
      list:num,
      jiao:"",
      phone:"",
      address:""
    })
  },
  handdele(e){
    let num = [];
    num = this.data.list;
    let index = e.target.dataset.index;
    num.splice(index,1);
    this.setData({
      list:num
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