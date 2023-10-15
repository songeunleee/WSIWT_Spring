import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getOOTDs, postOOTD } from "../api/database";

export default function useOotd() {
  const { user } = useAuthContext();
  const queryclient = useQueryClient();

  const ootdQuery = useQuery(["myOotd"], getOOTDs(), { staleTime: 1000 * 60 });

  const addOotd = useMutation(({ ootdSaveDto }) => postOOTD(ootdSaveDto), {
    onSuccess: () => queryclient.invalidateQueries(["myOotd"]),
  });

  return {};
}
