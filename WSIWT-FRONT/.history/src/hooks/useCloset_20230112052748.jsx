import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addNewClothes,
  getClothes,
  removeClothes as remove,
} from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function useCloset() {
  const { uid } = useAuthContext();
  const queryclient = useQueryClient();

  const closetQuery = useQuery(
    ["myCloset", uid],
    () => getClothes(uid),
    { enabled: !!uid },
    { staleTime: 1000 * 60 }
  );

  const addClothes = useMutation(
    ({ newClothes, url }) => addNewClothes(newClothes, url, uid),
    { onSuccess: () => queryclient.invalidateQueries(["myCloset", uid]) }
  );

  const removeClothes = useMutation((item) => remove(uid, item), {
    onSuccess: () => {
      queryclient.invalidateQueries(["myCloset", uid]);
    },
  });

  return { closetQuery, addClothes, removeClothes };
}
