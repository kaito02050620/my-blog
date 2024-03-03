import { Box, TextField, Typography } from "@mui/material";
import React from "react";

function BlogTag() {
  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2">タグ設定（最大10個まで）</Typography>
        <TextField
          id="standard-basic"
          variant="standard"
          placeholder="タグを入力してください。"
          sx={{ width: 1 }}
        />
      </Box>
    </>
  );
}

export default BlogTag;
