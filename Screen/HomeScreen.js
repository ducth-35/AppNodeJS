import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function home({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://192.168.10.101:5000/getAllJson")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        alert(error);
      });
  });
  return (
    <View style={styles.container}>
      <FlatList
        numColumns="2"
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              style={{
                width: 120,
                height: 120,
                borderRadius: 10,
                marginLeft: 30,
                marginRight: 30,
              }}
              source={{
                uri: "http://192.168.10.101:5000/" + item.image,
              }}
            />
            <Text>{item.theloai}</Text>
            <Text>{item.price}Đ</Text>
            <Text>Màu: {item.mausac}</Text>

            <TouchableOpacity
              onPress={async () => {
                const product = {
                  theloai: item.theloai,
                  price: item.price,
                  image: item.image,
                };
                console.log(JSON.stringify(product));
                try {
                  let result = await fetch(
                    "http://192.168.10.101:5000/addGioHang",
                    {
                      method: "POST",
                      body: JSON.stringify(product),
                      headers: {
                        "Content-type": "application/json; charset=UTF-8",
                      },
                    }
                  );
                  let resultJson = await result.json();
                  if (resultJson.status) {
                    console.log(resultJson)
                    Alert.alert("Đã thêm");
                  } else {
                    Alert.alert("Thêm thất bại");
                  }
                } catch (error) {
                  console.log(error.message);
                }
              }}
            >
              <View
                style={{
                  width: 45,
                  height: 30,
                  backgroundColor: "#00b5ec",
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 5,
                }}
              >
                <Text style={{ color: "white" }}>Thêm</Text>
              </View>
            </TouchableOpacity>

          </View>
        )}
        keyExtractor={(item) => item._id}
      />
      <TouchableOpacity
        style={{ marginLeft: 140 }}
        onPress={() => {
          navigation.navigate("Buy");
        }}
      >
        <View
          style={{
            backgroundColor: "#00b5ec",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
          }}
        >
          <Text style={{ color: "white" }}>Giỏ Hàng</Text>
        </View>
      </TouchableOpacity>
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
  item: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
});
