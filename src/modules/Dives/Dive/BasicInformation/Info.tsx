import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import React from "react";

interface InfoProps {
  title: string;
  value: string | number;
  icon: any;
  unit?: string;
}

const Info: React.FC<InfoProps> = ({ title, value, icon, unit }) => {
  return (
    <Typography level="h6" component="p">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          width: "100%",
        }}
      >
        <Typography component="span">{title}</Typography>
        <Chip
          size="lg"
          variant="outlined"
          startDecorator={icon}
          endDecorator={unit ? unit : ""}
        >
          {value}
        </Chip>
      </Box>
    </Typography>
  );
};

export default Info;