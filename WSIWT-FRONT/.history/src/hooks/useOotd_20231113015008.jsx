import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteComment,
  deleteOOTD,
  getOOTDs,
  postComment,
  postNestedComment,
  postOOTD,
  updateComment,
  updateOOTD,
} from "../api/database";

export default function useOotd(pageDto) {
  const queryclient = useQueryClient();

  const ootdQuery = useQuery(
    ["myOotd"],
    () => getOOTDs(pageDto).then((res) => res.data),
    {
      staleTime: 1000 * 60,
    }
  );

  const addOotd = useMutation(
    (ootdSaveDto) => {
      postOOTD(ootdSaveDto);
    },
    {
      onSuccess: () => queryclient.invalidateQueries(["myOotd"]),
    }
  );

  const removeOotd = useMutation((id) => deleteOOTD(id), {
    onSuccess: () => {
      queryclient.invalidateQueries(["myOotd"]);
    },
  });

  const updateOotd = useMutation(
    ({ id, ootdUpdateDto }) => updateOOTD(id, ootdUpdateDto),
    {
      onSuccess: () => queryclient.invalidateQueries(["myOotd"]),
    }
  );

  const addComment = useMutation(
    ({ ootdId, commentSaveDto }) => postComment(ootdId, commentSaveDto),
    {
      onSuccess: () => queryclient.invalidateQueries(["myOotd"]),
    }
  );

  const removeComment = useMutation((id) => deleteComment(id), {
    onSuccess: () => queryclient.invalidateQueries(["myOotd"]),
  });

  const editComment = useMutation(
    ({ id, commentUpdateDto }) => updateComment(id, commentUpdateDto),
    {
      onSuccess: () => queryclient.invalidateQueries(["myOotd"]),
    }
  );

  const addNestedComment = useMutation(
    ({ ootdId, id, commentSaveDto }) =>
      postNestedComment(ootdId, id, commentSaveDto),
    {
      onSuccess: () => queryclient.invalidateQueries(["myOotd"]),
    }
  );

  const nextPage = useMutation(({ pageDto }) => getOOTDs(pageDto), {
    onSuccess: () => queryclient.invalidateQueries(["myOotd"]),
  });

  return {
    ootdQuery,
    addOotd,
    removeOotd,
    updateOotd,
    addComment,
    removeComment,
    editComment,
    addNestedComment,
    nextPage,
  };
}
