// pages/home/home.js
import {
  getMultiData, getGoodsData
} from '../../service/home.js'

const types=['pop','new','sell'];

const TOP_DISTANCE=100;

const tabScrollTop=0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    titles: ['流行', '新款', '精选'],
    goods: {
      'pop': {
        page: 0,
        list: []
      },
      'new': {
        page: 0,
        list: []
      },
      'sell': {
        page: 0,
        list: []
      },
    },
    currentType:'pop',
    showBackTop:false,
    isTabFixed:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 1 轮播图以及推荐数据
    this._getMultidata()

    // 2 请求商品数据
    this._getGoodData('pop')
    this._getGoodData('new')
    this._getGoodData('sell')
  },

  // ==================网路请求的函数
  _getMultidata() {
    getMultiData().then(res => {
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;

      // 将banners和recommends放到Data中
      this.setData({
        banners: banners,
        recommends: recommends
      })
    }).catch(res => {
      console.log("请求数据失败")
    })
  },
  _getGoodData(type) {
    //1获取页码
    const page=this.data.goods[type].page+1;

    //2发送网络请求
    getGoodsData(type, page).then(res => {
      //2.1 取出数据
      const list=res.data.data.list;
      //2.2 将请求数据设置到对应的type的list
      const oldList=this.data.goods[type].list;
      oldList.push(...list);

      const typeKey=`goods.${type}.list`
      const pageKey = `goods.${type}.page`
      this.setData({
        [typeKey]:oldList,
        [pageKey]: page
      })
    })

  },

  // ==============事件监听的函数
  handleTabClick(event) {
    // 取出Index
    const index = event.detail.index;
    console.log(index)
    // 设置currentType
    this.setData({
        currentType: types[index]
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
    // 上拉加载更多-->请求新数据
    this._getGoodData(this.data.currentType)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onPageScroll(options){
    // 1/取出scrollTop
    const scrollTop=options.scrollTop;
  
    // 2/修改showBackTop的属性
    // 官方：不要在滚动的函数中频繁的调用this.setData
    const flag1 = scrollTop >= TOP_DISTANCE;
    if(flag1!=this.data.showBackTop){
      this.setData({
        showBackTop:flag1
      })
    } 

    // 3修改isTabFixed属性
    const flag2 = scrollTop >= this.data.tabScrollTop;
    if(flag2!=this.data.isTabFixed){
      this.setData({
        isTabFixed:flag2
      })
    }
  },
  handleImageLoad(){
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      this.data.tabScrollTop = rect.top
    }).exec()
  }
})