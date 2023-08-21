import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getType } from "../util/getValue";

export default function usePublic(temperature) {
  const { isLoading, error, data } = useQuery(
    ["public"],
    axios.get("../data/data.json").then((res) => {
      console.log(res);
    }),
    { staleTime: Infinity }
  );

  const clothesList =
    data &&
    data.items.filter((item) => item.type.includes(getType(temperature)));

  const categoryList = data && data.categoryList;
  return { clothesList, categoryList };
}
