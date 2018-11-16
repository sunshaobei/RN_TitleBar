import React from 'react';
import {Animated, Easing, View} from "react-native";
import {createStackNavigator} from 'react-navigation';
import Home from "./Home";
import Second from "./Second";
import TitleBar from "./TitleBar";

export default createStackNavigator(
    {
        Home: {
            screen: Home, navigationOptions: ({navigation}) => ({
                header: null,
                cardStack: {
                    gesturesEnabled: true
                }
            })
        },
        Second: {
            screen: Second, navigationOptions: ({navigation}) => ({
                header: null,
                cardStack: {
                    gesturesEnabled: true
                }
            })
        },
    },
    {
        initialRouteName: 'Home',
        headerMode: 'screen',
        transitionConfig: () => ({
            transitionSpec: {
                duration: 400,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const {layout, position, scene} = sceneProps;
                const {index} = scene;
                const Width = layout.initWidth;
                //沿X轴平移
                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [Width, 0, -(Width - 10)],
                });
                //透明度
                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });
                return {opacity, transform: [{translateX}]};
            }
            //下面这行屏蔽的代码实现效果和上面代码一样，使得页面切换在android上也是水平滑入滑出
            // screenInterpolator:CardStackStyleInterpolator.forHorizontal,
        })
    }
)



