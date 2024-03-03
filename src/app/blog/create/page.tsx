import { BasicButton, LinkButton } from "@/components/button/button";
import BlogMarkdown from "@/components/layouts/blog/create/module/markdown";
import BlogTag from "@/components/layouts/blog/create/module/tag";
import BlogTitle from "@/components/layouts/blog/create/module/title";
import { TopBar } from "@/components/layouts/menu/topbar";
import { Box, Typography } from "@mui/material";
import React from "react";

//各テキストエリアのマージンボトム
const marginBottom: number = 4;

function BlogCreate() {
  return (
    <>
      <TopBar />
      <Typography variant="h6" sx={{ mb: marginBottom, textAlign: "center" }}>
        ブログ 新規作成
      </Typography>
      <Box
        sx={{
          m: "auto",
          maxWidth: 1000,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Box>
            <LinkButton text="戻る" link="/blog/list" />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box>
              <BasicButton text="一時保存" />
            </Box>
            <Box sx={{ ml: 2 }}>
              <BasicButton text="登録" />
            </Box>
          </Box>
        </Box>
        <BlogTitle />
        <BlogTag />
        <BlogMarkdown />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
            mt: 2,
          }}
        >
          <Box></Box>
          <Box sx={{ display: "flex" }}>
            <Box>
              <BasicButton text="一時保存" />
            </Box>
            <Box sx={{ ml: 2 }}>
              <BasicButton text="登録" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default BlogCreate;
