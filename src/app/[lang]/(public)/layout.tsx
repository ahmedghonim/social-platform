import MainLayout from "@/layout/MainLayout";
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <MainLayout>{children}</MainLayout>;
};

export default Layout;
