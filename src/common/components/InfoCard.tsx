import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import React from "react";

export interface InfoCardProps {
  title: string;
  content: string | number;
  unit?: string;
  icon?: React.ReactElement | string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content, unit, icon }) => (
  <Sheet
    variant="soft"
    sx={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 2,
      px: 2,
      py: 1.4
    }}
  >
    <Box>
      <Typography
        component="p"
        level="subtitle2"
        sx={{ alignItems: typeof icon === "string" ? "" : "flex-start" }}
        startDecorator={icon}
      >
        {title}
      </Typography>
      <Typography component="p" endDecorator={content && unit ? unit : ""}>
        {content}
      </Typography>
    </Box>
  </Sheet>
);

export default InfoCard;
