import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function Dash ({ 
  dashThickness,
  dashColor,
  dashLength,
  dashGap,
  style
}) {
  return (
    <View style={style}>
      <Text> Dash </Text>
    </View>
  )
}
