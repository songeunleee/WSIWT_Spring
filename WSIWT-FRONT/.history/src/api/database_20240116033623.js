import axios from "axios";
import { call } from "./Auth";

export async function getOOTDs(pageDto) {
  return call("/ootds", "POST", pageDto);
}

export function postOOTD(saveDto) {
  console.log(saveDto);
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
  return call(`/api/v1/comment/${id}`, "PUT", commentUpdateDto);
}

export function deleteComment(id) {
  return call(`/api/v1/comment/${id}`, "DELETE");
}

export function postNestedComment(ootdId, id, commentSaveDto) {
  return call(`/api/v1/${ootdId}/comment/${id}`, "POST", commentSaveDto);
}

export function postClothes(clothesSaveDto) {
  console.log(clothesSaveDto);
  return call("/api/v1/clothes", "POST", clothesSaveDto);
}

export function getClothes() {
  return call("/api/v1/clothes");
}

export function deleteClothes(id) {
  console.log(id);
  return call(`/api/v1/clothes/${id}`, "DELETE");
}
