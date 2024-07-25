export default function FloatingDiv({ image, txt1, txt2 }) {
  return (
    <>
      <div className="floatingDiv">
        <img src={image} alt="" className=" scale-50" />
        <span className=" font-serif text-base">
          {txt1}
          <br />
          {txt2}
        </span>
      </div>
    </>
  );
}
