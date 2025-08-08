export default function HospitalSolutionsHeader({ children }) {
  return (
    <div className="flex flex-col justify-center items-center px-16 py-28 w-full text-6xl leading-none whitespace-nowrap bg-black text-neutral-100 max-md:px-5 max-md:py-24 max-md:max-w-full max-md:text-4xl">
      <div className="mb-0 text-neutral-100 max-md:mb-2.5 max-md:text-4xl">
        {children}
      </div>
    </div>
  );
}
