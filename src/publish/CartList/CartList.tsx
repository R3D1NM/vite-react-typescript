// import "../App.css";
import { Header } from "../Common/Header";

export const CartList = () => {
  return (
    <div className={"wrap"}>
      <Header bell profile isBellActive={true} />
      <div className="p-4 cardList">
        <ul className="rounding">
          <li>
            <div>
              <div className="capsule">D-4</div>
              <div>
                <p className="text-sm font-bold">바구니 이름</p>
                <div className="mt-2 mr-4 text-xs persons">
                  참여자
                  <div className="thums">
                    <ul>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </li>
        </ul>
      </div>
    </div>
  );
};
