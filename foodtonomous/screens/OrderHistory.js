import React from 'react'
import {Card, Text} from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import {NavbarTop} from '../components/NavbarTop';

function OrderHistory() {
  return (
    <View style={styles.container}>
      <NavbarTop />
      <Text style={{textAlign: 'center'}}>{"\n"}Order History {"\n"}</Text>
      <Card>
        <View style={styles.flexCont}>
          <View>
            <Text> IMG here </Text>
          </View>
          <Text> | </Text>
          <View>
            <Text>
              deskripsi makanan dan nama restorannya
            </Text>
            <Text>
              tanggal order
            </Text>
          </View>
        </View>
      </Card>
      <Card>
        <View style={styles.flexCont}>
          <View>
            <Text> IMG here </Text>
          </View>
          <Text> | </Text>
          <View>
            <Text>
              deskripsi makanan dan nama restorannya
            </Text>
            <Text>
              tanggal order
            </Text>
          </View>
        </View>
      </Card>
      <Card>
        <View style={styles.flexCont}>
          <View>
            <Text> IMG here </Text>
          </View>
          <Text> | </Text>
          <View>
            <Text>
              deskripsi makanan dan nama restorannya
            </Text>
            <Text>
              tanggal order
            </Text>
          </View>
        </View>
      </Card>
      <Card>
        <View style={styles.flexCont}>
          <View>
            <Text> IMG here </Text>
          </View>
          <Text> | </Text>
          <View>
            <Text>
              deskripsi makanan dan nama restorannya
            </Text>
            <Text>
              tanggal order
            </Text>
          </View>
        </View>
      </Card>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 0,
  },
  flexCont: {
    display: 'flex',
    flexDirection: 'row',
  }
});

export default OrderHistory