import React, { useState } from "react";
import ActionsPages from "../../../components/actionpages/ActionPages";
import type { ColumnsType } from "antd/es/table";
import ContentTitle from "../../../components/common/Content/contentTitle";
import { Space, Switch } from "antd";
import { Link, useHistory } from "react-router-dom";
import CtrBCDoanhThu from "../../ControllerPageLayout/CtrBaoCaoDoanhThu";
import ChartArea from "../../../components/common/chartArea";
import { IDataCharts, ItemCharts } from "../../../types";



const ContentPageBaoCaoDT = () => {
  const history = useHistory();
  const pathname = history.location.pathname;


  const handelOpenPageBaoCaoCT =()=>{
    history.push(`${pathname}/chitiet-bcdoanhthu`)
  }


  const actionsPageQLTB = [


    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/receipt.png")}
          width={32}
          alt="Báo cáo chi tiết"
        />
      ),
      title: "Báo cáo chi tiết",
      onClickItem: handelOpenPageBaoCaoCT ,
    },
  ];

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  const data: IDataCharts[] = [];
  for (let i = 1; i < 30; i++) {
    data.push({
      x: i.toString(),
      y: getRandomInt(9000)
    });
  }





  return (
    <div className="Content-App">
      <ContentTitle title="Báo cáo doanh thu" />
      <div className="Content-body">
        <div className="Content-body_PlaylistPage">
          <CtrBCDoanhThu/>
          <ChartArea data={data}/>
          <ActionsPages dataRender={actionsPageQLTB} />
        </div>
      </div>
    </div>
  );
};

export default ContentPageBaoCaoDT;
