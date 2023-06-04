import React, { useState } from "react";
import { Button, Modal, Form, Input, message } from "antd";
import CtrSelect from "../../control/select";
import UploadFile from "../../control/uploadFile";

import "./styles.scss";

const ModalActionThemBanGhi: React.FC<{
  title?: string;
  isOpenModal: boolean;
  isCancel: Function;
}> = (props) => {
  const handleCancel = () => {
    props.isCancel(false);
  };

  const [nameBG, setNameBG] = useState("Gorgeous Wooden Bike");
  const [phongcachBG, setPhongCach] = useState("Ballad ");
  const [typeBG, setType] = useState("Audio");
  const [timeBG, setTime] = useState("3:12");
  const [ISRC, setISRC] = useState("VNA1423525");
  const [casi, setCasi] = useState("Vương Anh Tú");
  const [tacgia, setTacgia] = useState("Vương Phong");
  const [nsx, setNSX] = useState("Vương Phong");

  const handelUploadBanGhi = () => {
    const dataup = {
      key: 1,
      nameBG,
      phongcachBG,
      typeBG,
      timeBG,
      ISRC,
      casi,
      tacgia,
      nsx,
      status: 0
    };
    console.log(dataup)
  };

  const dataSelectTheLoai = [
    {
      value: "Rap",
      label: "Rap",
    },
    {
      value: "Ballad",
      label: "Ballad",
    },
    {
      value: "rockandroll",
      label: "Rock n Roll",
    },
    {
      value: "RandB",
      label: "R&B",
    },
  ];

  return (
    <>
      <Modal
        open={props.isOpenModal}
        onCancel={handleCancel}
        footer={false}
        className="ModalThemBG"
      >
        <div className="Modal_Title">
          <h3>{props.title}</h3>
        </div>

        <Form layout="vertical" className="Frm_ThemBanGhi">
          <Form.Item label="Tên bản ghi:" name="nameBG" initialValue={nameBG}>
            <Input
              type="text"
              name="nameBG"
              onChange={(e) => setNameBG(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Mã ISRC:" name="ISRC" initialValue={ISRC}>
            <Input
              type="text"
              name="ISRC"
              onChange={(e) => setISRC(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Tác giả:" name="tacGia" initialValue={tacgia}>
            <Input
              type="text"
              name="tacGia"
              onChange={(e) => setTacgia(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Ca sĩ/Nhóm nhạc:" name="casi" initialValue={casi}>
            <Input
              type="text"
              name="casi"
              onChange={(e) => setCasi(e.target.value)}
            />
          </Form.Item>

          <div className="horizontal_form">
            <Form.Item
              label="Thể loại:"
              name="theLoai"
              // initialValue={"Nguyễn"}
            >
              <CtrSelect
                data={dataSelectTheLoai}
                w={347}
                onValue={(param: string) => setPhongCach(param)}
              />
            </Form.Item>
            <Form.Item label="Nhà sản xuất:" name="nsx" initialValue={nsx}>
              <Input type="text" name="nsx" />
            </Form.Item>
          </div>
          <div className="horizontal_form">
            {/* upload */}
            <div className="FileItem">
              <label htmlFor="file_banGhi">Đính kèm bản ghi:</label>
              <UploadFile />
            </div>
            <div className="FileItem">
              <label htmlFor="file_loiBaiHat">Đính kèm lời bài hát:</label>
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
                onClick={handelUploadBanGhi}
              >
                Tải lên
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalActionThemBanGhi;
