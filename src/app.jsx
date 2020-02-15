import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import Index from './pages/index'
// eslint-disable-next-line import/first
import 'taro-ui/dist/style/index.scss'

import configStore from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {
  global = {
    url: 'http://192.168.0.104:7001'
  }
  config = {
    
    pages: [
      'pages/homepage/index',
      'pages/addressDetail/index',
      'pages/addressList/index',
      'pages/goodsDetail/index',
      'pages/orderdetail/index',
      'pages/orderlist/index',
      'pages/shopcar/index',
      'pages/classification/index',
      'pages/personal/index',
      'pages/index/index',
      

    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#A6E3E9',
      navigationBarTitleText: '便利狗',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#333333",
      selectedColor: "#71c9ce",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "pages/homepage/index",
        text: "首页",
        iconPath: "static/img/homepage.png",
        selectedIconPath: "static/img/homepage_select.png"
      },{
        pagePath: "pages/classification/index",
        text: "分类",
        iconPath: "static/img/classification.png",
        selectedIconPath: "static/img/classification_select.png"
      },{
        pagePath: "pages/shopcar/index",
        text: "购物车",
        iconPath: "static/img/shopcar.png",
        selectedIconPath: "static/img/shopcar_select.png"
      },{
        pagePath: "pages/personal/index",
        text: "个人",
        iconPath: "static/img/personal.png",
        selectedIconPath: "static/img/personal_select.png"
      }]
    }
  }

  

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
