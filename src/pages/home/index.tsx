import React, { useState } from "react";
import { Layout } from "antd";
import SiderMenu from "../../components/common/Menu/SiderMenu";
import LayoutHeader from "../../layout/Header/LayoutHeader";
import HomeContent from "../../layout/ContentLayout/HomeContent/HomeContent";
import { useAppSelector } from "../../redux/hooks";

const { Header, Footer, Content } = Layout;

const HomePage = () => {
   const {currentUser} = useAppSelector(state=>state.auth)
   console.log(currentUser)
  return (
    <div className="MainApp">
      <Layout>
        <SiderMenu />
        <Layout>
          <LayoutHeader />
          <Content>
            <HomeContent currentUser={currentUser[0]} />
          </Content>
        </Layout>
   
      </Layout>
      
    </div>
  );
};

export default HomePage;
