import { Avatar, Button, DatePicker, Form, Input, Radio } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import CtrSelect from "../../control/select";
import dayjs from "dayjs";

import "./styles.scss";

const dateFormat = "DD/MM/YYYY";

const FrmHandelPQUser: React.FC<{ typeform?: string }> = (props) => {
  const datarole = [
    { label: "Super Admin", value: "Super Admin" },
    { label: "Group Admin", value: "Group Admin" },
    { label: "Sub - user", value: "Sub - user" },
    { label: "Content manager", value: "Content manager" },
    { label: "QC", value: "QC" },
  ];

  return (
    <div className="HandelPQUser">
      <div className="Layout-page">
        <div className="HandelPQUser_Left">
          <Form layout="vertical">
            <Form.Item label="Tên người dùng">
              <Input name="fullname" defaultValue={"Amy Ngọc"} />
            </Form.Item>

            <Form.Item label="Số điện thoại">
              <Input name="phone" />
            </Form.Item>
            <Form.Item label="Ngày hết hạn:">
              <DatePicker
                defaultValue={dayjs("20/02/1989", dateFormat)}
                format={dateFormat}
              />
            </Form.Item>
            <Form.Item label="Vai trò">
              <CtrSelect data={datarole} w={442} placeholder={"Group Admin"} />
            </Form.Item>
          </Form>
        </div>
        <div className="HandelPQUser_Right">
          <Form  layout="vertical">
            <Form.Item label="Email">
              <Input name="email" />
            </Form.Item>
            <Form.Item label="Tên đăng nhập">
              <Input name="username" />
            </Form.Item>

            <Form.Item label="Mật khẩu:">
              <Input name="password" type="password" />
            </Form.Item>

            {props.typeform === "create" ? (
              ""
            ) : (
              <Form.Item label="Trạng thái">
                <Radio.Group
                // onChange={onChangePNUQ}
                // value={checkPNUQ}
                >
                  <Radio value={0}>Đang hoạt động</Radio>
                  <Radio value={1}>Ngưng hoạt động</Radio>
                </Radio.Group>
              </Form.Item>
            )}
          </Form>
        </div>
      </div>

      <div className="btn-group">
        <Link to={"/setting/phanquyen-user"}>
          <Button
            type="primary"
            danger
            ghost
            className="btn-default"
            // onClick={handleCancel}
          >
            Hủy
          </Button>
        </Link>
        <Button
          type="primary"
          htmlType="submit"
          className="btn-submit btn-default"
          // onClick={handleOpenModalSuccess}
        >
          Lưu
        </Button>
      </div>
    </div>
  );
};

export default FrmHandelPQUser;
