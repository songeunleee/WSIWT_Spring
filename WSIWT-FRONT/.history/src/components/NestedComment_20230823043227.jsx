import React from "react";

export default function NestedComment() {
  return (
    <section>
      {" "}
      <User user={{ photoURL: "images/coat.png", displayName: "이송은" }} />
      <div className="font">{content}</div>
      <div className="flex">
        <button>
          <HiPencilSquare />
        </button>
        <button>
          <BsFillTrashFill />
        </button>
      </div>
    </section>
  );
}
