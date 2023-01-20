import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import React from "react";

export interface DetailProps {
  title: string;
  content: React.ReactNode;
  unit?: string;
  icon?: React.ReactElement;
}

const Detail: React.FC<DetailProps> = ({ title, content, unit, icon }) => (
  <Sheet
    variant="soft"
    sx={{ display: "flex", alignItems: "center", gap: 1.2, px: 0.8, py: 1.6 }}
  >
    {icon && (
      <Avatar size="sm" variant="plain">
        {icon}
      </Avatar>
    )}

    <Box>
      <Typography component="p" level="subtitle2">
        {title}
      </Typography>
      <Typography component="p">
        {content ? content + " " + unit : "Unknown"}
      </Typography>
    </Box>
  </Sheet>
);

export default Detail;
