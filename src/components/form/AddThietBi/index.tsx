import { Avatar, Button, DatePicker, Form, Input, Radio } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import CtrSelect from "../../control/select";
import "./styles.scss";
import dayjs from "dayjs";

const dateFormat = "DD/MM/YYYY";
const FrmAddThietBi: React.FC<{ typeform?: string }> = (props) => {
  const datarole = [
    { label: "QA", value: "QA" },
    // { label: "Pop", value: "pop" },
    // { label: "EDM", value: "EDM" },
    // { label: "Ballad", value: "Ballad" },
  ];

  return (
    <div className="AddThietBi">
      <div className="Layout-page">
        <div className="AddThietBi_Left">
          <Form>
            <Form.Item label="Tên thiết bị:">
              <Input name="tenTB" />
            </Form.Item>

            <Form.Item label="SKU/ID:">
              <Input name="SKU/ID:" />
            </Form.Item>
            <Form.Item label="Địa chỉ Mac:">
              <Input name="MAC" />
            </Form.Item>

            <Form.Item label="Thời hạn bảo hành:">
              <DatePicker
                defaultValue={dayjs("20/02/1989", dateFormat)}
                format={dateFormat}
              />
            </Form.Item>

            <Form.Item label="Label:">
              <CtrSelect data={datarole} w={365} />
            </Form.Item>
            <Form.Item label="Thông tin:">
              <div className="Group_ThongTin">
                <CtrSelect data={datarole} w={365} />
                <div className="Group_ThongTin_ItemAdd">
                  <img
                    src={require("../../../assets/image/tag/u_plus-circle.png")}
                  />
                  <label>Thêm thông tin</label>
                </div>
              </div>
            </Form.Item>
            <Form.Item label="Ghi chú">
              <Input.TextArea name="ghiChu" />
            </Form.Item>
          </Form>
        </div>
        <div className="AddThietBi_Right">
          <Form>
            <Form.Item label="Tên đăng nhập">
              <Input name="username" />
            </Form.Item>

            <Form.Item label="Mật khẩu:">
              <Input name="password" type="password" />
            </Form.Item>
            <Form.Item label="Nhập lại mật khẩu">
              <Input name="password" type="password" />
            </Form.Item>
            <Form.Item label="Vị trí:">
              <Input name="vitri" />
            </Form.Item>
          </Form>
        </div>
      </div>

      {props.typeform === "chitiet" ? (
        ""
      ) : (
        <div className="btn-group">
          <Link to={"/quanly/donviuyquyen"}>
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
      )}
    </div>
  );
};

export default FrmAddThietBi;
