import Projects from "../../Pages/Projects";
import * as React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Technologie from "../../Pages/Technologie";
import Contact from "../../Pages/Contact";
import About from "../../Pages/About";

function BarTab(){
  return (
    <>
    <div className="bartab">
      <Tabs isFitted  colorScheme="black" align="center">
        <TabList mb='1em'>
          <Tab>Technos</Tab>
          <Tab>Projets</Tab>
          <Tab>About</Tab>
          <Tab>Contact</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Technologie />
          </TabPanel>

          <TabPanel>
            <Projects />
          </TabPanel>

          <TabPanel>
            <About />
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