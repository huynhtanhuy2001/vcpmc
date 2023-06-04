import React, { useState } from "react";
import { Button, Modal, Form, Input, message } from "antd";
import "./styles.scss";

const ModalConfirmDelete: React.FC<{
  title? :string;
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
      
      <Modal open={props.isOpenModal} onCancel={handleCancel} footer={false} className ="ModalConfirmDelete">
        <div className="Modal_Title">
          <h3>{props.title}</h3>
        </div>
        <Form layout="vertical" className="Form_ChangePassword">
          <Form.Item>
          <p className="Text_Descript">Bạn có chắc chắn muốn xoá các thiết bị này? Hành động này không thể hoàn tác.</p>
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
               Xoá
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalConfirmDelete;
