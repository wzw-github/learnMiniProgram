// pages/wxss/wxss.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colortest: new Date().toLocaleString(),
    isActive:false,
    isShow:false,
    score:65,
    name:[
      ['zhangsan','lisi','wangmazi'],
      ['wangwu','zhaoliu']
    ]
  },
  handleSwitchShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  handleIncrement(){
    this.setData({
      score:this.data.score+=6
    })
  },
  handleDecrease(){
    this.setData({
      score:this.data.score-=6
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    setInterval(() => {
      this.setData({
        colortest: new Date().toLocaleString()
      })
    }, 1000)
  },
  changecolor() {
    this.setData({
      isActive:!this.data.isActive
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})