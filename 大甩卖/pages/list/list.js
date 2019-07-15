// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    video: "",
    flag:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let {
      id
    } = options;
    if(id != "undefined"){
      this.setData({
        video: id
      })

    }else{
      this.setData({
        flag:false
      })
    }
  },
  handuser(e){
    console.log(e)
  }

})