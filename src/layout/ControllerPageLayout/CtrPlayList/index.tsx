import React from "react";
import { useParams } from "react-router-dom";

import BtnTabPlayList from "../../../components/control/btntabPlayList";
import SearchComponent from "../../../components/control/search";

import { IParams } from "../../../types";
import "./styles.scss";

const CtrPlayList = () => {
  const { control, tag }: IParams = useParams();

  return (
    <div className="Control-PlayList">
      <div className="Control-PlayList_Search">
        <SearchComponent textHint={"Tên chủ đề, người tạo,..."} width={500} />

        <BtnTabPlayList />
      </div>
    </div>
  );
};

export default CtrPlayList;
