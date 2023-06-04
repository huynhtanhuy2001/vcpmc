import React from "react";
import { useHistory } from "react-router-dom";
import ActionsPages from "../../../components/actionpages/ActionPages";

import ContentTitle from "../../../components/common/Content/contentTitle";
import SearchComponent from "../../../components/control/search";
import TabPageQl from "../../../components/tabbar/tabpageQL";
import TablePlayLits from "../../../components/table/tbPlaylist";
import CtrPlayList from "../../ControllerPageLayout/CtrPlayList";

const ContentPagePlayList = () => {
  const history = useHistory()
  const currentpath = history.location.pathname
  const handleThemPlayList =()=>{
    history.push(`${currentpath}/create-playlist`)
  }
  const actionsPagePlayList = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/addplaylist.png")}
          width={32}
          alt="Thêm Playlist"
        />
      ),
      title: "Thêm Playlist",
      onClickItem:handleThemPlayList,
    },
  ];

  return (
    <div className="Content-App">
      <ContentTitle title="Playlist" />
      <div className="Content-body">
        <div className="Content-body_PlaylistPage">
          <CtrPlayList />
          <TablePlayLits />
          <ActionsPages dataRender={actionsPagePlayList} />
        </div>
      </div>
    </div>
  );
};

export default ContentPagePlayList;
