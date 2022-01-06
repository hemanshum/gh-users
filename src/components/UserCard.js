import { View, Text, StyleSheet, Image } from "react-native";

export default function UserCard({ item }) {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.headline}>Username</Text>
        <Text>{item.login}</Text>
      </View>
      <Image
        style={styles.avatar}
        source={{
          uri: `${item.avatar_url}`,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 6,
  },
  textContainer: {
    padding: 5,
    width: "30%",
  },
  headline: {
    fontWeight: "700",
    textAlign: "left",
  },
  errorStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
