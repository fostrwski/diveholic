import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import React from "react";

interface DetailProps {
  title: string;
  content: string | number;
  icon: any;
  unit?: string;
}

const Detail: React.FC<DetailProps> = ({ title, content, icon, unit }) => (
  <Typography level="h6" component="div">
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        width: "100%"
      }}
    >
      <Typography component="span">{title}</Typography>
      <Chip
        size="lg"
        variant="outlined"
        startDecorator={icon}
        endDecorator={unit || ""}
      >
        {typeof content === "string"
          ? content.slice(0, 1).toUpperCase() + content.slice(1)
          : content}
      </Chip>
    </Box>
  </Typography>
);

export default Detail;
