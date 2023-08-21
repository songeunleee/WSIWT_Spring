import React from "react";
import CategoryItem from "./CategoryItem";

export default function Category() {
  const { isLoading, error, data } = useQuery(["public"], async () => {
    console.log("fetching...");
    const res = await fetch("../data/data.json");
    return res.json();
  });
  const categoryList = data && data.categoryList;
  return (
    <div className="flex flex-col  bg-color2 rounded-md p-2 my-3">
      <div className="self-start text-xl font-bold text-color4 pl-1">
        CATEGORY
      </div>
      <div className="flex gap-1">
        <div className="flex flex-1 flex-col border-2 border-dashed border-color4 rounded-md">
          {categoryList &&
            categoryList["main_list"].map((item) => (
              <CategoryItem
                key={item.name}
                item={item}
                clickCategory={ClickMain}
                value={main}
              />
            ))}
        </div>
        <div className="flex flex-1 flex-col border-2 border-dashed border-color4 rounded-md">
          {main &&
            categoryList &&
            categoryList[main].map((item) => (
              <CategoryItem
                key={item.name}
                item={item}
                clickCategory={ClickMiddle}
                value={middle}
              />
            ))}
        </div>
        <div className="flex flex-1 flex-col border-2 border-dashed border-color4 rounded-md">
          {middle &&
            categoryList &&
            categoryList[middle] &&
            categoryList[middle].map((item) => (
              <CategoryItem
                key={item.name}
                item={item}
                clickCategory={ClickSub}
                value={sub}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
