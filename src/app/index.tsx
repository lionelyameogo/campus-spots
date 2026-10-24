import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/icon.png")} style={styles.logo} />
      <Text style={styles.title}>Campus Spots</Text>
      <Text style={styles.subtitle}>Votre guide de poche ici à Krakow</Text>
      <View style={styles.card}>
  <Text style={styles.cardName}>Lionel Yameogo</Text>
  <Text>Lille-France, General Engineering</Text>
  <Text>Good understanding and team spirit on the football pitch at Porte de Valenciennes.</Text>
</View>
<View style={styles.row}>
  <View style={[styles.square, { backgroundColor: "tomato" }]} />
  <View style={[styles.square, { backgroundColor: "gold", flex: 1 }]} />
  <View style={[styles.square, { backgroundColor: "skyblue" }]} />
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f4",
  },
  logo: {
    width: 96,
    height: 96,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 16,
    color: "#666",
  },
  card: {
  backgroundColor: "#5c52c1",
  borderRadius: 12,
  padding: 16,
  marginTop: 24,
  },
  cardName: {
    fontWeight: "700",
    fontSize: 18,
  },
    row: {
    alignSelf: "stretch",
    marginTop: 24,
    marginHorizontal: 16,
    flexDirection:"row",
    justifyContent:"space-between",
    gap: 8,
  },
  square: {
    width: 60,
    height: 60,
  },
});