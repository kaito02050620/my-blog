"use client";

import { LinkButton } from "@/components/button/button";
import BlogSearch from "@/components/layouts/blog/list/search";
import EnhancedTable from "@/components/layouts/blog/list/table";
import { TopBar } from "@/components/layouts/menu/topbar";
import { Box, Typography } from "@mui/material";
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
      <Box
        sx={{
          m: "auto",
          maxWidth: 1400,
          minWidth: 1300,
        }}
      >
        <BlogSearch />
        <EnhancedTable />
      </Box>
      <LinkButton text="戻る" link="/login" />
    </>
  );
}

export default BlogList;
