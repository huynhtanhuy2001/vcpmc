/* eslint-disable jsx-a11y/alt-text */
import {
  Button,
  DatePicker,
  Form,
  Input,
  Radio,
  RadioChangeEvent,
  Select,
} from "antd";
import React, { useState } from "react";
import ModalActionHuyHD from "../../modal/modalActionhuy";
import ModalGiaHanHD from "../../modal/modalGiaHanHD";
import "./styles.scss";
import dayjs from "dayjs";
import UploadFile from "../../control/uploadFile";
import { Link } from "react-router-dom";
import ModalAddHDSuccess from "../../modal/modalThemHDSuccess";

const dateFormat = "DD/MM/YYYY";

const FormCreateHDKT = () => {
  const [checkPNUQ, setCheckPNUQ] = useState(0);
  const [openModalAddSuccess, setOpenAddMoalSuccess] = useState(false);

  const onChangePNUQ = (e: RadioChangeEvent) => {
    setCheckPNUQ(e.target.value);
  };

  const handleOpenModalSuccess = () => {
    setOpenAddMoalSuccess(true);
  };
  const handleCancelModalSuccess = () => {
    setOpenAddMoalSuccess(false);
  };

  return (
    <div className="CreateHDKT">
      <div className="CreateHDKT_FormTob">
        <div className="CreateHDKT_Form_InfoHD">
          <Form className="Form_InfoHD">
            <Form.Item label="Số hợp đồng:">
              <Input type="text" name="soHD" />
            </Form.Item>
            <Form.Item label="Tên hợp đồng:">
              <Input type="text" name="nameHD" />
            </Form.Item>
            <Form.Item label="Ngày hiệu lực:">
              <DatePicker
                defaultValue={dayjs("20/02/1989", dateFormat)}
                format={dateFormat}
              />
            </Form.Item>
            <Form.Item label="Ngày hết hạn:">
              <DatePicker
                defaultValue={dayjs("20/02/1989", dateFormat)}
                format={dateFormat}
              />
            </Form.Item>
          </Form>
        </div>
        {/* File đính kèm */}
        <div className="CreateHDKT_Form-Files">
          <div className="horizontal_form">
            {/* upload */}
            <div className="FileItem">
              <label htmlFor="file_banGhi">Đính kèm bản ghi:</label>
              <UploadFile />
            </div>

            {/* item */}

            {/* <div className="FileItem">
         <div className="FileItem-icon">
           <img src={require("../../../assets/image/file/doc.png")} />
         </div>
         <div className="FileItem-name">
           <span>hetthuongcannho.doc</span>
         </div>
       </div> */}
          </div>
        </div>
        {/* Mức nhuận bút */}
        <div className="CreateHDKT_Form-LoaiHD">
          <Form className="Form-LoaiHD" layout="vertical">
            <Form.Item label="Loại hợp đồng:">
            <Radio.Group
                // onChange={onChange}
                // value={0}
                
                >
              <div className="CreateHDKT_Form-LoaiHD_Group">
                
                  <div className="CreateHDKT_Form-LoaiHD_ItemSelect">
                    <div className="CreateHDKT_Form-LoaiHD_ItemSelect-RadioBtn">
                      <Radio value={0}>Trọn gói</Radio>
                    </div>
                    <div className="CreateHDKT_Form-LoaiHD_ItemSelect-Descript">
                      <div className="CreateHDKT_Form-LoaiHD_ItemSelect-Descript_Item">
                        <p>Giá trị hợp đồng (VNĐ)</p>
                        <Input name="GTriHD" />
                      </div>
                      <div className="CreateHDKT_Form-LoaiHD_ItemSelect-Descript_Item">
                        <p>Giá trị phân phối (VNĐ/ngày)</p>
                        <Input name="GTriPP" />
                      </div>
                    </div>
                  </div>
                  <div className="CreateHDKT_Form-LoaiHD_ItemSelect">
                    <div className="CreateHDKT_Form-LoaiHD_ItemSelect-RadioBtn">
                      <Radio value={1}>Lượt phát</Radio>
                    </div>
                    <div className="CreateHDKT_Form-LoaiHD_ItemSelect-Descript">
                      <div className="CreateHDKT_Form-LoaiHD_ItemSelect-Descript_Item">
                        <p>Giá trị lượt phát (VNĐ)/lượt</p>
                        <Input name="GTriLP" />
                      </div>
                    </div>
                  </div>
               
              </div>
              </Radio.Group>
            </Form.Item>
          </Form>
        </div>
      </div>

      <div className="CreateHDKT_FormBottom">
        <div className="CreateHDKT_Form-CaNhan">
          <Form className="Form-CaNhan">
            <Form.Item label="Tên đơn vị sử dụng:">
              <Input type="text" name="donviSD" />
            </Form.Item>
            <Form.Item label="Người đại diện:">
              <Input type="text" name="nguoiDaidien" />
            </Form.Item>

            <Form.Item label="Ngày sinh:">
              <DatePicker
                defaultValue={dayjs("20/02/1989", dateFormat)}
                format={dateFormat}
              />
            </Form.Item>

            <Form.Item label="Quốc tịch:">
              <Select
                defaultValue="vietnam"
                style={{ width: 325 }}
                // onChange={handleChange}
                options={[{ value: "vietnam", label: "Việt Nam" }]}
              />
            </Form.Item>
            <Form.Item label="Số điện thoại:">
              <Input type="text" name="sdt" />
            </Form.Item>
            <Form.Item label="Email:">
              <Input type="text" name="email" />
            </Form.Item>
          </Form>
        </div>
        <div className="CreateHDKT_Form-CaNhan">
          <Form className="Form-CaNhan">
            <Form.Item label="Giới tính:">
              <Radio.Group
              // onChange={onChange}
              // value={0}
              >
                <Radio value={0}>Nam</Radio>
                <Radio value={1}>Nữ</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Số CMND/ CCCD:">
              <Input type="text" name="soCCCD" />
            </Form.Item>
            <Form.Item label="Ngày cấp:">
              <DatePicker
                defaultValue={dayjs("20/02/1989", dateFormat)}
                format={dateFormat}
              />
            </Form.Item>
            <Form.Item label="Nơi cấp: ">
              <Input type="text" name="noicap" />
            </Form.Item>
            <Form.Item label="Mã số thuế:">
              <Input type="text" name="msThue" />
            </Form.Item>
            <Form.Item label="Nơi cư trú:">
              <Input.TextArea name="diaChi" rows={4} />
            </Form.Item>
          </Form>
        </div>
        <div className="CreateHDKT_Form-CaNhan">
          <Form className="Form-CaNhan">
            <Form.Item label="Tài khoản đăng nhập:">
              <Input type="text" name="nameTK" />
            </Form.Item>
            <Form.Item label="Mật khẩu: ">
              <Input type="password" name="password" />
            </Form.Item>
            <Form.Item label="Số tài khoản:">
              <Input type="text" name="stk" />
            </Form.Item>
            <Form.Item label="Ngân hàng:">
              <Input type="text" name="bank" />
            </Form.Item>
          </Form>
        </div>
      </div>

      <div className="btn-group">
        <Link to={"/quanly/ql-hopdong"}>
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
          onClick={handleOpenModalSuccess}
        >
          Tạo
        </Button>
      </div>

      <ModalAddHDSuccess
        isOpenModal={openModalAddSuccess}
        isCancel={handleCancelModalSuccess}
      />
    </div>
  );
};

export default FormCreateHDKT;
