import Tab from "@mui/joy/Tab";
import TabList from "@mui/joy/TabList";
import TabPanel from "@mui/joy/TabPanel";
import MuiTabs from "@mui/joy/Tabs";
import React from "react";

import Basics from "./Basics";
import Details from "./Details";
import Location from "./Location";

const Tabs: React.FC = () => (
  <MuiTabs
    defaultValue={0}
    sx={{
      backgroundColor: "transparent",
      px: 0,
      mt: 4
    }}
  >
    <TabList size="lg" sx={{ mb: 4 }}>
      <Tab>Location</Tab>
      <Tab>Basics</Tab>
      <Tab>Details</Tab>
    </TabList>

    <TabPanel value={0}>
      <Location />
    </TabPanel>

    <TabPanel value={1}>
      <Basics />
    </TabPanel>

    <TabPanel value={2}>
      <Details />
    </TabPanel>
  </MuiTabs>
);

export default Tabs;
