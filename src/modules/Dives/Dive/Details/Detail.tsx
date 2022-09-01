import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import React from "react";

export interface DetailProps {
  title: string;
  content: React.ReactNode;
  unit?: string;
  icon?: React.ReactElement;
}

const Detail: React.FC<DetailProps> = ({ title, content, unit, icon }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      {icon && (
        <Avatar size="lg" sx={{ alignSelf: "start" }}>
          {icon}
        </Avatar>
      )}

      <Box>
        <Typography component="p" textColor="GrayText">
          {title}
        </Typography>
        <Typography component="p" fontWeight="md">
          {content}
          {unit}
        </Typography>
      </Box>
    </Box>
  );
};

export default Detail;
