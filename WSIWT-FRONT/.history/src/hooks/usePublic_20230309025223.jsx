import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getType } from "../util/getValue";

export default function usePublic(temperature) {
  const { isLoading, error, data } = useQuery(
    ["public"],
    async () => {
      const res = await axios.get("./public/data/data.json");
      return res;
    },
    { staleTime: Infinity }
  );

  const clothesList =
    data &&
    data.items.filter((item) => item.type.includes(getType(temperature)));

  const categoryList = data && data.categoryList;
  return { clothesList, categoryList };
}
