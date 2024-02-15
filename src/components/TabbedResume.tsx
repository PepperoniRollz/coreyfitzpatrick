import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Resume from "./routes/Resume";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Grid } from "@mui/material";

const TabbedResume = () => (
  <>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Tabs>
        <TabList>
          <Tab>Education</Tab>
          <Tab>Work History</Tab>
          <Tab>Programming Languages</Tab>
          <Tab>Technologies</Tab>
        </TabList>

        <TabPanel>
          <Box
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            justifyContent={"center"}
          >
            <List>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary="2022 Fairmont State University - BS Computer Science" />
                </ListItem>
              </ListItem>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary="2010 WVJC - Assosicates - Business Administration" />
                </ListItem>
              </ListItem>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary="2006 - Fairmont Senior High School" />
                </ListItem>
              </ListItem>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary="1997 - Watson Elementary School" />
                </ListItem>
              </ListItem>
            </List>
            <Divider />
          </Box>
        </TabPanel>
        <TabPanel>
          <Box
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            justifyContent={"center"}
          >
            <List>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary="2021-2023 Leidos - Software Engineer - 2021-current" />
                </ListItem>
              </ListItem>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary=" 2018-2019 Veritas Contracting - HR/Accounting" />
                </ListItem>
              </ListItem>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary="2014-2018 Mylan Pharmaceuticals - Packaging" />
                </ListItem>
              </ListItem>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary="2008-2014 Aegis Communications - Trainer/Supervisor" />
                </ListItem>
              </ListItem>
            </List>
            <Divider />
          </Box>
        </TabPanel>
        <TabPanel>
          <Box
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            justifyContent={"center"}
          >
            <List>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary="std::cout << 'C++'" />
                </ListItem>
              </ListItem>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary="console.log('Javascript')" />
                </ListItem>
              </ListItem>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary="fmt.Println('Go')" />
                </ListItem>
              </ListItem>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary="System.out.println('Java')" />
                </ListItem>
              </ListItem>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary="OUTPUT 'Pseudo Code'" />
                </ListItem>
              </ListItem>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary="message: string = 'Typescript'" />
                </ListItem>
              </ListItem>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary="print('Python')" />
                </ListItem>
              </ListItem>
            </List>
            <Divider />
          </Box>
        </TabPanel>
        <TabPanel>
          <Box
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            justifyContent={"center"}
          >
            <List>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary="React-Js" />
                </ListItem>
              </ListItem>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary="Docker" />
                </ListItem>
              </ListItem>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary="Terraform" />
                </ListItem>
              </ListItem>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary="Kubernetes" />
                </ListItem>
              </ListItem>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary="My Toaster" />
                </ListItem>
              </ListItem>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary="Git" />
                </ListItem>
              </ListItem>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary="SpringBoot" />
                </ListItem>
              </ListItem>
              <ListItem disablePadding>
                <ListItem>
                  <ListItemText primary="AWS" />
                </ListItem>
              </ListItem>
            </List>
            <Divider />
          </Box>
        </TabPanel>
      </Tabs>
      <Resume></Resume>
    </Grid>
  </>
);

export default TabbedResume;
