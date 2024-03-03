import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { DateProvider } from "@/context/dateContext";
import { BasicButton, LinkButton } from "@/components/button/button";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

function BlogSearch() {
  return (
    <>
      <Box sx={{ mb: 1, width: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            id="standard-basic"
            label="タイトル、タグ名検索"
            variant="standard"
            sx={{ width: "300px" }}
          />

          <Box
            sx={{
              ml: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>ステータス：</Typography>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="作成中"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="完了"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="公開中"
            />
          </Box>
          <DateProvider>
            <Box
              sx={{
                ml: 3,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>日付：</Typography>
              <DatePicker label="月/日/年" disableFuture sx={{ width: 150 }} />
              <p>&nbsp;～&nbsp;</p>
              <DatePicker
                label="月/日/年"
                disableFuture
                defaultValue={dayjs()}
                sx={{ width: 150 }}
              />
            </Box>
          </DateProvider>
          <Box sx={{ ml: 3, display: "flex", justifyContent: "center" }}>
            <BasicButton text="検索" />
          </Box>
          <Box sx={{ ml: 3, display: "flex", justifyContent: "center" }}>
            <LinkButton text="新規作成" link="/blog/create" />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default BlogSearch;
