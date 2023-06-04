import { Checkbox, Form, Image, Pagination } from "antd";
import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { DataTypePlayList, IParams } from "../../../types";
// import "node_modules/video-react/dist/video-react.css";
import "./styles.scss";

const CardListItemPlaylist: React.FC<{ data: DataTypePlayList[] }> = (
  props
) => {
  const history = useHistory();
  const pathname = history.location.pathname;
  const { tag }: IParams = useParams();

  return (
    <>
      <div className="CardListItemPlaylist">
        {props.data &&
          props.data.map((item, index) => {
            return (
              <div className="CardListItemPlaylist_Item" key={index}>
                <div className="CardListItemPlaylist_Item-Image">
                  <Image
                    preview={false}
                    width={342}
                    src={require("../../../assets/image/Frame476.png")}
                  />
                </div>
                <div className="CardListItemPlaylist_Item-Decription">
                  <div className="CardListItemPlaylist_Item-Decription_Name">
                    <h4>{item.title}</h4>
                  </div>
                  <div className="CardListItemPlaylist_Item-Decription_ListItemCD">
                    <div className="CardListItemPlaylist_Item-Decription_ListItemCD-item">
                      <p>Chủ đề ví dụ</p>
                    </div>

                    {item.chuDe.map((cd) => {
                      return (
                        <div className="CardListItemPlaylist_Item-Decription_ListItemCD-item">
                          <p>{cd}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="CardListItemPlaylist_Item-Decription_Info">
                    <Form>
                      <Form.Item label="Người tạo: ">
                        <span>Admin</span>
                      </Form.Item>
                      <Form.Item label="Ngày tạo:  ">
                        <span>{item.ngayTao}</span>
                      </Form.Item>
                    </Form>
                  </div>
                  <div className="CardListItemPlaylist_Item-Decription_Type">
                    <div className="CardListItemPlaylist_Item-Decription_TypeItem">
                      <label htmlFor="theloai">Số bản ghi</label>
                      <p>{item.soBG}</p>
                    </div>

                    <div className="CardListItemPlaylist_Item-Decription_TypeItem">
                      <label htmlFor="theloai">{item.thoiLuong}</label>
                      <p>03:00</p>
                    </div>

                    <div className="CardListItemPlaylist_Item-Decription_BtnEdit">
                      {tag === "pheduyet" ? (
                        <Checkbox />
                      ) : (
                        // <Link to={`${pathname}/capnhatbg/${item.key}_`}>
                        <img
                          src={require("../../../assets/image/action-icon/Infoicon.png")}
                          alt="Edit"
                        />
                        // </Link>
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

export default CardListItemPlaylist;
