import React, { useState } from "react";
import { Button, Modal, Form, Input, message } from "antd";
import CtrSelect from "../../control/select";
import UploadFile from "../../control/uploadFile";

import "./styles.scss";

const ModalAddHDSuccess: React.FC<{
  isOpenModal: boolean;
  isCancel: Function;
}> = (props) => {
  const handleCancel = () => {
    props.isCancel(false);
  };

 

  return (
    <>
      <Modal
        open={props.isOpenModal}
        onCancel={handleCancel}
        footer={false}
        className="ModalThemHDSuccess"
      >
        <div className="Modal_Title">
          <img src={require("../../../assets/image/action-icon/u_check.png")} />
          <h3>Hợp đồng đã được tạo thành công</h3>
        </div>

        <Form layout="vertical" className="Frm_ThemHDSuccess">
          <Form.Item
            label="Có 2 cách để tạo bản ghi:"
            name="nameBG"
            // initialValue={"Nguyễn"}
          >
            <div className="Frm_ThemHDSuccess-Item">
              <div className="Frm_ThemHDSuccess-Item_Title">
                <span>Cách 1: </span>Upload bản ghi trực tiếp
              </div>
              <div className="Frm_ThemHDSuccess-Item_actions">
                <div className="Frm_ThemHDSuccess-Item_actions-Subtitle">
                  <p>Bạn có thể thực hiện thêm bản ghi ngay trên website</p>
                </div>
                <div className="Frm_ThemHDSuccess-Item_actions-btn">
                  <Button
                     type="primary"
                     htmlType="submit"
                     className="btn-submit btn-default btn-addHD"
                  >Thêm bản ghi trực tiếp </Button>
                </div>
              </div>
            </div>
            <div className="Frm_ThemHDSuccess-Item">
              <div className="Frm_ThemHDSuccess-Item_Title">
                <span>Cách 2: </span> Upload bản ghi qua phần mềm
              </div>
              <div className="Frm_ThemHDSuccess-Item_actions">
                <div className="Frm_ThemHDSuccess-Item_actions-Subtitle">
                  <p>Bạn có thể thêm bản ghi bằng tool</p>
                </div>
                <div className="Frm_ThemHDSuccess-Item_actions-btn">
                  <Button
                   type="primary"
                   danger
                   ghost
                   className="btn-default btn-addHD"
                  >Thêm bản ghi bằng tool </Button>
                </div>
              </div>
            </div>
            <div className="Warning">
              <p>Lưu ý: Hợp đồng chỉ có hiệu lực khi thêm bản ghi thành công.</p>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalAddHDSuccess;
