import { useQuery } from "@tanstack/react-query";
import { getType } from "../util/getValue";

export default function usePublic(temperature) {
  const { isLoading, error, data } = useQuery(
    ["public"],
    async () => {
      const res = await fetch("../data/data.json");
      return res.json();
    },
    { staleTime: Infinity }
  );
  const dataUrl = `${process.env.PUBLIC_URL}/data/data.json`;

  const clothesList =
    data &&
    data.items.filter((item) => item.type.includes(getType(temperature)));

  const categoryList = data && data.categoryList;
  return { clothesList, categoryList };
}
