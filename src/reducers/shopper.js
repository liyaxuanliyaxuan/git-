
import { SET, ADD_ONE, DEC_ONE, JOIN_ITEM, REMOVE_ITEM, SELECT_ALL, RESET_ALL, ADD_TO_CAR } from '../constants/shopper'
import { brotliCompress } from 'zlib'
//处理购物车state

const INITIAL_STATE = {
  currentItem: {
  },
  shopCarList: [{
    goodImg: 'http://yunimg.bbcmart.com/upload/image/2018/08/15/38930_14294111.jpg',
    goodPrice: '8.8',
    goodTitle: '热狗',
    goodNum: 1
  }, {
    goodImg: 'http://www.pptok.com/wp-content/uploads/2013/04/HongYi11.jpg',
    goodPrice: '5.5',
    goodTitle: '千层面',
    goodNum: 2
  }, {
    goodImg: 'http://yunimg.bbcmart.com/upload/image/2018/08/15/38930_14294111.jpg',
    goodPrice: '8.8',
    goodTitle: '热狗',
    goodNum: 1
  }, {
    goodImg: 'http://www.pptok.com/wp-content/uploads/2013/04/HongYi11.jpg',
    goodPrice: '5.5',
    goodTitle: '千层面',
    goodNum: 1
  }, {
    goodImg: 'http://yunimg.bbcmart.com/upload/image/2018/08/15/38930_14294111.jpg',
    goodPrice: '8.8',
    goodTitle: '热狗',
    goodNum: 1
  }, {
    goodImg: 'http://www.pptok.com/wp-content/uploads/2013/04/HongYi11.jpg',
    goodPrice: '5.5',
    goodTitle: '千层面',
    goodNum: 1
  }],
  itemsToPay: [],
  totalPrice: 0,
  chooseAll: false,
  ifChoose: [false, false, false, false, false, false]
}

export default function shopper(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET:
      {
        let tempState = JSON.parse(JSON.stringify(state))
        return {
          ...tempState
        }
      }
      break
    case ADD_ONE:
      {
        let tempState = JSON.parse(JSON.stringify(state))
        tempState.shopCarList[action.index].goodNum++
        if (tempState.itemsToPay.length !== 0) {
          let price = 0
          for (let item of tempState.itemsToPay) {
            if (item.index == action.index) {
              item.goodNum++
            }
            price = price + item.goodNum * item.goodPrice
          }
          tempState.totalPrice = price
        }
        return {
          ...tempState
        }
      }
      break
    case DEC_ONE:
      {
        let tempState = JSON.parse(JSON.stringify(state))
        tempState.shopCarList[action.index].goodNum--
        if (tempState.itemsToPay.length !== 0) {
          let price = 0
          for (let item of tempState.itemsToPay) {
            if (item.index == action.index) {
              item.goodNum--
            }
            price = price + item.goodNum * item.goodPrice
          }
          tempState.totalPrice = price
        }
        return {
          ...tempState
        }
      }
      break
    case JOIN_ITEM:
      {
        let tempState = JSON.parse(JSON.stringify(state))
        let price = 0
        tempState.itemsToPay = [...tempState.itemsToPay, { ...action.info, index: action.index }]
        for (let item of tempState.itemsToPay) {
          price = price + item.goodNum * item.goodPrice
        }
        tempState.totalPrice = price
        tempState.ifChoose[action.index] = true
        if (tempState.shopCarList.length === tempState.itemsToPay.length) {
          tempState.chooseAll = true
        }
        return {
          ...tempState,
        }
      }
      break
    case REMOVE_ITEM:
      {
        let tempState = JSON.parse(JSON.stringify(state))
        let price = 0
        for (let item of tempState.itemsToPay) {
          if (item.index == action.index) {
            tempState.itemsToPay.splice(item.index, 1)
            break
          }
        }
        for (let item of tempState.itemsToPay) {
          price = price + item.goodNum * item.goodPrice
        }
        tempState.totalPrice = price
        tempState.ifChoose[action.index] = false
        tempState.chooseAll = false
        return {
          ...tempState
        }
      }
      break
    case SELECT_ALL:
      {
        let tempState = JSON.parse(JSON.stringify(state))
        let price = 0
        tempState.itemsToPay = tempState.shopCarList.map((item, index) => {
          return { ...item, index }
        })
        for (let item of tempState.itemsToPay) {
          price = price + item.goodNum * item.goodPrice
        }
        tempState.totalPrice = price
        tempState.ifChoose = tempState.ifChoose.map(() => true)
        tempState.chooseAll = true
        return {
          ...tempState
        }
      }
      break
    case RESET_ALL:
      {
        let tempState = JSON.parse(JSON.stringify(state))
        tempState.itemsToPay = []
        tempState.totalPrice = 0
        tempState.ifChoose = tempState.ifChoose.map(() => false)
        tempState.chooseAll = false
        return {
          ...tempState
        }
      }
    case ADD_TO_CAR:
      {
        let tempState = JSON.parse(JSON.stringify(state))
        tempState.shopCarList = [...tempState.shopCarList, { ...action.info, goodNum: 1 }]
        tempState.ifChoose = [...tempState.ifChoose, false]
        return {
          ...tempState
        }
      }
      break
    default:
      return state
  }
}
