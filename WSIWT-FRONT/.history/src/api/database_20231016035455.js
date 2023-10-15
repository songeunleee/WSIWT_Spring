import axios from "axios";
import { call } from "./Auth";

export async function getOOTDs() {
  return call("/ootds", "GET");
}

export function postOOTD(saveDto) {
  return call("/api/v1/ootd", "POST", saveDto);
}

export function updateOOTD(id, updateDto) {
  return call(`/api/v1/ootd/${id}`, "PUT", updateDto);
}

export function deleteOOTD(id) {
  return call(`/api/v1/ootd/${id}`, "DELETE");
}

export function postComment(ootdId, commentSaveDto) {
  return call(`/api/v1/${ootdId}/comment`, "POST", commentSaveDto);
}

export function updateComment(id, commentUpdateDto) {
  console.log(`api/v1/comment/${id}`, { content: "comment" });
  return call(`api/v1/comment/${id}`, "PUT", { content: "commdfdfent" });
}

export function deleteComment(id) {
  return call(`/api/v1/comment/${id}`, "DELETE");
}
