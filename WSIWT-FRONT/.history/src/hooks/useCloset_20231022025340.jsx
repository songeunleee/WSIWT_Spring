import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  // addNewClothes,
  getClothes,
  postClothes,
  //  removeClothes as remove,
} from "../api/database";
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

  // const removeClothes = useMutation((item) => remove(uid, item), {
  //   onSuccess: () => {
  //     queryclient.invalidateQueries(["myCloset", uid]);
  //   },
  // });

  return { closetQuery, addClothes };
}
