/* eslint-disable jsx-a11y/alt-text */
import { Button, Form, Input, Select, Switch, Image } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import UploadImage from "../../control/uploadImage";

import "./styles.scss";

const dateFormat = "DD/MM/YYYY";

const FormCreatePlayList: React.FC<{ handle?: string }> = (props) => {
  return (
    <div className="FormCreatePlayList">
      <div className="FormCreatePlayList_Form">
        <Form layout="vertical">
          <Form.Item label={props.handle === "chitiet" ? "" : "Ảnh bìa:"}>
            {props.handle === "chitiet" ? (
              <Image
                width={274}
                height={274}
                src={require("../../../assets/image/Frame485.png")}
              />
            ) : (
              <UploadImage />
            )}
          </Form.Item>
          <Form.Item label={props.handle === "chitiet" ? "" : "Tiêu đề :"}>
            <div className="FormCreatePlayList_Form-lableTD">
              <div className="FormCreatePlayList_Form-lableTD_Input">
                {props.handle === "chitiet" ? (
                  <h3>Top ca khúc 2021</h3>
                ) : (
                  <Input type="text" name="title" />
                )}
              </div>

              {props.handle === "chitiet" ? (
                <div className="FormCreatePlayList_Form-lableTD_Des">
                  <div className="FormCreatePlayList_Form-lableTD_Des-item">
                    <label htmlFor="Tongsl">Người tạo:</label>
                    <span>Super Admin</span>
                  </div>
                  <div className="FormCreatePlayList_Form-lableTD_Des-item">
                    <label htmlFor="Tongsl">Tổng số</label>
                    <span>8 bản ghi</span>
                  </div>
                  <div className="FormCreatePlayList_Form-lableTD_Des-item">
                    <label htmlFor="TongTl">Tổng thời lượng:</label>
                    <span>01:31:16</span>
                  </div>
                </div>
              ) : (
                <div className="FormCreatePlayList_Form-lableTD_Des">
                  <div className="FormCreatePlayList_Form-lableTD_Des-item">
                    <label htmlFor="Tongsl">Tổng số</label>
                    <span>0 bản ghi</span>
                  </div>
                  <div className="FormCreatePlayList_Form-lableTD_Des-item">
                    <label htmlFor="TongTl">Tổng thời lượng:</label>
                    <span>--:--:--</span>
                  </div>
                </div>
              )}
            </div>
          </Form.Item>
          <Form.Item
            label={props.handle === "chitiet" ? "" : "Mô tả :"}
            className="Border_bottom"
          >
            <Input.TextArea
              defaultValue={
                props.handle === "chitiet"
                  ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua."
                  : ""
              }
              disabled={props.handle === "chitiet" ? true : false}
            />
          </Form.Item>
          {props.handle === "chitiet" ? (
            <>
            <div className="Chitiet-ChuDe Border_bottom">
              <div className="Chitiet-ChuDe_item">
                <img
                  src={require("../../../assets/image/status-icon/Eblue.png")}
                />
                <p>Chủ đề 2</p>
              </div>
              <div className="Chitiet-ChuDe_item">
                <img
                  src={require("../../../assets/image/status-icon/Eblue.png")}
                />
                <p>Chủ đề 2</p>
              </div>
              <div className="Chitiet-ChuDe_item">
                <img
                  src={require("../../../assets/image/status-icon/Eblue.png")}
                />
                <p>Chủ đề 2</p>
              </div>
            </div>
            <div className="FormPulic">
              <div className="FormPulic_Item">
                <img src={require('../../../assets/image/tag/publicicon.png')}/>
                <p>Hiển thị ở chế độ công khai</p>
              </div>
              <div className="FormPulic_Item Color-primary">
                <img src={require('../../../assets/image/tag/Buttons.png')}/>
                <p>Phát ngẫu nhiên</p>
              </div>
              <div className="FormPulic_Item Color-white_opacity">
                <img src={require('../../../assets/image/tag/respeat.png')}/>
                <p>Lặp lại</p>
              </div>
            </div>
            </>
          ) : (
            <Form.Item label="Chủ đề">
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Nhập chủ đề"
                defaultValue={["Pop", "chill"]}
                // onChange={handleChange}
                // options={options}
              />
              <div className="Form_Swicth">
                <Switch defaultChecked={true} />
                <label htmlFor="title">Chế độ công khai</label>
              </div>
            </Form.Item>
          )}
        </Form>
      </div>
    </div>
  );
};

export default FormCreatePlayList;
