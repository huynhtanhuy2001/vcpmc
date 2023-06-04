import React, { useEffect, useState } from "react";
import { Avatar, Form, Input, DatePicker, Button, DatePickerProps } from "antd";
import dayjs from "dayjs";

import ModalChangePassword from "../../../components/modal/modalchangepassword";
import "./styles.scss";
import ContentTitle from "../../../components/common/Content/contentTitle";
import ActionsPages from "../../../components/actionpages/ActionPages";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/cofig";

import { UpdateData } from "../../../firebase/AsyncActtions";
import { useHistory } from "react-router-dom";
const dateFormat = "DD/MM/YYYY";

const HomeContent : React.FC<{currentUser: any}> = (props) => {
  const { id, name, phone, email, role, avatar, ngaySinh } = props.currentUser


  const history = useHistory();
  const fN = name.slice(0, name.indexOf(" "));
  const lN = name.slice(name.lastIndexOf(" "));

  const [openChangePw, setOpenChangePass] = useState(false);
  const [openEdit, setOpenEdit] = useState(true);

  const [fullName, setFullName] = useState(name);
  const [firstName, setFirstName] = useState(fN);
  const [lastName, setLastName] = useState(lN);
  const [date, setNgaySinh] = useState(ngaySinh);
  const [phonenumber, setPhone] = useState(phone);

  const handelModalOpen = () => {
    setOpenChangePass(true);
  };
  const handelCancelModal = () => {
    setOpenChangePass(false);
  };

  const handelOpenEditInfo = () => {
    setOpenEdit(false);
  };
  const handelCancelEditInfo = () => {
    setOpenEdit(true);
  };

  const handelLogout = () => {
    signOut(auth)
      .then(() => {
        history.push("/");
        // dispatch(addInfoCurrentUser({currentUser: [], loading : false}))
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const actionsHomePage = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/fi_edit.png")}
          width={32}
        />
      ),
      title: "Sửa thông tin",
      onClickItem: handelOpenEditInfo,
    },
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/fi_lock.png")}
          width={32}
        />
      ),
      title: "Đổi mật khẩu",
      onClickItem: handelModalOpen,
    },
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/fi_log-out.png")}
          width={32}
        />
      ),
      title: "Đăng xuất",
      onClickItem: handelLogout,
    },
  ];

  const handelUpdateInfo = () => {
    let nameupdate = firstName + lastName;
    const dataUpdate = {
      name: nameupdate,
      ngaySinh: date,
      phone: phonenumber,
    };
    try {
      UpdateData(dataUpdate, "manager", id);
      setFullName(nameupdate);
      alert("Update Sucess");
    } catch (error) {
      alert("Update fales");
    }
  };
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setNgaySinh(dateString);
  };
  return (
  
    <div className="Content-App">
      <ContentTitle title="Thông tin cơ bản" />
      <div className="Content-body">
        <div className="Content-bodyLeft">
          <div className="Content-body_avatar">
            <Avatar size={240} icon={<img src={avatar} alt="avataruser" />} />
            <Avatar
              className="Icon-Camera"
              size={40}
              icon={
                <img src={require("../../../assets/image/Cameraicon.png")} />
              }
            />
          </div>
          <div className="Content-body_nameuser">
            <p>{fullName}</p>
          </div>
        </div>
        <div className="Content-bodyRight">
          <div className="Form-UserInfo_Top">
            <Form layout="vertical" className="Users-Profile_FormLeft">
              <Form.Item label="Họ :" name="FirstName" initialValue={firstName}>
                <Input
                  type="text"
                  name="FirstName"
                  disabled={openEdit}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Ngày Sinh:"
                name="NgaySinh"

                // initialValue={'Tuyết'}
              >
                <DatePicker
                  defaultValue={dayjs(date, dateFormat)}
                  format={dateFormat}
                  disabled={openEdit}
                  onChange={onChange}
                />
              </Form.Item>
            </Form>
            <Form layout="vertical" className="Users-Profile_FormRight">
              <Form.Item label="Tên:" name="lastName" initialValue={lastName}>
                <Input
                  type="text"
                  name="LastName"
                  disabled={openEdit}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Số điện thoại:"
                name="Phone"
                initialValue={phonenumber}
              >
                <Input
                  type="text"
                  name="Phone"
                  disabled={openEdit}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Item>
            </Form>
          </div>
          <div className="Form-UserInfo_Bottpm">
            <Form layout="vertical" className="Users-Profile_FormBottom">
              <Form.Item label="Email:" name="Email" initialValue={email}>
                <Input type="text" name="Email" disabled />
              </Form.Item>
              <Form.Item
                label="Tên đăng nhập:"
                name="Username"
                initialValue={email}
              >
                <Input type="text" name="Username" disabled />
              </Form.Item>

              <Form.Item label="Phân quyền:" name="role" initialValue={role}>
                <Input type="text" name="role" disabled />
              </Form.Item>
              {openEdit ? (
                ""
              ) : (
                <Form.Item>
                  <div className="btn-group">
                    <Button
                      type="primary"
                      danger
                      ghost
                      className="btn-default"
                      onClick={handelCancelEditInfo}
                    >
                      Hủy
                    </Button>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="btn-submit btn-default"
                      onClick={handelUpdateInfo}
                    >
                      Lưu
                    </Button>
                  </div>
                </Form.Item>
              )}
            </Form>
          </div>
        </div>

        <ActionsPages dataRender={actionsHomePage} />

        {/* <HomePageAction setOpenModal={handelModalOpen} /> */}
      </div>

      <ModalChangePassword
        isOpenModal={openChangePw}
        isCancel={handelCancelModal}
      />
    </div>
  );
};

export default HomeContent;
