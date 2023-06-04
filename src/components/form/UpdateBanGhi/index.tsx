import { Avatar, Button, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import CtrSelect from "../../control/select";
import "./styles.scss";

const UpdateBanGhi = () => {
  const dataTheLoai = [
    { label: "Tất cả", value: "all" },
    { label: "Pop", value: "pop" },
    { label: "EDM", value: "EDM" },
    { label: "Ballad", value: "Ballad" },
  ];

  return (
    <div className="UpdateBanGhi">
      <div className="Layout-page">
      <div className="UpdateBanGhi_Left">
        <div className="UpdateBanGhi_Left-FormTob">
          <div className="FormTitle">
            <p>Thông tin bản ghi</p>
          </div>

          <div className="UpdateBanGhi_Left-FormTob_Avatar">
            <Avatar
              size={158}
              src={require("../../../assets/image/image4.png")}
            />
            <div className="icon_upload">
              <img className="icon_upload-img"
                src={require("../../../assets/image/Cameraicon.png")}
                alt="upload"
                width={22}
              />
            </div>
          </div>
          <div className="UpdateBanGhi_Left-FormTob_InforName">
            <img
              src={require("../../../assets/image/action-icon/musicicon.png")}
              alt="type"
            />
            <span>Matem.mp3</span>
          </div>
          <div className="UpdateBanGhi_Left-FormTob_InfoForm">
            <Form >
              <Form.Item label="Ngày thêm:">
                <span>07/04/2021 - 17:45:30</span>
              </Form.Item>

              <Form.Item label="Người tải lên:">
                <span>Super Admin</span>
              </Form.Item>
              <Form.Item label="Người duyệt:">
                <span>Hệ thống (Tự động phê duyệt)</span>
              </Form.Item>
              <Form.Item label="Ngày phê duyệt:">
                <span>07/04/2021 - 17:45:50</span>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="UpdateBanGhi_Left-FormBottom">
          <div className="FormTitle">
            <p>Thông tin ủy quyền</p>
          </div>

          <div className="UpdateBanGhi_Left-FormBottom_InfoForm">
            <Form>
              <Form.Item label="Số hợp đồng:">
                <span>BH123</span>
              </Form.Item>

              <Form.Item label="Ngày nhận ủy quyền:">
                <span>01/05/2021</span>
              </Form.Item>
              <Form.Item label="Ngày hết hạn:">
                <span>01/08/2025</span>
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
        </div>
      </div>
      <div className="UpdateBanGhi_Right">
        <div className="FormTitle">
          <p>Chỉnh sửa thông tin</p>
        </div>
          <div className="UpdateBanGhi_Right-Form">
          <Form layout="vertical">
              <Form.Item label="Tên bản ghi:">
                <Input name="tenBG" defaultValue={"Mất em"}/>
              </Form.Item>

              <Form.Item label="Mã ISRC:">
              <Input name="maISRC"/>

              </Form.Item>
              <Form.Item label="Ca sĩ:">
              <Input name="casi"/>

              </Form.Item>
              <Form.Item label="Tác giả:">
              <Input name="tacGia"/>

              </Form.Item>
              <Form.Item label="Nhà sản xuất:">
              <Input name="nsx"/>

              </Form.Item>
              <Form.Item label="Thể loại:">
              
              <CtrSelect data={dataTheLoai} w={695}/>

              </Form.Item>
              
            </Form>
          </div>
        
      </div>
      </div>
    

      <div className="btn-group">
        <Link to={'/khobanghi/list'}>
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

export default UpdateBanGhi;
