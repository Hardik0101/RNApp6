import { Image, Pressable, Text, View, StyleSheet } from "react-native";

function PlaceItem({ places, onSelect }) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackConatiner}>
        <Text>No Places Added yet - start adding some !</Text>
      </View>
    );
  }

  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: places.imageUri }} />
      <View>
        <Text>{places.title}</Text>
        <Text>{places.address}</Text>
      </View>
    </Pressable>
  );
}
export default PlaceItem;

const styles = StyleSheet.create({
  fallbackConatiner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fallbackText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
