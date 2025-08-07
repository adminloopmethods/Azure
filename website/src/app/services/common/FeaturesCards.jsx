export default function FeaturesCards({ data = [] }) {
  return (
    <div className="flex flex-col items-end gap-6">
      {data.map((item, index) => (
        <div
          key={index}
          className={`w-full  rounded-sm shadow-md p-6 hover:shadow-xl transition duration-300 cursor-pointer ${
            item.bgColor || "bg-black"
          } ${item.textColor || "text-white"}`}
        >
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <p className="text-base">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
