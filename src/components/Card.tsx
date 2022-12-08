type Dance = {
  url: string;
  name: string;
  timestamp: string;
  comment: string;
};
export default function Card(props: Dance) {
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg bg-white">
      <iframe
        className=" aspect-video w-full"
        src={props.url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{props.name}</div>
        <p className="text-base text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  );
}
