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
import "./styles.scss";
import dayjs from "dayjs";
import UploadFile from "../../control/uploadFile";
import { Link } from "react-router-dom";
import ModalAddHDSuccess from "../../modal/modalThemHDSuccess";
import { useAppSelector } from "../../../redux/hooks";
import { WriteDataGenerateID } from "../../../firebase/AsyncActtions";

const dateFormat = "DD/MM/YYYY";

const FormCreateHD = () => {
  const { dataHDUyQuyen } = useAppSelector((state) => state.hopDong);
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

  const [soHD, setSoHD] = useState("HD234");
  const [nameHD, SetnameHD] = useState("Hợp đồng bài hát");
  const [ngayHieuLuc, setNgayHieuLuc] = useState("15/12/2015");
  const [ngayHH, setNgayHH] = useState("15/12/2015");

  // ca nhan
  const [nguoiUyQuyen, setNguoiUyQuyen] = useState("Nguyễn Bảo Nam");
  const [gioiTinh, setGioiTinh] = useState("Nam");
  const [ngaySinh, SetngaySinh] = useState("16/09/2000");
  const [quocTich, SetQuocTich] = useState("Việt Nam");
  const [sdt, SetSDT] = useState("014164512");
  const [CCCD, SetCCCD] = useState("1641145215");
  const [ngayCap, SetngayCap] = useState("15/12/2015");
  const [noiCap, SetnoiCap] = useState("TP.HCM");
  const [maSoThue, SetmaSoThue] = useState("031156463102311");
  const [diaChi, SetdiaChi] = useState("Gò Vấp, TPHCM");
  const [email, Setemail] = useState("nam@gmail.com");
  const [taiKhoan, SettaiKhoan] = useState("nam@gmail.com");
  const [matKhau, SetmatKhau] = useState("012345678");
  const [stk, Setstk] = useState("12345644");
  const [nganHang, SetNganHang] = useState("Agribank");

  // To chuc
  const [diaChiTC, SetDiaChiTC] = useState("Gò Vấp, TPHCM");

  const handelCreateHD = () => {
    let key = dataHDUyQuyen ?  dataHDUyQuyen?.length + 1 : 1 ;
    console.log(key)
    var currentdate = new Date();
    var datetime =
      currentdate.getDay() +
      "/" +
      currentdate.getMonth() +
      "/" +
      currentdate.getFullYear() +
      " "+
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    const dataUpload = {
      key: key,
      soHD: soHD,
      nameHD: nameHD,
      nguoiUyQuyen: nguoiUyQuyen,
      quyenSH: "Người biểu diễn",
      hieuLuc: 1,
      ngayTao: datetime,
      ngayHieuLuc,
      ngayHH,
      infoUQ: {
        pNUQ : checkPNUQ ===0 ? "Cá nhân" : "Tổ chức",
        nguoiUyQuyen,
        gioiTinh,
        ngaySinh,
        quocTich,
        sdt, 
        CCCD, 
        ngayCap, 
        noiCap, 
        maSoThue, 
        diaChi, 
        email,
         taiKhoan,
         matKhau,
         stk,
         nganHang
      }
     
    };
    const isEmty = Object.values(dataUpload).includes('')
    if(isEmty){
      alert("Phải điền đầy đủ thông tin")
  }
  else{
    // checkMaNV ===-1
      if(!isEmty  ){
          const dataup = {id :'', ...dataUpload}
          WriteDataGenerateID(dataUpload, "HopDongUyQuyen")
          
    // dispatch(addProFile(data?.concat(dataup)))
          handleOpenModalSuccess()

      }
      // else if(checkMaNV !==-1){
      //     alert("Mã nhân viên tồn tại")
      // }

  }
 
   
   
  };

  return (
    <div className="CreateHD">
      <div className="CreateHD_FormTob">
        <div className="CreateHD_Form_InfoHD">
          <Form className="Form_InfoHD">
            <Form.Item label="Số hợp đồng:" initialValue={soHD}>
              <Input
                type="text"
                name="soHD"
                defaultValue={soHD}
                onChange={(e) => setSoHD(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Tên hợp đồng:" initialValue={nameHD}>
              <Input
                type="text"
                name="nameHD"
                defaultValue={nameHD}
                onChange={(e) => SetnameHD(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Ngày hiệu lực:">
              <DatePicker
                defaultValue={dayjs(ngayHieuLuc, dateFormat)}
                format={dateFormat}
                onChange={(day, dayString) => setNgayHieuLuc(dayString)}
              />
            </Form.Item>
            <Form.Item label="Ngày hết hạn:">
              <DatePicker
                defaultValue={dayjs(ngayHH, dateFormat)}
                format={dateFormat}
                onChange={(day, dayString) => setNgayHH(dayString)}
              />
            </Form.Item>
          </Form>
        </div>
        {/* File đính kèm */}
        <div className="CreateHD_Form-Files">
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
        <div className="CreateHD_Form-NhuanBut">
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

      {checkPNUQ === 0 ? (
        <div className="CreateHD_FormBottom">
          <div className="CreateHD_Form-CaNhan">
            <Form className="Form-CaNhan">
              <div className="Form_Title">
                <div className="Form_Title-text">
                  <p>Thông tin pháp nhân uỷ quyền</p>
                </div>
              </div>
              <Form.Item label="Pháp nhân uỷ quyền:">
                <Radio.Group onChange={onChangePNUQ} value={checkPNUQ}>
                  <Radio value={0}>Cá Nhân</Radio>
                  <Radio value={1}>Tổ Chức</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="Tên người uỷ quyền:"
                
              >
                <Input
                  type="text"
                  name="nguoiUyQuyen"
                  defaultValue={nguoiUyQuyen}
                  onChange={(e) => setNguoiUyQuyen(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Giới tính:">
                <Radio.Group
                  onChange={(e) => setGioiTinh(e.target.value)}
                  value={gioiTinh}
                >
                  <Radio value={"Nam"}>Nam</Radio>
                  <Radio value={"Nữ"}>Nữ</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Ngày sinh:">
                <DatePicker
                  defaultValue={dayjs(ngaySinh, dateFormat)}
                  format={dateFormat}
                  onChange={(day, dayString) => {
                    SetngaySinh(dayString);
                  }}
                />
              </Form.Item>

              <Form.Item label="Quốc tịch:">
                <Select
                  defaultValue="vietnam"
                  style={{ width: 325 }}
                  onChange={(e) => SetQuocTich(e)}
                  options={[{ value: "vietnam", label: "Việt Nam" }]}
                />
              </Form.Item>
              <Form.Item label="Số điện thoại:" initialValue={sdt}>
                <Input
                  type="text"
                  name="sdt"
                  defaultValue={sdt}
                  onChange={(e) => SetSDT(e.target.value)}
                />
              </Form.Item>
            </Form>
          </div>
          <div className="CreateHD_Form-CaNhan">
            <Form className="Form-CaNhan">
              <Form.Item label="Số CMND/ CCCD:" initialValue={CCCD}>
                <Input
                  type="text"
                  name="soCCCD"
                  defaultValue={CCCD}
                  onChange={(e) => SetCCCD(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Ngày cấp:" initialValue={ngayCap}>
                <DatePicker
                  defaultValue={dayjs(ngayCap, dateFormat)}
                  format={dateFormat}
                  onChange={(day, dayString) => SetngayCap(dayString)}
                />
              </Form.Item>
              <Form.Item label="Nơi cấp: " initialValue={noiCap}>
                <Input
                  type="text"
                  name="noicap"
                  defaultValue={noiCap}
                  onChange={(e) => SetnoiCap(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Mã số thuế:" >
                <Input
                  type="text"
                  name="msThue"
                  defaultValue={maSoThue}
                  onChange={(e) => SetmaSoThue(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Nơi cư trú:" initialValue={diaChi}>
                <Input.TextArea
                  name="diaChi"
                  rows={4}
                  defaultValue={diaChi}
                  onChange={(e) => SetdiaChi(e.target.value)}
                />
              </Form.Item>
            </Form>
          </div>
          <div className="CreateHD_Form-CaNhan">
            <Form className="Form-CaNhan">
              <Form.Item label="Email:" initialValue={email}>
                <Input
                  type="text"
                  name="email"
                  defaultValue={email}
                  onChange={(e) => Setemail(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Tài khoản đăng nhập:" initialValue={taiKhoan}>
                <Input
                  type="text"
                  name="nameTK"
                  defaultValue={taiKhoan}
                  onChange={(e) => SettaiKhoan(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Mật khẩu: " initialValue={matKhau}>
                <Input
                  type="password"
                  name="password"
                  defaultValue={matKhau}
                  onChange={(e) => SetmatKhau(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Số tài khoản:" initialValue={stk}>
                <Input
                  type="text"
                  name="stk"
                  defaultValue={stk}
                  onChange={(e) => Setstk(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Ngân hàng:" initialValue={nganHang}>
                <Input
                  type="text"
                  name="bank"
                  defaultValue={nganHang}
                  onChange={(e) => SetNganHang(e.target.value)}
                />
              </Form.Item>
            </Form>
          </div>
        </div>
      ) : (
        <div className="CreateHD_FormBottom">
          <div className="CreateHD_Form-CaNhan">
            <Form className="Form-CaNhan">
              <div className="Form_Title">
                <div className="Form_Title-text">
                  <p>Thông tin pháp nhân uỷ quyền</p>
                </div>
              </div>
              <Form.Item label="Pháp nhân uỷ quyền:">
                <Radio.Group onChange={onChangePNUQ} value={checkPNUQ}>
                  <Radio value={0}>Cá Nhân</Radio>
                  <Radio value={1}>Tổ Chức</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item label="Mã số thuế:" name={"msThue"} initialValue={maSoThue}>
                <Input
                  type="text"
                  name="msThue"
                  defaultValue={maSoThue}
                  onChange={e => SetmaSoThue(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Số tài khoản:" initialValue={stk}>
                <Input
                  type="text"
                  name="stk"
                  defaultValue={stk}
                  onChange={(e) => Setstk(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Ngân hàng:" initialValue={nganHang}>
                <Input
                  type="text"
                  name="bank"
                  defaultValue={nganHang}
                  onChange={(e) => SetNganHang(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Địa Chỉ:" initialValue={diaChiTC}>
                <Input.TextArea
                  name="DiaChiToChuc"
                  rows={6}
                  defaultValue={diaChiTC}
                  onChange={(e) => SetDiaChiTC(e.target.value)}
                />
              </Form.Item>
            </Form>
          </div>
          <div className="CreateHD_Form-CaNhan">
            <Form className="Form-CaNhan">
              <Form.Item label="Người đại diện:" name={"nguoiUyQuyen"}>
                <Input
                  type="text"
                  name="nguoiUyQuyen"
                  defaultValue={nguoiUyQuyen}
                  onChange={(e) => setNguoiUyQuyen(e.target.value)}
                />
              </Form.Item>

              <Form.Item label="Ngày sinh:">
                <DatePicker
                  defaultValue={dayjs(ngaySinh, dateFormat)}
                  format={dateFormat}
                  onChange={(d, dayString) => SetngaySinh(dayString)}
                />
              </Form.Item>
              <Form.Item label="Giới tính:">
                <Radio.Group
                  onChange={(e) => setGioiTinh(e.target.value)}
                  value={gioiTinh}
                >
                  <Radio value={0}>Nam</Radio>
                  <Radio value={1}>Nữ</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item label="Số CMND/ CCCD:" initialValue={CCCD}>
                <Input
                  type="text"
                  name="soCCCD"
                  onChange={(e) => SetCCCD(e.target.value)}
                />
              </Form.Item>

              <Form.Item label="Ngày cấp:" initialValue={ngayCap}>
                <DatePicker
                  defaultValue={dayjs(ngayCap, dateFormat)}
                  format={dateFormat}
                  onChange={(d, ds) => SetngayCap(ds)}
                />
              </Form.Item>
              <Form.Item label="Nơi cấp: " initialValue={noiCap}>
                <Input
                  type="text"
                  name="noicap"
                  defaultValue={noiCap}
                  onChange={(e) => SetnoiCap(e.target.value)}
                />
              </Form.Item>

              <Form.Item label="Quốc tịch:" initialValue={quocTich}>
                <Select
                  defaultValue="vietnam"
                  style={{ width: 325 }}
                  onChange={(e) => SetQuocTich(e)}
                  options={[{ value: "vietnam", label: "Việt Nam" }]}
                />
              </Form.Item>
            </Form>
          </div>
          <div className="CreateHD_Form-CaNhan">
            <Form className="Form-CaNhan">
              <Form.Item label="Nơi cư trú:" initialValue={diaChi}>
                <Input.TextArea
                  name="diaChi"
                  rows={4}
                  defaultValue={diaChi}
                  onChange={(e) => SetdiaChi(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Số điện thoại:" initialValue={sdt}>
                <Input
                  type="text"
                  name="sdt"
                  onChange={(e) => SetSDT(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Email:" initialValue={email}>
                <Input
                  type="text"
                  name="email"
                  onChange={(e) => Setemail(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Tài khoản đăng nhập:" initialValue={taiKhoan}>
                <Input
                  type="text"
                  name="nameTK"
                  onChange={(e) => SettaiKhoan(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Mật khẩu: " initialValue={matKhau}>
                <Input
                  type="password"
                  name="password"
                  onChange={(e) => SetmatKhau(e.target.value)}
                />
              </Form.Item>
            </Form>
          </div>
        </div>
      )}

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
          onClick={handelCreateHD}
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

export default FormCreateHD;
