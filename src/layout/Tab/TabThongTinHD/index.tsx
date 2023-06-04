/* eslint-disable jsx-a11y/alt-text */
import { Form } from "antd";

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ActionsPages from "../../../components/actionpages/ActionPages";
import ModalActionHuy from "../../../components/modal/modalActionhuy";
import ModalGiaHanHD from "../../../components/modal/modalGiaHanHD";

import { useAppSelector } from "../../../redux/hooks";
import { IParams } from "../../../types";
import "./styles.scss";

const TabThongTinHD = () => {
 
  const [openActionHuyHD, setActionHuyHD] = useState(false);
  const [openActionGHHD, setOpenModalGiaHan] = useState(false);

  const {dataHDUyQuyen} = useAppSelector(state => state.hopDong)
  console.log(dataHDUyQuyen)
  const { id }: IParams = useParams();
  const keyParam = id?.slice(0, id.indexOf("_"));

  const curentdata = dataHDUyQuyen?.find((it: any) => {
    if (keyParam) {
      return `${it.key}` === keyParam;
    }
  });
console.log(curentdata)

 

  const handelModalHuyOpen = () => {
    setActionHuyHD(true);
  };
  const handelCancelModal = () => {
    setActionHuyHD(false);
  };
  const handelOpenModalGH = () => {
    setOpenModalGiaHan(true);
  };
  const handelCancelModalGH = () => {
    setOpenModalGiaHan(false);
  };

  const actionsChiTiet = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/fi_edit.png")}
          width={32}
        />
      ),
      title: "Chỉnh sửa hợp đồng ",
      onClickItem: () => {},
    },
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/notes.png")}
          width={32}
        />
      ),
      title: "Gia hạn hợp đồng ",
      onClickItem: handelOpenModalGH,
    },
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/fi_x.png")}
          width={32}
        />
      ),
      title: "Hủy hợp đồng ",
      onClickItem: handelModalHuyOpen,
    },
  ];

  return (
    <div className="TabThongTinHD">
      <div className="TabThongTinHD_FormTob">
        <div className="TabThongTinHD_Form_InfoHD">
          <Form className="Form_InfoHD">
            <Form.Item label="Số hợp đồng:">
              <span>{curentdata?.soHD}</span>
            </Form.Item>
            <Form.Item label="Tên hợp đồng:">
              <span>{curentdata?.nameHD}</span>
            </Form.Item>
            <Form.Item label="Ngày hiệu lực:">
              <span>{curentdata?.ngayHieuLuc}</span>
            </Form.Item>
            <Form.Item label="Ngày hết hạn:">
              <span>{curentdata?.ngayHH}</span>
            </Form.Item>

            <Form.Item label="Tình trạng:">
              {curentdata?.hieuLuc === 1 ? (
                <div className="Item-HLuc">
                  <img
                    src={require("../../../assets/image/status-icon/Egreen.png")}
                  />
                  <p>Mới</p>
                </div>
              ) : curentdata?.hieuLuc === 2 ? (
                <div className="Item-HLuc">
                  <img
                    src={require("../../../assets/image/status-icon/Eblue.png")}
                  />
                  <p>Còn thời hạn</p>
                </div>
              ) : curentdata?.hieuLuc === 3 ? (
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
              )}
            </Form.Item>
          </Form>
        </div>
        {/* File đính kèm */}
        <div className="TabThongTinHD_Form-Files">
          <Form className="Form-Files">
            <Form.Item label="Đính kèm tệp:">
              <div className="FileItem-Group">
                {/* item */}
                <div className="FileItem">
                  <div className="FileItem-icon">
                    <img src={require("../../../assets/image/file/doc.png")} />
                  </div>
                  <div className="FileItem-name">
                    <span>hetthuongcannho.doc</span>
                  </div>
                </div>
                {/* item */}
                <div className="FileItem">
                  <div className="FileItem-icon">
                    <img src={require("../../../assets/image/file/doc.png")} />
                  </div>
                  <div className="FileItem-name">
                    <span>hetthuongcannho.doc</span>
                  </div>
                </div>
              </div>
            </Form.Item>
          </Form>
        </div>
        {/* Mức nhuận bút */}
        <div className="TabThongTinHD_Form-NhuanBut">
          <Form className="Form-NhuanBut">
            <div className="Form_Title">
              <div className="Form_Title-Item">
                <img src={require("../../../assets/image/file/circle.png")} />
              </div>
              <div className="Form_Title-text">
                <p>Mức nhuận bút</p>
              </div>
            </div>
            <Form.Item label="Quyền tác giả:">
              <span>0%</span>
            </Form.Item>
            <Form.Item label="Quyền liên quan:"></Form.Item>
            <div className="FormQLienQuan">
              <div className="FormQLienQuan_Item">
                <div className="FormQLienQuan_Item-Title">
                  <p>Quyền của người biểu diễn:</p>
                </div>
                <div className="FormQLienQuan_Item-text">
                  <p>50%</p>
                </div>
              </div>
              <div className="FormQLienQuan_Item">
                <div className="FormQLienQuan_Item-Title">
                  <p>Quyền của nhà sản xuất: (Bản ghi/video)</p>
                </div>
                <div className="FormQLienQuan_Item-text">
                  <p>50%</p>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <div className="TabThongTinHD_FormBottom">
        <div className="TabThongTinHD_Form-CaNhan">
          <Form className="Form-CaNhan">
            <div className="Form_Title">
              <div className="Form_Title-text">
                <p>Thông tin pháp nhân uỷ quyền</p>
              </div>
            </div>
            <Form.Item label="Pháp nhân uỷ quyền:">
              <span>{curentdata?.infoUQ.pNUQ}</span>
            </Form.Item>
            <Form.Item label="Tên người uỷ quyền:">
              <span>{curentdata?.infoUQ.nguoiUyQuyen}</span>
            </Form.Item>
            <Form.Item label="Ngày sinh:">
              <span>{curentdata?.infoUQ.ngaySinh}</span>
            </Form.Item>
            <Form.Item label="Giới tính:">
              <span>{curentdata?.infoUQ.gioiTinh}</span>
            </Form.Item>
            <Form.Item label="Quốc tịch:">
              <span>{curentdata?.infoUQ.quocTich}</span>
            </Form.Item>
            <Form.Item label="Số điện thoại::">
              <span>{curentdata?.infoUQ.sdt}</span>
            </Form.Item>
          </Form>
        </div>
        <div className="TabThongTinHD_Form-CaNhan">
          <Form className="Form-CaNhan">
            <Form.Item label="Số CMND/ CCCD:">
              <span>{curentdata?.infoUQ.CCCD}</span>
            </Form.Item>
            <Form.Item label="Ngày cấp:">
              <span>{curentdata?.infoUQ.ngayCap}</span>
            </Form.Item>
            <Form.Item label="Nơi cấp: ">
              <span>{curentdata?.infoUQ.noiCap}</span>
            </Form.Item>
            <Form.Item label="Mã số thuế:">
              <span>{curentdata?.infoUQ.maSoThue}</span>
            </Form.Item>
            <Form.Item label="Nơi cư trú:">
              <span>{curentdata?.infoUQ.diaChi}</span>
            </Form.Item>
          </Form>
        </div>
        <div className="TabThongTinHD_Form-CaNhan">
          <Form className="Form-CaNhan">
            <Form.Item label="Email:">
              <span>{curentdata?.infoUQ.email}</span>
            </Form.Item>
            <Form.Item label="Tài khoản đăng nhập:">
              <span>{curentdata?.infoUQ.taiKhoan}</span>
            </Form.Item>
            <Form.Item label="Mật khẩu: ">
              <span>{curentdata?.infoUQ.matKhau}</span>
            </Form.Item>
            <Form.Item label="Số tài khoản:">
              <span>{curentdata?.infoUQ.stk}</span>
            </Form.Item>
            <Form.Item label="Ngân hàng:">
              <span>{curentdata?.infoUQ.nganHang}</span>
            </Form.Item>
          </Form>
        </div>
      </div>

      <ActionsPages dataRender={actionsChiTiet} />
      {/* <ChitietHDActionsPage
        setOpenActionHuyHD={handelModalHuyOpen}
        setOpenModalGiaHan={handelOpenModalGH}
      /> */}
      <ModalActionHuy
        title={` Hủy hợp đồng uỷ quyền`}
        holder={`Cho chúng tôi biết lý do bạn muốn huỷ hợp đồng uỷ quyền này...`}
        txtBtnCancel={" Quay lại"}
        txtBtnSubmit={" Huỷ hợp đồng"}
        isCancel={handelCancelModal}
        isOpenModal={openActionHuyHD}
      />
      <ModalGiaHanHD
        isOpenModal={openActionGHHD}
        isCancel={handelCancelModalGH}
      />
    </div>
  );
};

export default TabThongTinHD;
