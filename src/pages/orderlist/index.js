import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.less';
import { AtTabs, AtTabsPane } from 'taro-ui'

import OrderItem from '../components/orderItem/index'


class OrderList extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentIndex: 0, 
            tabList: [{title: '全部订单'}, {title: '待付款'}, {title: '配送中'}, {title: '已完成'}, {title:'已失效'}]
        }
    }
    handleClick (value) {
        this.setState({
          currentIndex: value
        })
      }
    render() {
        const { currentIndex, tabList } = this.state
        return (
            <View className='order-list'>

                <AtTabs current={currentIndex} tabList={tabList} onClick={this.handleClick.bind(this)}>
                    <AtTabsPane current={currentIndex} index={0} >
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                    </AtTabsPane>
                    <AtTabsPane current={currentIndex} index={1}>
                    
                    </AtTabsPane>
                    <AtTabsPane current={currentIndex} index={2}>

                    </AtTabsPane>
                </AtTabs>

                
            </View>
        )
    }
}

export default OrderList