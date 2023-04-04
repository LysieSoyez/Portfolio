import Projects from "../../Pages/Projects";
import * as React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Technologie from "../../Pages/Technologie";
import Contact from "../../Pages/Contact";


function BarTab(){
  return (
    <>
    <div className="bartab">
      <Tabs isFitted  colorScheme="pink" align="center">
        <TabList mb='1em'>
          <Tab>Technos</Tab>
          <Tab>Projets</Tab>
          <Tab>About</Tab>
          <Tab>Contacts</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Technologie />
          </TabPanel>

          <TabPanel>
            <Projects />
          </TabPanel>

          <TabPanel>
            //A propos
          </TabPanel>

          <TabPanel>
            <Contact />
          </TabPanel>

        </TabPanels>
      </Tabs>
    </div>
    </>
  )
}

export default BarTab;