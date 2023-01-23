import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import React from "react";

export interface InfoProps {
  title: string;
  content: string;
  unit?: string;
  icon?: React.ReactElement;
}

const Info: React.FC<InfoProps> = ({ title, content, unit, icon }) => (
  <Sheet sx={{ display: "flex", alignItems: "center", gap: 2, px: 2, py: 1.4 }}>
    <Box>
      <Typography component="p" level="subtitle2" startDecorator={icon}>
        {title}
      </Typography>
      <Typography component="p" endDecorator={content && unit ? unit : ""}>
        {content ? content : "Unknown"}
      </Typography>
    </Box>
  </Sheet>
);

export default Info;
