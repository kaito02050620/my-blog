"use client";

import { LinkButton } from "@/components/button/button";
import BlogSearch from "@/components/layouts/blog/list/blogSearch";
import EnhancedTable from "@/components/layouts/blog/list/blogTable";
import { TopBar } from "@/components/layouts/menu/topbar";
import { Typography } from "@mui/material";
import React from "react";

//各テキストエリアのマージンボトム
const marginBottom: number = 4;

function BlogList() {
  return (
    <>
      <TopBar />
      <Typography variant="h6" sx={{ mb: marginBottom, textAlign: "center" }}>
        ブログ 一覧
      </Typography>
      <BlogSearch />
      <EnhancedTable />
      <LinkButton text="戻る" link="/login" />
    </>
  );
}

export default BlogList;
