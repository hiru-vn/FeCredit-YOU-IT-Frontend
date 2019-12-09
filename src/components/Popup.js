import React, { useState } from "react"
import { View, StyleSheet, Text } from "react-native"
import { Button, Paragraph, Dialog, Portal } from "react-native-paper"

export default function Popup({
  title,
  contents,
  mainButtonLabel,
  secondaryButtonLabel,
  mainButtonAction,
  secondaryButtonAction
}) {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Portal>
        <Dialog visible={visible} dismissable={false}>
          <Dialog.Title style={styles.title} children={title} />

          <Dialog.Content>
            {contents.map((content, id) => (
              <Paragraph key={id} style={styles.content} children={content} />
            ))}
          </Dialog.Content>

          <Dialog.Actions style={styles.buttonWrapper}>
            <Button
              style={styles.button}
              mode="contained"
              onPress={mainButtonAction}
              children={mainButtonLabel}
            />
            <Button
              style={styles.button}
              onPress={secondaryButtonAction}
              children={secondaryButtonLabel}
            />
          </Dialog.Actions>
        </Dialog>
      </Portal>

      {/* Usage: */}
      {/* <Popup
        title="CMND MẶT TRƯỚC CÓ THỂ KHÔNG HỢP LỆ"
        contents={[
          "- CMND trên hình có vẻ không đủ 9 chữ số",
          "- Nơi ĐKHK thường trú có vẻ không hợp lệ"
        ]}
        mainButtonLabel="CHỤP LẠI"
        secondaryButtonLabel="TIẾP TỤC"
        mainButtonAction={() => {}}
        secondaryButtonAction={() => {}}
      />
      <Popup
        title="BẠN CÓ CHẮC CHẮN MUỐN TRỞ VỀ TRANG ĐẦU?"
        contents={["Lưu ý: Tất cả thông tin đã điền hiện tại sẽ bị mất"]}
        mainButtonLabel="DỪNG LẠI"
        secondaryButtonLabel="ĐỒNG Ý"
        mainButtonAction={() => {}}
        secondaryButtonAction={() => {}}
      /> */}

      <Button onPress={() => setVisible(true)}>Click me!</Button>
    </>
  )
}

const RED_COLOR = "#B30E00"

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: RED_COLOR,
    fontWeight: "600"
  },
  content: {
    color: RED_COLOR
  },
  buttonWrapper: {
    flexDirection: "column"
  },
  button: {
    width: 200,
    padding: 5
  }
})
