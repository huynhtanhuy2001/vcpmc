import React from "react";
import SearchComponent from "../../../components/control/search";
import CtrSelect from "../../../components/control/select";
import './styles.scss'

const CtrPlayListDSBG = () => {
  const dataThLoai = [
    { label: "Tất cả", value: "all" },
    { label: "Video", value: "Video" },
    { label: "Audio", value: "Audio" },
  ];
  const dataPLmau = [
    { label: "Tất cả", value: "all" },
    { label: "Playlist 1", value: "Playlist 1" },
    { label: "Playlist 2", value: "Playlist 2" },
  ];
  return (
    <div className="Control-PlayList">
      <div className="Control-PlayList_Title">
        <p>Danh sách bản ghi được thêm vào Playlist</p>
      </div>
      <div className="Control-PlayList_SumBG">
        <div className="Control-PlayList_SumBG-item">
          <label htmlFor="Tongsl">Tổng số:</label>
          <span>0 bản ghi</span>
        </div>
        <div className="Control-PlayList_SumBG-item">
          <label htmlFor="TongTl">Tổng thời lượng:</label>
          <span>--:--:--</span>
        </div>
      </div>
      <div className="Control-PlayList_BG_Search">
        <SearchComponent textHint={"Tên bản ghi, ca sĩ..."} />
      </div>
    </div>
  );
};

export default CtrPlayListDSBG;
