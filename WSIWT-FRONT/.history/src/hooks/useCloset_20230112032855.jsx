import React from "react";

export default function useCloset() {
  const closetQuery = useQuery(
    ["myCloset"],
    () => getClothes(uid),
    { enabled: !!uid },
    { staleTime: 1000 * 60 }
  );

  return { closetQuery, addClothes, removeClothes };
}
