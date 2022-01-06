import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import UserCard from "./src/components/UserCard";

import useFetchData from "./src/hooks/useFetchData";

export default function App() {
  const [data, error] = useFetchData("/users");
  const [text, onChangeText] = React.useState("");
  const [searchedUsers, setSearchedUsers] = React.useState(null);

  const sortedData = data.sort(
    (a, b) => a.login.toLowerCase() > b.login.toLowerCase()
  );

  const searchUser = () => {
    const searchedUsers = sortedData.filter((item) => {
      if (item.login.search(text) !== -1) {
        return item;
      }
    });
    setSearchedUsers(searchedUsers);
  };

  if (error) {
    return (
      <View style={styles.errorStyle}>
        <Text>Error loading users....</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          autoCapitalize="none"
          autoComplete="off"
          value={text}
          onChangeText={onChangeText}
        />
        <Feather name="search" size={24} color="black" onPress={searchUser} />
      </View>
      <FlatList
        data={text ? searchedUsers : sortedData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <UserCard item={item} />}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d2d2d2",
    justifyContent: "center",
  },
  searchContainer: {
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 10,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    fontSize: 16,
    padding: 5,
    flex: 1,
  },
});
