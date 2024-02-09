import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import PlacesList from "../components/Places/PlacesList";
import { fetchPlace } from "../util/database";

function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlace() {
      const places = await fetchPlace();
      setLoadedPlaces(places);
    }
    if (isFocused && route.params) {
      loadPlace();
      // setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
