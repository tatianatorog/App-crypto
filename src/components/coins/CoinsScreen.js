import React from "react";
import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import useCoins from "../../hooks/useCoin";

const CoinsScreen = ({ navigation }) => {
  const [{ coinsFilter, loading }, setState] = useCoins();
  const handlePress = () => {
    navigation.navigate("CoinDetail");
  };

  return (
    <View style={style.container}>
      <FlatList
        data={coinsFilter}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      ></FlatList>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  btn: {
    padding: 8,
    backgroundColor: "blue",
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    padding: 16,
    textAlign: "center",
  },
  loader: {
    flex: 1,
  },
});
export default CoinsScreen;
