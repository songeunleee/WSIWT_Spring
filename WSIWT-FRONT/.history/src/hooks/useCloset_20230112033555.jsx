import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { addNewClothes, getClothes } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function useCloset() {
  const { uid } = useAuthContext();
  const queryclient = new useQueryClient();

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

  const removeClothes = useMutation((item) => removeClothes(uid, item), {
    onSuccess: () => {
      queryclient.invalidateQueries(["myCloset", uid]);
    },
  });

  return { closetQuery, addClothes, removeClothes };
}
