// pages/home/home.js
//getApp()获取App（）产生的示例对象
// const app=getApp()
// console.log(app.globalData.name)
// console.log(app.globalData.age)
//注册一个页面
Page({

  /**
   * 页面的初始数据
   */
  // -----------------2、初始化数据------------------
  data: {
    name: 'zhangsan',
    age: 18,
    students: [{
        id: 1,
        name: 'zhangsan',
        age: 20
      },
      {
        id: 1,
        name: 'zhangsan',
        age: 20
      },
      {
        id: 1,
        name: 'zhangsan',
        age: 20
      }
    ],
    titles:['衣服','裤子','鞋子']
    ,
    counter: 0
  },

  handleBtnClick() {
    //1、错误做法，界面不会刷新
    // console.log('按钮发生点击')
    // this.data.counter+=1
    // console.log(this.data.counter)

    //2、this.setData()
    this.setData({
      counter: this.data.counter += 1
    })
  },

  handleSubtraction() {
    this.setData({
      counter: this.data.counter -= 1
    })
  },
  clickBtn(){
    console.log("发生了点击")
  },

  //编程范式
  //1、命令式编程：原生操作DOM
  //2、声明式编程：前端框架Vue/React

  // ----------------1.监听页面的声明周期函数回调---------------
  // 页面被加载的时候执行
  onLoad() {
    console.log("onload")
    // wx.request({
    //   url: 'http://123.207.32.32:8080/recommend',
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })
  },
  // 页面初次渲染完成时候执行
  onReady() {
    console.log("onReady")
  },
  // 页面显示出来的时候执行
  onShow() {
    console.log("onShow")
  },
  // 当页面被隐藏的时候执行
  onHide() {
    console.log("onHide")
  },
  // 页面被卸载掉的时候
  onUnload() {
    console.log("onUnload")
  },
  // -------------2、监听wxml中相关的一些事件-------------
  bindGetUserInfo(event) {
    console.log(event)
  },
  handleBtnClick() {
    console.log("name被点击 ")
  },

  // ---------------4、监听其它事件----------------
  // 监听页面的滚动
  onPageScroll(obj) {
    console.log(obj)
  },
  // 监听页面滚动到顶部
  onReachBottom(){
    console.log("页面滚动到底部")
  },
  // 下拉刷新事件
  onPullDownRefresh(){
    console.log("下拉刷新事件")
  },
  handleTouchStart(){
    console.log("handleTouchStart")
  },
  handleTouchMove(){
    console.log("handleTouchMove")
  },
  handleTouchEnd(){
    console.log("handleTouchEnd")
  },
  handleTap(){
    console.log("handleTap")
  },
  handleLongpress(){
    console.log("handleLongpress")
  },
  handleItemClick(event){
    console.log(event)
    const dataset=event.currentTarget.dataset;
    const title=dataset.item;
    const index=dataset.index;
    console.log(title,index);
  }

})