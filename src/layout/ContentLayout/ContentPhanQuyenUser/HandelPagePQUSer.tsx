import React from "react";
import { useParams } from "react-router-dom";
import ActionsPages from "../../../components/actionpages/ActionPages";
import ContentTitle from "../../../components/common/Content/contentTitle";
import FrmHandelPQUser from "../../../components/form/FormHandelPQUser";
import { IParams } from "../../../types";

const HandelPagePQUser = () => {
  const { tag }: IParams = useParams();
  const actionsPageUpdate = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/fi_user-x.png")}
          width={32}
          alt="Xóa người dùng"
        />
      ),
      title: "Xóa người dùng",
      onClickItem: () => {},
    },
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/u_keyt.png")}
          width={32}
          alt="Khôi phục mật khẩu"
        />
      ),
      title: "Khôi phục mật khẩu",
      onClickItem: () => {},
    },
  ];
  return (
    <div className="Content-App">
      {tag === "setting_update-user" ? (
        <ContentTitle title="Chỉnh sửa thông tin người dùng" />
      ) : (
        <ContentTitle title="Thêm người dùng" />
      )}

      <div className="Content-body">
        <div className="Content-body_PlaylistPage">
          {tag === "setting_update-user" ? (
            <>
              <FrmHandelPQUser />
              <ActionsPages dataRender={actionsPageUpdate} />
            </>
          ) : (
            <FrmHandelPQUser typeform="create" />
          )}
        </div>
      </div>
    </div>
  );
};

export default HandelPagePQUser;
