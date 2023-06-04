import { Checkbox } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import BtnTabKhoBanGhi from "../../../components/control/btntabKhoBg";
import SearchComponent from "../../../components/control/search";
import CtrSelect from "../../../components/control/select";
import { IParams } from "../../../types";
import "./styles.scss";

const CtrKhoBG = () => {
  const dataTheLoai = [
    { label: "Tất cả", value: "all" },
    { label: "Pop", value: "pop" },
    { label: "EDM", value: "EDM" },
    { label: "Ballad", value: "Ballad" },
  ];
  const dataDD = [
    { label: "Tất cả", value: "all" },
    { label: "Âm Thanh", value: "amThanh" },
    { label: "video", value: "Video" },
  ];

  const dataTHSD = [
    { label: "Tất cả", value: "all" },
    { label: "Còn thời hạn", value: "contg" },
    { label: "Hết hạn", value: "hettg" },
  ];
  const dataTT = [
    { label: "Tất cả", value: "all" },
    { label: "Duyệt bởi người dùng", value: "duyetUser" },
    { label: "Duyệt tự động", value: "auto" },
  ];
  const { control , tag }: IParams = useParams();

  return (
    <div className="Control-KhoBG">
      <div className="Control-KhoBG_Search">
        <SearchComponent textHint={"Tên bản ghi, ca sĩ,..."} width={500} />
      </div>
      <div className="Control-KhoBG_GroupSelect">
        <CtrSelect title="Thể loại" data={dataTheLoai} />
        <CtrSelect title="Định dạng:" data={dataDD} />
        {tag === "pheduyet" ? (
          ""
        ) : (
          <CtrSelect title="Thời hạn sử dụng:" data={dataTHSD} />
        )}
        {tag === "pheduyet" ? (
          ""
        ) : (
          <CtrSelect title="Trạng thái:" data={dataTT} />
        )}
         {tag === "pheduyet" && control==="grid"? (
          <Checkbox>Chọn tất cả</Checkbox>
        ) : (
         ""
        )}

        <BtnTabKhoBanGhi />
      </div>
    </div>
  );
};

export default CtrKhoBG;
