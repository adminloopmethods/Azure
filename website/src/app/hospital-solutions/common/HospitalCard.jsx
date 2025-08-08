export default function HospitalCard({ title, bullets = [], className = "" }) {
  return (
    <div
      className={`bg-[#ededed] pb-5 text-black shadow-lg overflow-hidden flex flex-col ${className}`}
    >
      {/* heading */}
      <div className="px-6 sm:px-8 lg:px-12 py-2">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium pt-6 sm:pt-8 lg:pt-10">
          {title}
        </h3>
      </div>

      {/* body: grows and scrolls if long */}
      <div className="pl-6 sm:pl-8 lg:pl-12 pr-6 sm:pr-8 lg:pr-12 pb-5 sm:pb-6 lg:pb-7 flex-1 min-h-[6rem] max-h-[28rem] overflow-auto">
        <ul className="list-disc list-inside space-y-0 text-base sm:text-lg text-neutral-300">
          {bullets.length === 0 ? (
            <li className="text-neutral-500 italic">No items yet.</li>
          ) : (
            bullets.map((b, i) => (
              <li
                key={i}
                className="leading-6 sm:leading-7 font-light text-base sm:text-lg text-black"
              >
                {b}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
