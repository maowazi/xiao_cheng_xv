//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  handdata(e){
    console.log(e)
  },
  hand(){
    wx.authorize({
      scope: 'scope.userLocation',
      success:(res)=>{
        console.log(res)
      }
    })
    wx.chooseLocation({
      success: function(res) {
        console.log(res)
      },
    })
  },
  hand2(){
    wx.authorize({
      scope: 'scope.userLocation',
      success:(res)=>{
        console.log(res)
      }
    }),
      wx.getLocation({
        success:(res)=>{
          console.log(res)
        }
      })
  },
  hand3(){
    wx.openSetting({
      success:(res)=>{
        console.log(res)
      }
    })
  }
})
