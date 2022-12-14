import { useState } from "react";
import { trpc } from "../utils/trpc";

type Dance = {
  id: string;
  url: string;
  name: string;
  timestamp: string;
  comment: string;
};
export default function Card(props: Dance) {
  const [comment, setComment] = useState("");
  const mutation = trpc.dances.updateComment.useMutation();

  const updateValue = async (event: Event) => {
    event.preventDefault();
    mutation.mutate({ id: props.id, comment: comment });
    console.log("hi");
  };
  return (
    <div className="max-w-sm overflow-hidden rounded bg-white shadow-lg">
      <iframe
        className=" aspect-video w-full"
        src={props.url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{props.name}</div>
        <p className="text-base text-gray-700">{props.comment}</p>
        <form onSubmit={updateValue}>
          {" "}
          <label>
            Name:
            <input
              type="text"
              value={comment}
              onChange={(e) => {
                e.preventDefault();
                setComment(e.target.value);
              }}
            />{" "}
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
