import { StyleSheet, Text, View } from 'react-native'
import type { NetworkingProps } from '../types'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useEffect } from 'react'

interface NotificationProps extends NetworkingProps {
  isVisible: boolean
}

const Notification: React.FC<NotificationProps> = ({
  backgroundColor,
  textColor,
  text,
  zIndex,
  fontFamily,
  fontSize,
  paddingHorizontal,
  paddingVertical,
  duration = 300,
  isVisible
}) => {
  const insets = useSafeAreaInsets()
  const value = useSharedValue(isVisible ? 1 : 0)

  useEffect(() => {
    value.value = withTiming(isVisible ? 1 : 0, {
      duration
    })
  }, [isVisible])

  const style = useAnimatedStyle(() => {
    return {
      opacity: value.value,
      transform: [{
        translateY: interpolate(
          value.value,
          [0, 1],
          [-30, 0]
        )
      }]
    }
  })

  return (
    <Animated.View
      style={[
        style,
        styles.container,
        {
          backgroundColor,
          zIndex
        }
      ]}
      pointerEvents='none'
    >
      <View
        style={{
          marginTop: insets.top,
          paddingVertical,
          paddingHorizontal,
        }}
      >
        <Text
          style={{
            color: textColor,
            fontSize,
            fontFamily
          }}
        >
          {text}
        </Text>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  }
})

export default Notification
