import React from "react";
import { useParams } from "react-router-dom";

import ContentTitle from "../../../components/common/Content/contentTitle";
import ChiTietHDKT from "../../../components/form/ChiTietHDKT";
import TabPageChiTiet from "../../../components/tabbar/tabpageChiTiet";
import TabPageQl from "../../../components/tabbar/tabpageQL";
import { IParams } from "../../../types";

const ContentChiTietHDKT = () => {
  const { id }: IParams = useParams();

  const keyPath = id?.slice(0, id.indexOf("_"));
  const sohd = id?.slice(id.indexOf("_") + 1);

  return (
    <div className="Content-App">
      <ContentTitle title={`Hợp đồng khai thác - ${sohd}`} />
      <div className="Content-body">
        <ChiTietHDKT />
      </div>
    </div>
  );
};

export default ContentChiTietHDKT;
