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
  const { pathname } = useLocation();
  const [menuList, setMenuList] = useState<MenuItem[]>([]);

  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
  useEffect(() => {
    setSelectedKeys([pathname]);
  }, [pathname]);
  console.log(selectedKeys);

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
  useMount(() => getMenuData());

  const onOpenChange = (openKeys: string[]) => {
    if (getArgsLength(openKeys, 0) || getArgsLength(openKeys, 1))
      return setOpenKeys(openKeys);
    const latestOpenKey = openKeys[openKeys.length - 1];
    if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys);
    setOpenKeys([latestOpenKey]);
  };

  const navigate = useNavigate();
  const clickMenu: MenuProps["onClick"] = ({ key }: { key: string }) => {
    navigate(key);
  };

  const toDefaultMenu = () => {
    navigate("/device");
  };
  return (
    <div>
      <div className="title" onClick={toDefaultMenu}>
        SAAS运营管理平台
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
    </div>
  );
};
