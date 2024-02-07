import { FlatList, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";

function PlacesList({ places }) {
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(item) => <PlaceItem places={item} />}
    />
  );
}

export default PlacesList;
