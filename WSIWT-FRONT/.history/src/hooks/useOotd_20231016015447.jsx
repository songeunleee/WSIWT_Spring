import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteOOTD, getOOTDs, postOOTD } from "../api/database";

export default function useOotd() {
  const { user } = useAuthContext();
  const queryclient = useQueryClient();

  const ootdQuery = useQuery(
    ["myOotd"],
    () => getOOTDs().then((res) => res.data),
    {
      staleTime: 1000 * 60,
    }
  );

  const addOotd = useMutation(({ ootdSaveDto }) => postOOTD(ootdSaveDto), {
    onSuccess: () => queryclient.invalidateQueries(["myOotd"]),
  });

  const removeOotd = useMutation((id) => deleteOOTD(id), {
    onSuccess: () => {
      queryclient.invalidateQueries(["mtOotd"]);
    },
  });

  return { ootdQuery, addOotd, removeOotd };
}
