// pages/components/compontentsTest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    aaa:"aaa"
  },
  handleIncrement(event){
    console.log(event)
    this.setData({
      count:this.data.count+1
    })
  },
  handleTabClick(event){
    console.log(event.detail.index)
  },
  handleIncrementCpn(){
    // 修改my-sel中的counter


    // 获取组件对象 
    const my_sel=this.selectComponent('.sel-class')

    // 通过setData修改组件中的数据(不规范)
    // my_sel.setData({
    //   counter:my_sel.data.counter+20
    // })

    // 通过方法对数据进行修改
    my_sel.incrementCounter(10)
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