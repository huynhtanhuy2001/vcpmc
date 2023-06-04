import React, { useState } from "react";
import { Button, Modal, Form, Input, message } from "antd";
import "./styles.scss";

const ModalActionHuy: React.FC<{
  title? :string;
  holder?: string;
  txtBtnCancel? : string;
  txtBtnSubmit? : string;
  isOpenModal: boolean;
  isCancel: Function;

}> = (props) => {
  const {TextArea } = Input
  const handleCancel = () => {
    props.isCancel(false);
  };

  const handelChangePassword = () => {
    handleCancel();
    
  };

  return (
    <>
      
      <Modal open={props.isOpenModal} onCancel={handleCancel} footer={false} className ="ModalHuyHDActions">
        <div className="Modal_Title">
          <h3>{props.title}</h3>
        </div>
        <Form layout="vertical" className="Form_ChangePassword">
          <Form.Item
            label=""
            name="ly_do"
       
          >
          <TextArea  
          placeholder={props.holder}
          rows={8}
         
          />
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
               {props.txtBtnCancel}
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                className="btn-submit btn-default"
                // onClick={handelChangePassword}
              >
                {props.txtBtnSubmit}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalActionHuy;
