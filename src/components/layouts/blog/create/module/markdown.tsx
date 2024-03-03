import Textarea from "@mui/joy/Textarea";
import { Typography } from "@mui/material";

export default function BlogMarkdown() {
  return (
    <>
      <Typography variant="subtitle2">本文</Typography>
      <Textarea
        aria-label="minimum height"
        minRows={20}
        placeholder="マークダウンで入力してください。"
        defaultValue="*** ---- ___"
      />
    </>
  );
}
