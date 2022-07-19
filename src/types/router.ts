import React from "react";

export interface MetaType {
  title: string;
  keepAlive?: boolean;
  key?: string;
}

export interface RouterOptionType {
  caseSensitive?: boolean;
  children?: RouterOptionType[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
  meta?: MetaType;
  isLink?: string;
}
