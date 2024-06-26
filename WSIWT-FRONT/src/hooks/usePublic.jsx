import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getType } from "../util/getValue";

export default function usePublic(temperature) {
  const { data } = useQuery(
    ["public"],
    async () => {
      const res = await axios.get("../data/data.json");
      return res.data;
    },
    { staleTime: Infinity }
  );

  const clothesList =
    data &&
    data.items.filter((item) => item.type.includes(getType(temperature)));

  const categoryList = data && data.categoryList;

  const placeList = data && data.place;
  return { clothesList, categoryList,placeList };
}
