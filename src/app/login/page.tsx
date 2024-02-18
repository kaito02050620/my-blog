import { LinkButton } from "@/components/button/button";
import { TopBar } from "@/components/layouts/menu/topbar";
import { Box, TextField, Typography } from "@mui/material";
import React from "react";

//各テキストエリアのマージンボトム
const marginBottom: number = 4;

function Login() {
  return (
    <>
      <TopBar />
      <Typography variant="h6" sx={{ mb: marginBottom, textAlign: "center" }}>
        ログイン
      </Typography>
      <Box sx={{ mb: marginBottom, textAlign: "center" }}>
        <TextField required id="outlined-required" label="ユーザID" />
      </Box>
      <Box sx={{ mb: marginBottom, textAlign: "center" }}>
        <TextField
          id="outlined-password-input"
          required
          label="パスワード"
          type="password"
          autoComplete="current-password"
        />
      </Box>
      <Box sx={{ mb: marginBottom, textAlign: "center" }}>
        <LinkButton text="ログイン" link="/blog/list" />
      </Box>
    </>
  );
}

export default Login;
