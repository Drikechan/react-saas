import { Menu } from "antd";
import type { MenuProps } from "antd";
import { getRouterList } from "@/api/user";
import React, { useEffect, useState } from "react";
import { MenuList } from "@/types/login";
import "./index.less";
import { getArgsLength, useMount } from "@/utils/func";
import { useLocation, useNavigate } from "react-router-dom";

export const LayoutMenu = () => {
  type MenuItem = Required<MenuProps>["items"][number];
  const getItem = (
    label: React.ReactNode,
    key?: React.Key | null,
    children?: MenuItem[],
    icon?: React.ReactNode
  ): MenuItem => {
    return {
      label,
      key,
      children,
      icon,
    } as MenuItem;
  };
  // 获取当前路径
  const { pathname } = useLocation();
  const [menuList, setMenuList] = useState<MenuItem[]>([]);

  // 展开菜单
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  // 选中的菜单
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
  useEffect(() => {
    setSelectedKeys([pathname]);
  }, [pathname]);

  // 处理接口返回的参数与Menu组件所需要的参数保持一致
  const deepLoopFloat = (menuList: MenuList[], options: MenuItem[] = []) => {
    menuList.map((item: MenuList) => {
      if (item.type === "button" || !item.type) return;
      if (!item.functionCodeVOList?.length)
        return options.push(getItem(item.name, item.code));

      options.push(
        getItem(
          item.name,
          item.code,
          deepLoopFloat(item.functionCodeVOList).length > 0
            ? deepLoopFloat(item.functionCodeVOList)
            : undefined
        )
      );
    });
    return options;
  };

  // 获取菜单
  const getMenuData = async () => {
    try {
      const { data } = await getRouterList({});
      if (!data) return;
      setMenuList(deepLoopFloat(data));
    } finally {
      console.log(1);
    }
  };

  // 初始化获取菜单函数
  useMount(() => getMenuData());

  // 保持只有一个菜单展开
  const onOpenChange = (openKeys: string[]) => {
    if (getArgsLength(openKeys, 0) || getArgsLength(openKeys, 1))
      return setOpenKeys(openKeys);
    const latestOpenKey = openKeys[openKeys.length - 1];
    if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys);
    setOpenKeys([latestOpenKey]);
  };

  const navigate = useNavigate();

  // 菜单点击到指定路由
  const clickMenu: MenuProps["onClick"] = ({ key }: { key: string }) => {
    navigate(key);
  };

  const toDefaultMenu = () => {
    navigate("/device");
  };
  return (
    <>
      <div className="title" onClick={toDefaultMenu}>
        React
      </div>
      <Menu
        mode={"inline"}
        theme={"dark"}
        triggerSubMenuAction="click"
        items={menuList}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={clickMenu}
      />
    </>
  );
};
