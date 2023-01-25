import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import React from "react";

export interface InfoCardProps {
  title: string;
  content: string | number;
  unit?: string;
  icon?: React.ReactElement;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content, unit, icon }) => (
  <Sheet variant="soft" sx={{ display: "flex", alignItems: "center", gap: 2, px: 2, py: 1.4 }}>
    <Box>
      <Typography component="p" level="subtitle2" startDecorator={icon}>
        {title}
      </Typography>
      <Typography component="p" endDecorator={content && unit ? unit : ""}>
        {content}
      </Typography>
    </Box>
  </Sheet>
);

export default InfoCard;
