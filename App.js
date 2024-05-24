import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

import routes from './routes'

import { getPosts } from './service' 

const { Header, Content, Sider } = Layout;

const navRoutes = routes.filter((route) => route.isNav === true)

// const items1 = ['1', '2'].map((key) => ({
//   key,
//   label: `project ${key}`,
// }));

// const items2 = [LaptopOutlined, LaptopOutlined].map((icon, index) => {
//   const key = String(index + 1);
//   return {
//     key: `project ${key}`,
//     icon: React.createElement(icon),
//     label: `productInfo ${key}`,
//     children: new Array(2).fill(null).map((_, j) => {
//       const subKey = index * 2 + j + 1;
//       return {
//         key: subKey,
//         label: `detail ${subKey}`,
//       };
//     }),
//   };
// });

function App() {

  // const componentDidMount = () => {
  //   getPosts().then(resp =>
  //   {console.log(resp)})
  // }

  // this.componentDidMount()
  
  // injectScripts = () => {
  //   const customerScripts = '<script scr="https://cdn.bootcss.com/jquery/">'
  //   const doms = new DOMParser()
  //   .parseFromString(customerScripts, 'text/html')
  //   .querySelector('head')
  //   .childNodes
  //   return doms
  // }

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
              }}
            >
              <Menu.Item key="1">project 1</Menu.Item>
              <Menu.Item key="2">project 2</Menu.Item>
            </Menu>
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
            <button>content</button>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};
export default App;