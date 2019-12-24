import React from "react";
import Box from "@material-ui/core/Box";

import qiuPic from "./qiu256.png"; // 告诉 Webpack 这个 JS 文件使用了这个图片

export default function Taoqiu() {
  return (
      <Box my={4}>
        <img src={qiuPic}  alt="qiu" style={{height:'256px', width:'256px'}} />
      </Box>
  );
}
