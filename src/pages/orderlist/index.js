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
            current: Number(this.$router.params.orderListStatus), 
            tabList: [{title: '全部'}, {title: '待付款'}, {title: '配送中'}, {title: '已完成'}, {title:'已失效'}]
        }
    }

    componentWillMount() {
        console.log(this.$router.params.orderListStatus)
    }

    handleClick (value) {
        this.setState({
          current: value
        })
    }

    
    render() {
        const { current, tabList } = this.state;
        return (
            <View className='order-list'>
                <AtTabs current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>

                    <AtTabsPane current={current} index={0} >
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                    </AtTabsPane>
                    <AtTabsPane current={current} index={1}>
                    
                    </AtTabsPane>
                    <AtTabsPane current={current} index={2}>

                    </AtTabsPane>
                </AtTabs>
            </View>
        )
    }
}

export default OrderList