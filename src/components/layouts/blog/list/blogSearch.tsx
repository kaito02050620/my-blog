import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import React from "react";
import { DateProvider } from "@/context/dateContext";

function BlogSearch() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <TextField
          id="standard-basic"
          label="タイトル、タグ名検索"
          variant="standard"
        />
        <Box>
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
          <DemoItem label="作成日">
            <DesktopDatePicker defaultValue={dayjs("2022-04-17")} />
          </DemoItem>
          <DemoItem>
            <DesktopDatePicker defaultValue={dayjs("2022-04-17")} />
          </DemoItem>
        </DateProvider>
      </Box>
    </>
  );
}

export default BlogSearch;
