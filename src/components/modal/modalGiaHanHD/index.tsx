/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  message,
  DatePicker,
  Checkbox,
} from "antd";
import dayjs from "dayjs";
import UploadFile from "../../control/uploadFile";
import "./styles.scss";

const dateFormat = "DD/MM/YYYY";

const ModalGiaHanHD: React.FC<{ isOpenModal: boolean; isCancel: Function }> = (
  props
) => {
  const handleCancel = () => {
    props.isCancel(false);
  };

  return (
    <>
      <Modal
        open={props.isOpenModal}
        onCancel={handleCancel}
        footer={false}
        className="ModalGiaHanHD"
      >
        <div className="Modal_Title">
          <h3> Gia hạn uỷ quyền tác phẩm</h3>
        </div>

        <div className="Modal_GHHD-Form">
          <Form layout="vertical" className="Form_Left">
            <Form.Item label="Thời gian gia hạn" name="time-giahan">
              <div className="Form_Left-Item">
                <div className="Form_Left-Item_Title">
                  Từ ngày:{" "}
                  <span className="Form_Left-Item_value">02/08/2021</span>
                </div>
              </div>
              <div className="Form_Left-Item">
                <div className="Form_Left-Item_Title">Đến ngày:</div>
                <div className="Form_Left-Item_select">
                  <DatePicker
                    defaultValue={dayjs("20/02/1989", dateFormat)}
                    format={dateFormat}
                  />
                </div>
              </div>
              <div className="Form_Left-Item">
                <div className="Form_Left-Item_Sub">
                  Lưu ý: Thời gian bắt đầu gia hạn hợp đồng mới được tính sau
                  ngày hết hạn hợp đồng cũ một ngày.
                </div>
              </div>
            </Form.Item>
            <Form.Item label="" name="time-giahan">
              <div className="ThongTinHD_Form-Files">
                <Form className="Form-Files">
                  <Form.Item label="Đính kèm tệp:">
                    <div className="FileItem-Group">
                      {/* UpLoad */}
                      <div className="FileItem">
                        <UploadFile />
                      </div>

                      {/* item */}
                      <div className="FileItem">
                        <div className="FileItem-icon">
                          <img
                            src={require("../../../assets/image/file/doc.png")}
                          />
                        </div>
                        <div className="FileItem-name">
                          <span>hetthuongcannho.doc</span>
                        </div>
                      </div>
                      {/* item */}
                      <div className="FileItem">
                        <div className="FileItem-icon">
                          <img
                            src={require("../../../assets/image/file/doc.png")}
                          />
                        </div>
                        <div className="FileItem-name">
                          <span>hetthuongcannho.doc</span>
                        </div>
                      </div>
                    </div>
                  </Form.Item>
                </Form>
              </div>
            </Form.Item>
          </Form>

          <Form className="Form_Right">
            <div className="ThongTinHD_Form-NhuanBut">
              <Form className="Form-NhuanBut">
                <div className="Form_Title">
                  <div className="Form_Title-text">
                    <p>Mức nhuận bút</p>
                  </div>
                </div>
                <div className="Item_FormSelect">
                  <Checkbox>
                    <Form.Item label="Quyền tác giả:">
                      <div className="flex_form">
                        <Input placeholder="0" />
                        <span>%</span>
                      </div>
                    </Form.Item>
                  </Checkbox>
                </div>
                <div className="Item_FormSelect">
                  <Checkbox>
                    <Form.Item label="Quyền liên quan:"></Form.Item>
                  </Checkbox>
                </div>

                <div className="FormQLienQuan">
                  <div className="Item_FormSelect ml-2">
                    <Checkbox>
                      <div className="FormQLienQuan_Item ">
                        <div className="FormQLienQuan_Item-Title">
                          <p>Quyền của người biểu diễn:</p>
                        </div>
                        <div className="FormQLienQuan_Item-input">
                          <div className="flex_form">
                            <Input defaultValue={"50"} placeholder="0" />
                            <span>%</span>
                          </div>
                        </div>
                      </div>
                    </Checkbox>
                  </div>

                  <div className="Item_FormSelect ml-2">
                    <Checkbox>
                      <div className="FormQLienQuan_Item">
                        <div className="FormQLienQuan_Item-Title">
                          <p>Quyền của nhà sản xuất: (Bản ghi/video)</p>
                        </div>
                        <div className="FormQLienQuan_Item-input">
                          <div className="flex_form">
                            <Input defaultValue={"50"} placeholder="0" />
                            <span>%</span>
                          </div>
                        </div>
                      </div>
                    </Checkbox>
                  </div>
                </div>
              </Form>
            </div>
          </Form>
        </div>
        <div className="btn-group">
          <Button
            type="primary"
            danger
            ghost
            className="btn-default"
            onClick={handleCancel}
          >
            Hủy
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            className="btn-submit btn-default"
          >
            Lưu
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalGiaHanHD;
