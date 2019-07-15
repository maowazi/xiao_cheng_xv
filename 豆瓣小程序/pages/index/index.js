//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    movie:'',
    movies:'',
    n:5,
    flag:true
  },
  onLoad(){
    this.getmovie();
    this.getmovies();
   
  },
  getmovie(){
    wx.request({
      url: "https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?os=ios&start=0&count=8&loc_id=108288&_=0",
      success:this.handmovie.bind(this)
    })
  },
  getmovies(){
    wx.request({
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items?os=ios&start=0&count=8&loc_id=108288&_=0',
      success:this.handmovies.bind(this)
    })
  },
  handmovie(data){
    this.setData({
      movie: data.data.subject_collection_items
    })
  },
  handmovies(data){
    this.setData({
      movies: data.data.subject_collection_items
    })
  },
  handgo(e){
    let { id, name } = e.currentTarget.dataset;
    wx.reLaunch({
      url:"/pages/list/list?id="+id+"&name="+name
    })
  }
})
