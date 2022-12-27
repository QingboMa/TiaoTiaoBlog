import React, { useEffect, useMemo, useState } from "react";
import {
  Anchor,
  Avatar,
  Breadcrumb,
  Button,
  Col,
  Divider,
  Dropdown,
  Image,
  Layout,
  Menu,
  message,
  Row,
  theme,
} from "antd";
import Logo from "../../Icons/Logo";
import {
  Outlet,
  useNavigate,
  Link,
  useLocation,
  useOutlet,
  useResolvedPath,
  resolvePath,
} from "react-router-dom";
import {
  BarChartOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  NotificationOutlined,
  UserOutlined,
  RiseOutlined,
  DownOutlined,
} from "@ant-design/icons";

import { Input, Space } from "antd";
import isAuth from "@/pages/Auth/index";
import { MenuItem } from "@/typings";

const { Search } = Input;
//菜单类型

const onSearch = (value: string) => console.log(value);
//菜单Item类型
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return { key, icon, children, label } as MenuItem;
}

const items: MenuItem[] = [
  getItem("文章列表", "/home/artcle", <BarChartOutlined />),
  getItem("Springboot", "1", <PieChartOutlined />),
  getItem("SpringCloud", "2", <DesktopOutlined />),
  getItem("前端", "前端父目录", <UserOutlined />, [
    getItem("React", "3"),
    getItem("Vue", "4"),
    getItem("Angular", "5"),
  ]),
  getItem("后端", "后端父目录", <RiseOutlined />, [
    getItem("Java", "6"),
    getItem("数据库", "7"),
    getItem("Docker", "8"),
  ]),
  getItem("归档", "9", <FileOutlined />),
];

const HeaderComp: React.FC = (props) => {
  const outlet = useOutlet();
  // console.log(outlet);
  const resolvePath = useResolvedPath("/func/id=21");
  // console.log(resolvePath);
  var navigator = useNavigate();

  const menuClickHandle = (menu: MenuItem) => {
    navigator(`${menu?.key}`, { replace: true });
    console.log(`点击了导航栏并跳转到${menu?.key}`);
  };
  return (
    <Row>
      <Col span={3}>
        <Logo />
      </Col>
      <Col span={12}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["/home/artcle"]}
          items={items}
          onClick={menuClickHandle}
        />
      </Col>
      <Col offset={1} span={3}>
        <Search
          style={{ margin: "15px", textAlign: "center" }}
          size="large"
          placeholder="Search Anything"
          onSearch={() => {
            onSearch("2");
          }}
          enterButton
        />
      </Col>
      <Col offset={3} span={2}>
        {isAuth() ? (
          <React.Fragment>
            <Dropdown menu={{ items }} arrow={true} mouseLeaveDelay={0.5}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Avatar
                    src="https://ts1.cn.mm.bing.net/th/id/R-C.8672512c922151b7d4f7cde3f763cb3f?rik=Jm6vIGG8XWGfwA&riu=http%3a%2f%2fhimg2.huanqiu.com%2fattachment2010%2f2018%2f1214%2f20181214031141628.jpg&ehk=4z2Ge8CMPLIj%2bAuz1H5X7h4brWDqyU4sIZjfUKQqQgM%3d&risl=&pid=ImgRaw&r=0"
                    size="large"
                  />
                </Space>
              </a>
            </Dropdown>
          </React.Fragment>
        ) : (
          <Button
            size="large"
            onClick={() => {
              navigator("/login");
            }}
          >
            登录/注册
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default HeaderComp;