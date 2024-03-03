import { Box, TextField, Typography } from "@mui/material";
import React from "react";

function BlogTitle() {
  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2">タイトル</Typography>
        <TextField
          id="standard-basic"
          placeholder="タイトルを入力してください。"
          variant="standard"
          sx={{ width: 1 }}
        />
      </Box>
    </>
  );
}

export default BlogTitle;
