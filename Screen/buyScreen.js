import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";


export default function buyScreen({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://192.168.10.101:5000/getGioHang")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        alert(error);
      });
  });
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row" }}>
            <Image
              source={{
                uri: "http://192.168.10.101:5000/" + item.image,
              }}
              style={{ height: 100, width: 100, margin: 10, borderRadius: 10 }}
            ></Image>
            <View style={{ flexDirection: "column", width: 170 }}>
              <Text style={{ fontSize: 18, marginTop: 20 }}>
                <Text>{item.theloai}</Text>
              </Text>
              <Text style={{ fontSize: 18, marginTop: 10 }}>
                <Text>Giá: {item.price} VNĐ</Text>
              </Text>
            </View>
            <TouchableOpacity onSwipedLeft={() => this.deleteItemById(item.id)}>
              <Text style={{ color: "red" }}>Xóa</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
