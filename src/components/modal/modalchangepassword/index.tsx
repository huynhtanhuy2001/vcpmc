import React, { useState } from "react";
import { Button, Modal, Form, Input, message } from "antd";
import "./styles.scss";
import { auth } from "../../../firebase/cofig";

const ModalChangePassword: React.FC<{
  isOpenModal: boolean;
  isCancel: Function;
}> = (props) => {
  const handleCancel = () => {
    props.isCancel(false);
  };
  const [messageApi, contextHolder] = message.useMessage();
  const successChangepassword = () => {
    messageApi.open({
      type: "success",
      content: "Đổi mật khẩu thành công!",
      className: "message-changepw_success",
    });
  };

  const [oldpass, setOldpass] = useState("12345678");
  const [newpass, setNewpass] = useState("123456789");
  const [confirmpass, setConfirmpass] = useState("123456789");
  const [statusChangePw, setStatus] = useState(0);

  const handelChangePassword = () => {
  
    if (oldpass === newpass) {
      setStatus(1);
    } else if (newpass !== confirmpass) {
      setStatus(2);
    } else {
      
      // const newPassword = getASecureRandomPassword();

      // updatePassword(user, newPassword)
      //   .then(() => {
      //     // Update successful.
      //   })
      //   .catch((error) => {
      //     // An error ocurred
      //     // ...
      //   });
      // handleCancel();
      // successChangepassword();
    }
  };

  return (
    <>
      {contextHolder}
      <Modal open={props.isOpenModal} onCancel={handleCancel} footer={false}>
        <div className="ModalChangePW_Title">
          <h3> Thay đổi mật khẩu</h3>
        </div>
        <Form layout="vertical" className="Form_ChangePassword">
          <Form.Item
            label="Mật khẩu hiện tại:"
            name="Password"
            initialValue={oldpass}
          >
            <Input
              type="password"
              name="Password"
              onChange={(e) => setOldpass(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Mật khẩu mới:"
            name="Username"
            initialValue={newpass}
          >
            <Input
              type="password"
              name="Username"
              onChange={(e) => setNewpass(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Nhập lại mật khẩu mới:"
            name="role"
            initialValue={confirmpass}
          >
            <Input
              type="password"
              name="role"
              itemScope
              onChange={(e) => setConfirmpass(e.target.value)}
            />
          </Form.Item>
          {statusChangePw === 1 ? (
            <Form.Item className="notify_login">
              <div className="login__Status">
                <span>Vui lòng nhập mật khẩu mới không trùng mật khẩu cũ!</span>{" "}
                <br />
              </div>
            </Form.Item>
          ) : statusChangePw === 2 ? (
            <Form.Item className="notify_login">
              <div className="login__Status">
                <span>Nhập lại mật khẩu không trùng</span> <br />
              </div>
            </Form.Item>
          ) : (
            ""
          )}

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
                onClick={handelChangePassword}
              >
                Lưu
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalChangePassword;
