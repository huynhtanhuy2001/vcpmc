import { Form, Input, Button, Space, Checkbox } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";

import { useEffect, useState } from "react";

import { Link, useHistory, useParams } from "react-router-dom";
import { auth, db } from "../../firebase/cofig";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addInfoCurrentUser } from "../../redux/slice/authSlice";
import { IParams } from "../../types";

const FormLogin = () => {
  const { page }: IParams = useParams();
  const [statusLogin, setSattusLogin] = useState(true);
  const [email, setEmail] = useState("tuyetnguyenngoc@alta.com.vn");
  const [password, setPassword] = useState("12345678");
  const dispatch = useAppDispatch();
  const history = useHistory();

  const getInfoAdmin = async (email: any) => {
    const q = query(collection(db, "manager"), where("email", "==", email));
    const ad: any = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      ad.push({ id: `${doc.id}`, ...doc.data() });
    });
    dispatch(addInfoCurrentUser(ad));
    history.push("/home")
  };


  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
         getInfoAdmin(user.email);
       
      })
      .catch((error) => {
        setSattusLogin(false);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      layout="vertical"
      // initialValues={{ remember: true }}
      // onFinish={onFinish}
    >
      <Form.Item>
        <div className="Form_login-title">
          <h3>Đăng Nhập</h3>
        </div>
      </Form.Item>
      <Form.Item
        label="Tên đăng nhập"
        name="username"
        className="lableInput"
        initialValue={email}
      >
        <Input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Password" name="password" initialValue={password}>
        <Input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      {statusLogin ? (
        ""
      ) : (
        <Form.Item className="notify_login">
          <div className="login__Status">
            <span>Sai mật khẩu hoặc tên đăng nhập</span> <br />
            {/* <span>Hãy nhập tài khoản và mật khẩu</span> */}
          </div>
        </Form.Item>
      )}

      <Form.Item>
        <Checkbox>Ghi nhớ đăng nhập</Checkbox>
      </Form.Item>

      <Form.Item>
        <div className="btn-group">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={handleLogin}
          >
            Đăng nhập
          </Button>
        </div>
      </Form.Item>
      <div className="btn-group">
        <Link to={"/forgot-password"}>
          <p className="Forget_password">Quên mật khẩu? </p>
        </Link>
      </div>
    </Form>
  );
};

export default FormLogin;
