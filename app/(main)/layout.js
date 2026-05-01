import React from "react";
import { getOrCreateDbUser } from "@/lib/auth-user";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";

const MainLayout = async ({ children }) => {
  await getOrCreateDbUser();
  return <MainLayoutWrapper>{children}</MainLayoutWrapper>;
};

export default MainLayout;
