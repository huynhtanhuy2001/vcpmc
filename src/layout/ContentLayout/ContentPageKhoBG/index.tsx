import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ActionsPages from "../../../components/actionpages/ActionPages";

import ContentTitle from "../../../components/common/Content/contentTitle";
import UpdateBanGhi from "../../../components/form/UpdateBanGhi";
import ModalActionHuy from "../../../components/modal/modalActionhuy";
import TabPageQl from "../../../components/tabbar/tabpageQL";
import TableKhoBG from "../../../components/table/tbKhoBG";
import { IParams } from "../../../types";
import CtrKhoBG from "../../ControllerPageLayout/CtrKhoBG";
import "./styles.scss";

const ContentPageKhoBG = () => {
  const history = useHistory();
  const pathname = history.location.pathname;
  const { tag, id }: IParams = useParams();
  const [openActionHuyHD, setActionHuyHD] = useState(false);

  const keyPath = id?.slice(0, id.indexOf("_"));
  const tenbh = id?.slice(id.indexOf("_") + 1);

  const handleQLPheDuyet = () => {
    history.replace(`${pathname}/pheduyet`);
  };
  const handelModalHuyOpen = () => {
    setActionHuyHD(true);
  };
  const handelCancelModal = () => {
    setActionHuyHD(false);
  };

  const actionsPageKhoBG = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/fi_edit.png")}
          width={32}
          alt="quản lý phê duyệt"
        />
      ),
      title: "Quản lý phê duyệt",
      onClickItem: handleQLPheDuyet,
    },
  ];
  const actionsUpdateKhoBG = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/fi_x.png")}
          width={32}
          alt=" Xóa bản ghi"
        />
      ),
      title: "Xóa bản ghi",
      onClickItem: () => {},
    },
  ];

  const actionsPagePheDuyet = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/check.png")}
          width={32}
          alt=" phê duyệt"
        />
      ),
      title: "Phê duyệt",
      onClickItem: () => {},
    },
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/fi_x.png")}
          width={32}
          alt=" Từ chối"
        />
      ),
      title: "Từ chối",
      onClickItem: handelModalHuyOpen,
    },
  ];

  return (
    <div className="Content-App">
      {tag === "capnhatbg" ? (
        <ContentTitle title={`Bản ghi - ${tenbh} `} />
      ) : tag === "pheduyet" ? (
        <ContentTitle title="Phê duyệt bản ghi" />
      ) : (
        <ContentTitle title="Kho bản ghi" />
      )}

      <div className="Content-body">
        <div className="ContentPageKhoBG">
          {tag === "capnhatbg" ? "" : <CtrKhoBG />}
          {tag === "capnhatbg" ? <UpdateBanGhi /> : <TableKhoBG />}

          {tag === "pheduyet" ? (
            <ActionsPages dataRender={actionsPagePheDuyet} />
          ) : tag === "capnhatbg" ? (
            <ActionsPages dataRender={actionsUpdateKhoBG} />
          ) : (
            <ActionsPages dataRender={actionsPageKhoBG} />
          )}
        </div>
        <ModalActionHuy
          title={`Lý do từ chối phê duyệt`}
          holder={`Cho chúng tôi biết lý do bạn muốn từ chối phê duyệt bản ghi này...`}
          txtBtnCancel={" Hủy"}
          txtBtnSubmit={" Từ chối"}
          isCancel={handelCancelModal}
          isOpenModal={openActionHuyHD}
        />
      </div>
    </div>
  );
};

export default ContentPageKhoBG;
