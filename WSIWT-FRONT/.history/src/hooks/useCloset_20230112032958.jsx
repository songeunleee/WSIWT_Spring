import { useMutation } from "@tanstack/react-query";
import React from "react";
import { addNewClothes } from "../api/firebase";

export default function useCloset() {
  const closetQuery = useQuery(
    ["myCloset"],
    () => getClothes(uid),
    { enabled: !!uid },
    { staleTime: 1000 * 60 }
  );

  const addClothes = useMutation(
    ({ newClothes, url }) => addNewClothes(newClothes, url, uid),
    { onSuccess: () => queryclient.invalidateQueries(["myCloset", uid]) }
  );

  return { closetQuery, addClothes, removeClothes };
}
