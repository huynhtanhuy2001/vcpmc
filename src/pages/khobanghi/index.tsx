import { Layout } from 'antd'
import React from 'react'
import SiderMenu from '../../components/common/Menu/SiderMenu'
import ContentPageKhoBG from '../../layout/ContentLayout/ContentPageKhoBG'
import LayoutHeader from '../../layout/Header/LayoutHeader'

const KhoBanGhiPages = () => {

    const {Content} = Layout
  return (
    <div className="MainApp">
    <Layout>
      <SiderMenu />
      <Layout>
        <LayoutHeader />
        <Content>
          <ContentPageKhoBG />
        </Content>
      </Layout>
    </Layout>
  </div>
  )
}

export default KhoBanGhiPages