import React, { useCallback, useMemo } from "react"
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from "react-native"
import { useGlobal } from "reactn"
import { useNavigation } from "@react-navigation/core"
import { navigateTo, listMainNavigators } from '../utils/navigations'

function Item({ color, string, onPress }) {
  const ITEM_RADIUS = 10

  return (
    <TouchableOpacity style={{ alignItems: "center" }} onPress={onPress}>
      <View
        style={{
          position: "relative",
          width: ITEM_RADIUS * 2,
          height: ITEM_RADIUS * 2,
          borderRadius: ITEM_RADIUS,
          backgroundColor: color,
          marginTop: -ITEM_RADIUS,
          marginLeft: -ITEM_RADIUS,
          marginRight: -ITEM_RADIUS
        }}
      />
      <Text
        style={{
          color,
          fontSize: 11,
          textAlign: "center"
        }}
        children={string}
      />
    </TouchableOpacity>
  )
}

function Dash ({
  dashThickness = 0.5,
  dashColor = "gray",
  dashLength = 8,
  dashGap = 10
}) {
  const occupied = dashLength + dashGap
  const numberDashes = ~~((styles.container.width * 0.8) / occupied) 

  return (
    <View style={{ width: "80%" }}>
      {[...Array(numberDashes)].map((_, i) => (
        <View
          key={i}
          style={{
            position: "absolute",
            width: dashLength,
            height: dashThickness,
            backgroundColor: dashColor,
            left: occupied * i
          }}
        />
      ))}
    </View>
  )
}

export default function TimelineComponent() {
  const [globalCurrentProgress,] = useGlobal("currentProgress")
  const navigation = useNavigation()

  const itemProp = useCallback(
    (progress) => ({
      color: progress <= globalCurrentProgress ? "#005C28" : "gray",
      onPress: () => {
        navigateTo(navigation, listMainNavigators[progress])
      }
    }),
    [navigation, globalCurrentProgress]
  )

  return (
    <View style={styles.container}>
      <Dash/>
      <View style={styles.itemContainer}>
        <Item {...itemProp(1)} string="Nhập thông tin" />
        <Item {...itemProp(2)} string="CMND mặt trước" />
        <Item {...itemProp(3)} string="CMND mặt sau" />
        <Item {...itemProp(4)} string="Chụp khuôn mặt" />
      </View>
    </View>
  )
}

const MARGIN = 10
const styles = StyleSheet.create({
  container: {
    marginTop: MARGIN * 5.5,
    marginBottom: MARGIN * 1.5,
    marginHorizontal: MARGIN,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width - MARGIN * 2
  },
  itemContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  }
})
