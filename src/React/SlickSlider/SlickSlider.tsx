import Cards from "./Card/Cards";

const SlickSlider = () => {
  return (
    <div className="d-flex align-items-center justify-content-center w-90-parsent">
      <span className="hover bg-dark text-white py-1 px-2 fw-bold slider-btn">
        ＜
      </span>
      <div
        className="bg-white w-90-parsent py-5"
        style={{ overflowX: "auto", whiteSpace: "nowrap" }}
      >
        <ul id="ul" className="d-inline-flex">
          {Cards.map((item, index) => (
            <li
              className="mx-2"
              key={index}
              style={{ display: "inline-block" }}
            >
              {item.card}
            </li>
          ))}
        </ul>
      </div>
      <span className="hover bg-dark text-white py-1 px-2 fw-bold slider-btn">
        ＞
      </span>
    </div>
  );
};

export default SlickSlider;
