// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 第一种方法，这样写没有默认值，如果不传值过来，这里就是空
    // title:String,    
    // content:String

    // 第二种写法，跟上面一样，但是有了默认值
    title:{
      type:String,
      value:'我是默认标题',
      observer:function(newVal,oldVal){
        console.log(newVal,oldVal)
      }
    },
    content:{
      type:String,
      value:'我是默认值'
    }

  },
  externalClasses:['titleclass'], 



  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
