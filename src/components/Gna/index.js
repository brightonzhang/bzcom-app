import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
// import ProTip from "./ProTip";

import gnaPic from "./e9440a5e2e616c65.png"; // 告诉 Webpack 这个 JS 文件使用了这个图片

export default function Gna() {
  return (
      <Box my={4}>
        <img src={gnaPic}  alt="gna" style={{height:'256px', width:'256px'}} />
        <Typography variant="h4" component="h1" gutterBottom>
          你好！我是盖娜
        </Typography>
        <Typography variant="h6" gutterBottom>
          为您量身定制个性化的公众号和小程序客服体验
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://web.mommychoose.cn/gna/welcome"
        >
          即刻开始体验
        </Button>
      </Box>
  );
}
