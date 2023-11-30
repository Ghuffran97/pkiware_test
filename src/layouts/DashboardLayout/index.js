import React from 'react';
import { QuestionCircleOutlined, RightOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Flex, Layout, Menu, Typography, theme } from 'antd';
import styled from 'styled-components';
import CertificateTable from '../../components/MainContent/CertificateTable';
import TopBar from "../../components/Topbar";

const { Header, Content, Footer, Sider } = Layout;

const { Title } = Typography
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100vh" }}>
      <div style={{ background: "teal", height: "45px", width: "200px", position: "absolute", top: 0, zIndex: 999999, left: 0, }}>

      </div>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{ padding: "12px", maxWidth: "400px", marginTop: "45px" }}
      >
        <Flex align='baseline' gap={16}>
          <QuestionCircleOutlined style={{ color: "white" }} />
          <Title level={4} style={{ color: "white" }}>
            Dashboard
          </Title>
          <RightOutlined style={{ color: "white" }} />
        </Flex>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
            (icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `nav ${index + 1}`,
            }),
          )}
        />
      </Sider>
      <Layout>
        <TopBar background={colorBgContainer} />
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <CertificateTable />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
