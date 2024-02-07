import { FlatList } from "react-native";

function AllPlaces({ places }) {
  return (
    <FlatList
      data={places}
      keyExtractor={(data) => {
        data.item.id;
      }}
    />
  );
}

export default AllPlaces;
