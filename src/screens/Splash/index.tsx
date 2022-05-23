import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import CloseSvg from '../../assets/logoClose.svg'
import MidOpenSvg from '../../assets/logo-mid-open.svg'

import Animated, { 
    useAnimatedStyle, 
    useSharedValue,
    interpolate,
    withTiming,
    runOnJS
} from 'react-native-reanimated';

import { useNavigation } from '@react-navigation/native';

import {
    Container
} from './styles';

export function Splash(){
    const splashAnimation = useSharedValue(0)

    const CloseStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                splashAnimation.value, 
                [0, 50], 
                [1, 0]
            )
        }
    })

    const MidOpenStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                splashAnimation.value, 
                [0, 50], 
                [0, 1]
            )
        }
    })

    const navigation = useNavigation<any>()

    function startApp() {
        navigation.navigate('Lessons')
    }

    useEffect(() => {
        splashAnimation.value = withTiming(
            50, { duration: 5000},
            () => {
                'worklet'
                runOnJS(startApp)()
            }
        )
    },[])

    return (
        <Container>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <Animated.View style={[CloseStyle, {position: 'absolute'}]}>
                <CloseSvg width={120} height={120} />
            </Animated.View>

            <Animated.View style={[MidOpenStyle, {position: 'absolute'}]}>
                <MidOpenSvg width={120} height={120} />
            </Animated.View>
        </Container>
    )
}