import Search from "antd/es/transfer/search";
import React from "react";
import { useParams } from "react-router-dom";
import SearchComponent from "../../../components/control/search";
import CtrSelect from "../../../components/control/select";
import { IParams } from "../../../types";
import "./styles.scss";

const CtrBCDoanhThu = () => {
  const { tag }: IParams = useParams();
  const dataOptions = [
    { label: "Theo tháng", value: "m" },
    { label: "Theo quý", value: "q" },
  ];
  const dataThang = [];
  for (let i = 1; i <= 12; i++) {
    dataThang.push({ label: "Tháng" + i, value: "m" + i });
  }
  const dataQ = [];
  for (let i = 1; i <= 4; i++) {
    dataQ.push({ label: "Quý" + i, value: "q" + i });
  }
  return (
    <>
      <div className="Control-BCDoanhThu">
        <div className="Control-BCDoanhThu_GroupSelect">
          <CtrSelect title="Theo Tháng" data={dataOptions} />
          <CtrSelect data={dataThang} />
          <CtrSelect data={dataQ} />
        </div>
        {tag === "chitiet-bcdoanhthu" ? (
          <SearchComponent textHint={"Nhập tên người dùng"} width={433} />
        ) : (
          ""
        )}
      </div>
      {tag === "chitiet-bcdoanhthu" ? (
        ""
      ) : (
        <div>
          <div className="Control-BCDoanhThu_TitleTable">
            <ul>
              <li>
                <label>Tổng số bài hát</label>
                <p>100</p>
              </li>
              <li>
                <label>Tổng số lượt phát</label>
                <p>32.000.000</p>
              </li>
              <li>
                <label>Doanh thu trên lượt phát </label>
                <p>1.564.745.000đ</p>
              </li>
              <li>
                <label>Doanh thu chưa phân phối</label>
                <p>1.564.745.000đ</p>
              </li>
              <li>
                <label>Hành chính phí</label>
                <p>3.253.000đ</p>
              </li>
            </ul>
          </div>
          <div className="Control-BCDoanhThu_TitleArea">
            <h3>Biểu đồ theo dõi lượt phát - 29/06/2021</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default CtrBCDoanhThu;
