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
import ActionsPages from "../../actionpages/ActionPages";
import ModalActionHuy from "../../modal/modalActionhuy";

const dateFormat = "DD/MM/YYYY";

const ChiTietHDKT = () => {
  const [editInfo, seteditInfo] = useState(true);
  const [openActionHuyHD, setActionHuyHD] = useState(false);

  const handleEditOpen=()=>{
    seteditInfo(false)
  }
  const handleCancelEdit =()=>{
    seteditInfo(true)
  }
  const handelModalHuyOpen = () => {
    setActionHuyHD(true);
  };
  const handelCancelModal = () => {
    setActionHuyHD(false);
  };
 
  const actionsChiTiet = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/fi_edit.png")}
          width={32}
          alt="Chỉnh sửa hợp đồng"
        />
      ),
      title: "Chỉnh sửa hợp đồng ",
      onClickItem: handleEditOpen,
    },
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/fi_x.png")}
          width={32}
          alt="Huy"
        />
      ),
      title: "Hủy hợp đồng ",
      onClickItem: handelModalHuyOpen,
    },
  ];

  return (
    <div className="ChiTietHDKT">
      <div className="ChiTietHDKT_FormTob">
        <div className="ChiTietHDKT_Form_InfoHD">
          <Form className="Form_InfoHD">
            <Form.Item label="Tên hợp đồng:">
              <Input
                type="text"
                name="nameHD"
                defaultValue={"Hợp đồng kinh doanh"}
                disabled={editInfo}
              />
            </Form.Item>
            <Form.Item label="Số hợp đồng:">
              <Input
                type="text"
                name="soHD"
                defaultValue={123}
                disabled={editInfo}
              />
            </Form.Item>

            <Form.Item label="Ngày hiệu lực:">
              <DatePicker
                defaultValue={dayjs("20/02/1989", dateFormat)}
                format={dateFormat}
                disabled={editInfo}
              />
            </Form.Item>
            <Form.Item label="Ngày hết hạn:">
              <DatePicker
                defaultValue={dayjs("20/02/1989", dateFormat)}
                format={dateFormat}
                disabled={editInfo}
              />
            </Form.Item>
          </Form>
        </div>
        {/* File đính kèm */}
        <div className="ChiTietHDKT_Form-Files">
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
        {/* Loại Hợp đồng */}

        {editInfo ? (
          <div className="ChiTietHDKT_Form-LoaiHD">
            <Form className="Form-LoaiHD">
              <Form.Item label="Loại hợp đồng:">
                <span>Trọn gói</span>
              </Form.Item>
              <Form.Item label="Giá trị hợp đồng (VNĐ):">
                <span>365.000.000</span>
              </Form.Item>
              <Form.Item label="Giá trị phân phối (VNĐ/ngày):">
                <span>1.000.000</span>
              </Form.Item>
              <Form.Item label="Tình trạng:">
                <div className="Item-HLuc">
                  <img
                    src={require("../../../assets/image/status-icon/Egreen.png")}
                  />
                  <p>Mới</p>
                </div>
                {/* {hieuLuc === 1 ? (
            <div className="Item-HLuc">
              <img
                src={require("../../../assets/image/status-icon/Egreen.png")}
              />
              <p>Mới</p>
            </div>
          ) : hieuLuc === 2 ? (
            <div className="Item-HLuc">
              <img
                src={require("../../../assets/image/status-icon/Eblue.png")}
              />
              <p>Còn thời hạn</p>
            </div>
          ) : hieuLuc === 3 ? (
            <div className="Item-HLuc">
              <img
                src={require("../../../assets/image/status-icon/ENot.png")}
              />
              <p>Đã hết hạn</p>
            </div>
          ) : (
            <div className="Item-HLuc">
              <img
                src={require("../../../assets/image/status-icon/Ered.png")}
              />
              <p>Đã hủy</p>
            </div>
          )} */}
              </Form.Item>
            </Form>
          </div>
        ) : (
          <div className="ChiTietHDKT_Form-LoaiHD">
            <Form className="Form-LoaiHD" layout="vertical">
              <Form.Item label="Loại hợp đồng:">
                <Radio.Group
                // onChange={onChange}
                // value={0}
                >
                  <div className="ChiTietHDKT_Form-LoaiHD_Group">
                    <div className="ChiTietHDKT_Form-LoaiHD_ItemSelect">
                      <div className="ChiTietHDKT_Form-LoaiHD_ItemSelect-RadioBtn">
                        <Radio value={0}>Trọn gói</Radio>
                      </div>
                      <div className="ChiTietHDKT_Form-LoaiHD_ItemSelect-Descript">
                        <div className="ChiTietHDKT_Form-LoaiHD_ItemSelect-Descript_Item">
                          <p>Giá trị hợp đồng (VNĐ)</p>
                          <Input name="GTriHD" />
                        </div>
                        <div className="ChiTietHDKT_Form-LoaiHD_ItemSelect-Descript_Item">
                          <p>Giá trị phân phối (VNĐ/ngày)</p>
                          <Input name="GTriPP" />
                        </div>
                      </div>
                    </div>
                    <div className="ChiTietHDKT_Form-LoaiHD_ItemSelect">
                      <div className="ChiTietHDKT_Form-LoaiHD_ItemSelect-RadioBtn">
                        <Radio value={1}>Lượt phát</Radio>
                      </div>
                      <div className="ChiTietHDKT_Form-LoaiHD_ItemSelect-Descript">
                        <div className="ChiTietHDKT_Form-LoaiHD_ItemSelect-Descript_Item">
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
        )}
      </div>

      <div className="ChiTietHDKT_FormBottom">
        <div className="ChiTietHDKT_Form-CaNhan">
          <Form className="Form-CaNhan">
            <Form.Item label="Tên đơn vị sử dụng:">
              <Input
                type="text"
                name="donviSD"
                disabled={editInfo}
                defaultValue={"Công ty TNHH MTV  Âu Lạc"}
              />
            </Form.Item>
            <Form.Item label="Người đại diện:">
              <Input type="text" name="nguoiDaidien" disabled={editInfo} />
            </Form.Item>
            <Form.Item label="Chức vụ:">
              <Input
                type="text"
                name="chucVu"
                disabled={editInfo}
                defaultValue={"Giám đốc"}
              />
            </Form.Item>

            <Form.Item label="Ngày sinh:">
              <DatePicker
                defaultValue={dayjs("20/02/1989", dateFormat)}
                format={dateFormat}
                disabled={editInfo}
              />
            </Form.Item>

            <Form.Item label="Quốc tịch:">
              <Select
                disabled={editInfo}
                defaultValue="vietnam"
                style={{ width: 325 }}
                // onChange={handleChange}
                options={[{ value: "vietnam", label: "Việt Nam" }]}
              />
            </Form.Item>
            <Form.Item label="Số điện thoại:">
              <Input
                type="text"
                name="sdt"
                disabled={editInfo}
                defaultValue={"123456789012"}
              />
            </Form.Item>
            <Form.Item label="Email:">
              <Input
                type="text"
                name="email"
                disabled={editInfo}
                defaultValue={"nguyenvana@gmail.com"}
              />
            </Form.Item>
          </Form>
        </div>
        <div className="ChiTietHDKT_Form-CaNhan">
          <Form className="Form-CaNhan">
            <Form.Item label="Giới tính:">
              {editInfo ? (
                <div className="ChiTietHDKT_Form-CaNhan_GT">
                  <span>Nam</span>
                  {/* <span>Nữ</span> */}
                </div>
              ) : (
                <Radio.Group
                // onChange={onChange}
                // value={0}
                >
                  <Radio value={0}>Nam</Radio>
                  <Radio value={1}>Nữ</Radio>
                </Radio.Group>
              )}
            </Form.Item>
            <Form.Item label="Số CMND/ CCCD:">
              <Input
                type="text"
                name="soCCCD"
                disabled={editInfo}
                defaultValue={"123456789012"}
              />
            </Form.Item>
            <Form.Item label="Ngày cấp:">
              <DatePicker
                defaultValue={dayjs("20/02/1989", dateFormat)}
                format={dateFormat}
                disabled={editInfo}
              />
            </Form.Item>
            <Form.Item label="Nơi cấp: ">
              <Input
                type="text"
                name="noicap"
                disabled={editInfo}
                defaultValue={"Tp.Hồ Chí Minh"}
              />
            </Form.Item>
            <Form.Item label="Mã số thuế:">
              <Input
                type="text"
                name="msThue"
                disabled={editInfo}
                defaultValue={"123456789012"}
              />
            </Form.Item>
            <Form.Item label="Nơi cư trú:">
              <Input.TextArea
                name="diaChi"
                rows={4}
                disabled={editInfo}
                defaultValue={
                  "69/53, Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh"
                }
              />
            </Form.Item>
          </Form>
        </div>
        <div className="ChiTietHDKT_Form-CaNhan">
          <Form className="Form-CaNhan">
            <Form.Item label="Tài khoản đăng nhập:">
              <Input
                type="text"
                name="nameTK"
                disabled={editInfo}
                defaultValue={"vuonganhtu123"}
              />
            </Form.Item>
            <Form.Item label="Mật khẩu: ">
              <Input
                type="password"
                name="password"
                disabled={editInfo}
                defaultValue={"1321461321"}
              />
            </Form.Item>
            <Form.Item label="Số tài khoản:">
              <Input
                type="text"
                name="stk"
                disabled={editInfo}
                defaultValue={"123456789012"}
              />
            </Form.Item>
            <Form.Item label="Ngân hàng:">
              <Input
                type="text"
                name="bank"
                disabled={editInfo}
                defaultValue={"ACB - Ngân hàng TMCP Á Châu"}
              />
            </Form.Item>
          </Form>
        </div>
      </div>

      {editInfo ? (
        ""
      ) : (
        <div className="btn-group">
            <Button
              type="primary"
              danger
              ghost
              className="btn-default"
              onClick={handleCancelEdit}
            >
              Hủy
            </Button>
      
          <Button
            type="primary"
            htmlType="submit"
            className="btn-submit btn-default"
            // onClick={handleOpenModalSuccess}
          >
            Tạo
          </Button>
        </div>
      )}

      <ModalActionHuy
        title={` Hủy hợp đồng uỷ quyền`}
        holder={`Cho chúng tôi biết lý do bạn muốn huỷ hợp đồng uỷ quyền này...`}
        txtBtnCancel={" Quay lại"}
        txtBtnSubmit={" Huỷ hợp đồng"}
        isCancel={handelCancelModal}
        isOpenModal={openActionHuyHD}
      />
      <ActionsPages dataRender={actionsChiTiet} />
    </div>
  );
};

export default ChiTietHDKT;
