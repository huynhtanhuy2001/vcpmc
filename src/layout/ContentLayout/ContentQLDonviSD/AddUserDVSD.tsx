import React from "react";
import { useHistory, useParams } from "react-router-dom";
import ActionsPages from "../../../components/actionpages/ActionPages";
import ContentTitle from "../../../components/common/Content/contentTitle";
import FrmAddUserDVSD from "../../../components/form/AddUserDVSD";
import FrmUpdateDoiTacUQ from "../../../components/form/UpdateDoiTacUQ";
import { IParams } from "../../../types";

const AddUserDVSD = () => {
  const { page, control, tag, id, action }: IParams = useParams();

  const history = useHistory();
  const pathname = history.location.pathname;
  const handelUpdateUser = () => {
    history.push(`${pathname}/update-user_dvsd`);
  };
  const actionsEditForm = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/fi_edit.png")}
          width={32}
          alt="Chỉnh sửa"
        />
      ),
      title: "Chỉnh sửa",
      onClickItem: handelUpdateUser,
    },
  ];

  return (
    <div className="Content-App">
      {tag === "dvsd-add_user" ? (
        <ContentTitle title="Thêm người dùng" />
      ) : (
        <ContentTitle title="Thông tin người dùng" />
      )}

      <div className="Content-body">
        <div className="Content-body_PlaylistPage">
          {action === "update-user_dvsd" ? (
            <FrmAddUserDVSD typeform="update" />
          ) : tag === "dvsd-chitiet_user" ? (
            <FrmAddUserDVSD typeform="chitiet" />
          ) : (
            <FrmAddUserDVSD />
          )}
        </div>
        <ActionsPages dataRender={actionsEditForm} />
      </div>
    </div>
  );
};

export default AddUserDVSD;
