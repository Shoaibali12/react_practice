import Toggle from "./Toggle";

export default function Navbar() {
  return (
    <>
      <div className="flex  gap-36 font-bold pt-6">
        <div className=" flex-1 flex gap-8">
          <span className=" font-bold text-xl">Shoaib Ali</span>
          <Toggle />
        </div>
        <div className="right flex-1 flex justify-between text-l">
          <ul className="flex justify-between gap-6">
            <li>Home</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonial</li>
          </ul>
        </div>
        <button className="btn">Contact</button>
      </div>
    </>
  );
}
