import { Checkbox, Form, Image, Pagination } from "antd";
import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { DataTypeKhobG, IParams } from "../../../types";
// import "node_modules/video-react/dist/video-react.css";

import "./styles.scss";
const CardListItemBanGhi: React.FC<{ data: DataTypeKhobG[] }> = (props) => {
  const history = useHistory();
  const pathname = history.location.pathname;
  const { tag }: IParams = useParams();
  return (
    <>
      <div className="CardListItemBanGhi">
        {props.data &&
          props.data.map((item, index) => {
            return (
              <div className="CardListItemBanGhi_Item" key={index}>
                <div className="CardListItemBanGhi_Item-Image">
                  <Image
                    preview={false}
                    width={342}
                    src={require("../../../assets/image/image4.png")}
                  />
                  <div className="CardListItemBanGhi_Item-Image_Play">
                    <img
                      src={require("../../../assets/image/action-icon/play.png")}
                      alt="Play"
                    />
                  </div>
                </div>
                <div className="CardListItemBanGhi_Item-Decription">
                  <div className="CardListItemBanGhi_Item-Decription_Name">
                    <h4>{item.tenBG}</h4>
                  </div>
                  <div className="CardListItemBanGhi_Item-Decription_Info">
                    <Form>
                      <Form.Item label="Ca sĩ: ">
                        <span>{item.casi}</span>
                      </Form.Item>
                      <Form.Item label="Sáng tác:  ">
                        <span>{item.tacgia}</span>
                      </Form.Item>

                      <Form.Item label="Số hợp đồng: ">
                        <span>{item.soHD}</span>
                      </Form.Item>
                    </Form>
                  </div>
                  <div className="CardListItemBanGhi_Item-Decription_Type">
                    <div className="CardListItemBanGhi_Item-Decription_TypeItem">
                      <label htmlFor="theloai">Thể loại</label>
                      <p>{item.theLoai}</p>
                    </div>
                    <div className="CardListItemBanGhi_Item-Decription_TypeItem">
                      <label htmlFor="dinhdang">Định dạng</label>
                      <p>{item.dinhDang}</p>
                    </div>
                    <div className="CardListItemBanGhi_Item-Decription_TypeItem">
                      <label htmlFor="thoiLuong">Thời lượng</label>
                      <p>{item.thoiLuong}</p>
                    </div>

                    <div className="CardListItemBanGhi_Item-Decription_BtnEdit">
                      {tag === "pheduyet" ? (
                        <Checkbox />
                      ) : (
                        <Link to={`${pathname}/capnhatbg/${item.key}_${item.tenBG}`}>
                          <img
                            src={require("../../../assets/image/action-icon/edit_icon.png")}
                            alt="Edit"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="PavinationPageKhoBG">
        <Pagination defaultCurrent={1} total={props.data.length} />
      </div>
    </>
  );
};

export default CardListItemBanGhi;
