export default function Card({ image, heading, detail }) {
  return (
    <>
      <div className="card ">
        <img src={image} alt="" className=" scale-50 -mt-4" />
        <span className=" text-base -mt-4">{heading}</span>
        <span className="text-xs mt-2">{detail}</span>
        <button className="c-btn"> LEARN MORE</button>
      </div>
    </>
  );
}
