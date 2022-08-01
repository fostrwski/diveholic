import { BarChartRounded } from "@mui/icons-material";
import DownloadRounded from "@mui/icons-material/DownloadRounded";
import TimelapseRounded from "@mui/icons-material/TimelapseRounded";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import React from "react";

const Statistics: React.FC = () => {
  return (
    <>
      <Typography startDecorator={<BarChartRounded />} level="h4" component="div">
        Statistics
      </Typography>

      <List
        size="lg"
        sx={{
          mt: 2,
          "--List-item-minHeight": "6px",
        }}
      >
        <ListItem>
          <ListItemDecorator>
            <TimelapseRounded />
          </ListItemDecorator>
          Total 574min
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <DownloadRounded />
          </ListItemDecorator>
          Max 32.2m
        </ListItem>
      </List>
    </>
  );
};

export default Statistics;
