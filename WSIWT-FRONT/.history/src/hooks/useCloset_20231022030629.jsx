import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteClothes, getClothes, postClothes } from "../api/database";
import { useAuthContext } from "../context/AuthContext";

export default function useCloset() {
  const { uid } = useAuthContext();
  const queryclient = useQueryClient();

  const closetQuery = useQuery(
    ["myCloset"],
    () => getClothes().then((res) => res.data),

    { staleTime: 1000 * 60 }
  );

  const addClothes = useMutation((newClothes) => postClothes(newClothes), {
    onSuccess: () => queryclient.invalidateQueries(["myCloset"]),
  });

  const removeClothes = useMutation((id) => deleteClothes(id), {
    onSuccess: () => {
      queryclient.invalidateQueries(["myCloset", uid]);
    },
  });

  return { closetQuery, addClothes, removeClothes };
}
