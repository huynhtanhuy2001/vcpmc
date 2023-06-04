import { Avatar, Button, Form, Input, Radio } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import CtrSelect from "../../control/select";
import "./styles.scss";

const FrmAddUserDVSD : React.FC<{typeform?: string}> = (props) => {
  const datarole= [
    { label: "QA", value: "QA" },
    // { label: "Pop", value: "pop" },
    // { label: "EDM", value: "EDM" },
    // { label: "Ballad", value: "Ballad" },
  ];

  return (
    <div className="UpdateDoiTacUQ">
      <div className="Layout-page">
      <div className="UpdateDoiTacUQ_Left">
   
          <Form >
              <Form.Item label="Tên người dùng">
                <Input name="fullname" defaultValue={"Amy Ngọc"}/>
              </Form.Item>

              <Form.Item label="Email">
              <Input name="email"/>

              </Form.Item>
            
              <Form.Item label="Vai trò">
              <CtrSelect data={datarole} w={256}/>

              </Form.Item>
          
              
            </Form>
  
   
      </div>
      <div className="UpdateDoiTacUQ_Right">
        
          <Form >
              <Form.Item label="Tên đăng nhập">
                <Input name="username" />
              </Form.Item>

              <Form.Item label="Mật khẩu:">
              <Input name="password" type="password"/>

              </Form.Item>
              <Form.Item label="Nhập lại mật khẩu">
              <Input name="password" type="password"/>

              </Form.Item>
           
            
           
              
            </Form>
      
        
      </div>
      </div>
    
      {
        props.typeform ==="chitiet" ? "":
        <div className="btn-group">
        <Link to={'/quanly/donviuyquyen'}>
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
      }
      
    </div>
  );
};

export default FrmAddUserDVSD
