import React, { useState, useEffect } from 'react'
import { getGlobal } from 'reactn'
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions
} from 'react-native'

function getResultOCR() {
  let formData = new FormData()

  formData.append('image_file', {
    uri: getGlobal().frontIdUri,
    type: 'image/jpg',
    name: 'testPhotoName'
  })

  return fetch('http://35.184.42.119/ocr', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      return response.json()
    })
    .then(responseJson => {
      console.log('this is the ocr result')
      console.log(responseJson)
      console.log(JSON.stringify(responseJson))
      // { 
      //   "address":"LÔ 32 KHU A TỔ 5 HÒA TRUNG, VĨNH HÒA, NHA TRANG, KHÁNH HÒA",
      //   "dob":"06/07/1999",
      //   "home":"TP HÀ NỘI",
      //   "id":"225914196",
      //   "name":"NGUYỄN QUANG HUY"
      // }
      return responseJson
    })
}

function getResultFaceRec() {
  let formData = new FormData()

  formData.append('face1', {
    uri: getGlobal().frontIdUri,
    type: 'image/jpg',
    name: 'testPhotoName'
  })

  formData.append('face2', {
    uri: getGlobal().faceUri,
    type: 'image/jpg',
    name: 'testPhotoName'
  })

  return fetch('http://35.184.42.119/faceapi', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      return response.json()
    })
    .then(responseJson => {
      console.log('this is the face result')
      console.log(responseJson)
      console.log(JSON.stringify(responseJson))
      // {
      //   "confidence": 0.5511,
      //   "isIdentical": true
      // }
      return responseJson
    })
}

function checkQH() {
  let formData = new FormData()

  formData.append('cmnd', {
    uri: getGlobal().frontIdUri,
    type: 'image/jpg',
    name: 'testPhotoName'
  })

  return fetch('http://35.184.42.119/qhcheck', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      return response.json()
    })
    .then(responseJson => {
      console.log('this is the qh check result')
      console.log(responseJson)
      console.log(JSON.stringify(responseJson))
      // {
      //   "matches": 8,
      //   "valid": true
      // }
      return responseJson
    })
}

function checkStar() {
  let formData = new FormData()

  formData.append('cmnd', {
    uri: getGlobal().frontIdUri,
    type: 'image/jpg',
    name: 'testPhotoName'
  })

  return fetch('http://35.184.42.119/starcheck', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      return response.json()
    })
    .then(responseJson => {
      console.log('this is the star check result')
      console.log(responseJson)
      console.log(JSON.stringify(responseJson))
      // { 
      //   "matches": 8,
      //   "valid":true
      // }
      return responseJson
    })
}

export default function ResultScreen(props) {
  const [ocr, setOcr] = useState({
    address: 'chưa có dữ liệu',
    dob: 'chưa có dữ liệu',
    home: 'chưa có dữ liệu',
    id: 'chưa có dữ liệu',
    name: 'chưa có dữ liệu'
  })
  const [faceCompare, setFaceCompare] = useState({
    confident: 1,
    isIdentical: true
  })
  const [star, setStar] = useState({
    matches: 8,
    valid: true
  })
  const [qh, setQh] = useState({
    matches: 8,
    valid: true
  })

  useEffect(() => {
    // getResultOCR().then(_ocr => {
    //   console.warn(_ocr)
    //   setOcr(_ocr)
    // })
    getResultFaceRec().then(_faceCompare => {
      setFaceCompare(_faceCompare)
    })
    checkStar().then(_star => {
      setStar(_star)
    })
    checkQH().then(_qh => {
      setQh(_qh)
    })
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View height={10} width={10}></View>
      <Text style={{ fontSize: 22, color: 'red', fontWeight: '700', alignSelf: 'center' }}>Kết quả</Text>
      <View height={10} width={10}></View>
      <Image style={styles.image} source={{ uri: getGlobal().frontIdUri }}></Image>
      <View height={10} width={10}></View>
      <Text style={{ fontSize: 18, fontWeight: '600' }}>Thông tin</Text>
      <View height={10} width={10}></View>
      <View style={{ width: '100%', borderWidth: 2, borderRadius: 5, padding: 10, borderColor: 'green' }}>
        <Text>Địa chỉ: {ocr.address} </Text>
        <Text>Ngày sinh: {ocr.dob} </Text>
        <Text>Nguyên quán: {ocr.home} </Text>
        <Text>Số CMND: {ocr.id} </Text>
        <Text>Họ tên: {ocr.name} </Text>
      </View>
      <View height={10} width={10}></View>
      <View style={{ width: '100%', borderWidth: 2, borderRadius: 5, padding: 10, borderColor: 'red' }}>
        <Text>Quốc huy: {qh.matches}/30 matches , {qh.isIdentical ? 'Khớp' : 'Không khớp'}</Text>
        <Text>Sao trên quốc huy: {star.matches}/20 matches , {star.isIdentical ? 'Khớp' : 'Không khớp'}</Text>
      </View>
      <View height={10} width={10}></View>
      <Text style={{ fontSize: 18, fontWeight: '600' }}>Khuôn mặt</Text>
      <View height={10} width={10}></View>
      <Image style={styles.face} source={{ uri: getGlobal().faceUri }}></Image>
      <View height={10} width={10}></View>
      <View style={{ width: '100%', borderWidth: 2, borderRadius: 5, padding: 10, borderColor: 'green' }}>
        <Text>Cùng một người: {faceCompare.isIdentical ? 'Đúng' : 'Sai'}</Text>
        <Text>Độ chính xác: {faceCompare.confidence}</Text>
      </View>
      {/* Star, QuocHuy */}
    </ScrollView>

    // <ScrollView contentContainerStyle={styles.container}>
    //   <View height={10} width={10}></View>
    //   <Text style={{ fontSize: 22, color: 'red', fontWeight: '700', alignSelf: 'center' }}>Kết quả</Text>
    //   <View height={10} width={10}></View>
    //   <Image style={styles.image} source={require('../assets/anh.jpg')}></Image>
    //   <View height={10} width={10}></View>
    //   <Text style={{ fontSize: 18, fontWeight: '600' }}>Thông tin</Text>
    //   <View height={10} width={10}></View>
    //   <View style={{ width: '100%', borderWidth: 2, borderRadius: 5, padding: 10, borderColor: 'green' }}>
    //     <Text>Địa chỉ: </Text>
    //     <Text>Ngày sinh: </Text>
    //     <Text>Nguyên quán: </Text>
    //     <Text>Số CMND: </Text>
    //     <Text>Họ tên: </Text>
    //   </View>
    //   <View height={10} width={10}></View>
    //   <View style={{ width: '100%', borderWidth: 2, borderRadius: 5, padding: 10, borderColor: 'red' }}>
    //     <Text>QUỐC HUY: /20 matches , khớp</Text>
    //     <Text>NGÔI SAO: /20 matches , không khớp</Text>
    //   </View>
    //   <View height={10} width={10}></View>
    //   <Text style={{ fontSize: 18, fontWeight: '600' }}>Khuôn mặt</Text>
    //   <View height={10} width={10}></View>
    //   <Image style={styles.face} source={require('../assets/anh.jpg')}></Image>
    //   <View height={10} width={10}></View>
    //   <View style={{ width: '100%', borderWidth: 2, borderRadius: 5, padding: 10, borderColor: 'green' }}>
    //     <Text>Cùng một người: Đúng</Text>
    //     <Text>Độ chính xác: 97%</Text>
    //   </View>


    //   {/* Star, QuocHuy */}
    // </ScrollView>
  )
}

const winWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 0,
  },
  image: {
    marginTop: 20,
    width: '100%',
    height: winWidth * 0.65
  },
  face: {
    width: '100%',
    height: winWidth
  }
})
