import React, { useState } from "react";
import { Button, Modal, Form, Input, message } from "antd";
import "./styles.scss";

const ModalConfirmDoanhThu: React.FC<{
  title?: string;
  holder?: string;
  // txtBtnCancel? : string;
  // txtBtnSubmit? : string;
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
        className="ModalConfirmdDoanhThu"
      >
        <div className="Modal_Title">
          <h3>{props.title}</h3>
        </div>
        <Form layout="vertical" className="Form_ChangePassword">
          <Form.Item>
            <p className="Text_Descript">
              Doanh thu sẽ được chốt từ ngày 01/05/2021 đến ngày 14/05/2021 trên
              tất cả các hợp đồng sử dụng.
            </p>
            <p className="Text_Descript">
              Nhấn &#60; Tiếp tục &#62; để chốt doanh thu.{" "}
            </p>
            <p className="Text_Descript">
              Nhấn &#60; Hủy &#62; để hủy bỏ và không chốt doanh thu
            </p>
          </Form.Item>

          <Form.Item>
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
                // onClick={handelChangePassword}
              >
                Tiếp tục
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalConfirmDoanhThu;
