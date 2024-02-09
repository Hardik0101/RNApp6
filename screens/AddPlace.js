import PlaceForm from "../components/Places/PlaceForm";
import { inserrPlace } from "../util/database";

function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
    await inserrPlace(place);
    navigation.navigate("AllPlaces", {
      place: place,
    });
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
