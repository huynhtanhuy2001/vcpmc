import React, { useState } from "react";
import { Button, Modal, Form, Input, message } from "antd";
import "./styles.scss";

const ModalLyDoHuyHD: React.FC<{
  isOpenModal: boolean;
  isCancel: Function;
  Value : {soHD: string; lydoHuy: string};

}> = (props) => {
  const {TextArea } = Input
  const handleCancel = () => {
    props.isCancel(false);
  };


  return (
    <>
      
      <Modal open={props.isOpenModal}
       onCancel={handleCancel} 
       footer={false} className ="ModalLyDoHuyHD">
        <div className="Modal_Title">
          <h3>{`Lý do hủy hợp đồng uỷ quyền ${props.Value.soHD}`}</h3>
        </div>
        <Form layout="vertical" className="Form_ChangePassword">
          <Form.Item
            label=""
            name="ly_do"
            initialValue={props.Value.lydoHuy}
          >
          <TextArea  
          placeholder="Cho chúng tôi biết lý do bạn muốn huỷ hợp đồng uỷ quyền này..." 
          rows={8}
         
          />
          </Form.Item>
        
          <Form.Item>
            <div className="btn-group">
             
              <Button
                type="primary"
                htmlType="submit"
                className="btn-submit btn-default"
                onClick={handleCancel}
              >
                Đóng
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalLyDoHuyHD;
