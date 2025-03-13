import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabelComp from "./TabelComp";
// import GetListOfProducts from "../product/GetListOfProducts";
import { TabelComp2 } from "./TabelComp2";
import { Tabs } from "@mui/material";
import GetListOfProducts from "../product/ListOfProducts";

const TabComp = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile={true}
          >
            <Tab
              label="Company Active"
              value="1"
              sx={{ textTransform: "none" }}
            />
            <Tab
              label="Company Inactive"
              value="2"
              sx={{ textTransform: "none" }}
            />
            <Tab
              label="External Active"
              value="3"
              sx={{ textTransform: "none" }}
            />
            <Tab
              label="External In Active"
              value="4"
              sx={{ textTransform: "none" }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <GetListOfProducts />
        </TabPanel>
        <TabPanel value="2">
          <TabelComp />
        </TabPanel>
        <TabPanel value="3">
          <TabelComp />
        </TabPanel>
        <TabPanel value="4">
          <TabelComp />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default TabComp;
