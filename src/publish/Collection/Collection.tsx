import dummyImage13 from "./../../assets/images/dummy_13.png";
import dummyImage14 from "./../../assets/images/dummy_14.png";

export const Collection = () => {
  return (
    <div className={"wrap"}>
      {/* <Header btn_back bell isBellActive={true} profile /> */}
      <div className="collection">
        <div className="progress_bar_wrap">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="thum">
          <div className="image">
            <img src={dummyImage13} alt="" />
          </div>
          <span>추석</span>
          <button className="close"></button>
        </div>

        <div className="visual">
          <img src={dummyImage14} alt="" />
        </div>

        <div className="tags">
          <ul>
            <li>#중원당</li>
            <li>#도자기세트</li>
            <li>#4만원대선물</li>
            <li>#전통주</li>
            <li>#백도자기세트_장인정신</li>
            <li>#중원당</li>
          </ul>
        </div>
        <button className="btn_more">제품 더 알아보기</button>
      </div>
    </div>
  );
};
