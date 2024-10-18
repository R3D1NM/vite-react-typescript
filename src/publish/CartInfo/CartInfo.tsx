import { Header } from "../Common/Header";
import dummy4 from "./../../assets/images/dummy_4.png";
import profile from "./../../assets/images/dummy_3.svg";
import giftBox from "./../../assets/images/giftBox.svg";
import friend from "./../../assets/images/icon_friend.svg";

export const CartInfo = () => {
  return (
    <div className={"wrap"}>
      <Header btn_back setting bell profile isBellActive={true} />
      <div className="cardInfo">
        <div className="list_rounding">
          <div className="writing">
            <div>
              <img src={profile} alt="" />
            </div>
            <div>
              <div className="dDay">D-2</div>
              <div className="title">월급루팡공주님 선물고르기</div>
            </div>
            <div>
              <button className="btn_pencil"></button>
            </div>
          </div>
          <button className="btn_shadow">
            <i>
              <img src={giftBox} alt="" />
            </i>
            선물 바구니 보러가기
          </button>
        </div>
        <div className="list_rounding">
          <div className="friend_list">
            <div>
              <p className="title">참여중인 친구목록</p>
              <button className="btn_txt">모두 친구추가</button>
            </div>
            <div>
              <ul>
                <li>
                  <button>
                    <div>
                      <img src={dummy4} alt="" />
                    </div>
                    <p>이세영</p>
                    <div className="overlay">
                      <button className="profile">
                        <i></i>프로필보기
                      </button>
                      <button className="profile2">
                        <i></i>친구 요청
                      </button>
                    </div>
                  </button>
                </li>
                <li>
                  <button>
                    <div>
                      <img src={dummy4} alt="" />
                    </div>
                    <p>이세영</p>
                  </button>
                </li>
                <li>
                  <button>
                    <div>
                      <img src={dummy4} alt="" />
                    </div>
                    <p>이세영</p>
                  </button>
                </li>
                <li>
                  <button>
                    <div>
                      <img src={dummy4} alt="" />
                    </div>
                    <p>이세영</p>
                  </button>
                </li>
                <li>
                  <button>
                    <div>
                      <img src={dummy4} alt="" />
                    </div>
                    <p>이세영</p>
                  </button>
                </li>
                <li>
                  <button>
                    <div>
                      <img src={dummy4} alt="" />
                    </div>
                    <p>이세영</p>
                  </button>
                </li>
                <li>
                  <button>
                    <div>
                      <img src={dummy4} alt="" />
                    </div>
                    <p>이세영</p>
                  </button>
                </li>
                <li>
                  <button>
                    <div>
                      <img src={dummy4} alt="" />
                    </div>
                    <p>이세영</p>
                  </button>
                </li>
                <li>
                  <button>
                    <div>
                      <img src={dummy4} alt="" />
                    </div>
                    <p>이세영</p>
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <button className="btn_shadow">
                <i>
                  <img src={friend} alt="" />
                </i>
                새로운 친구 초대하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
