import Projects from "../../Pages/Projects";
import * as React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Technologie from "../../Pages/Technologie";


function BarTab(){
  return (
    <>
    <div className="bartab">
    <Tabs isFitted variant='enclosed' colorScheme="teal">
      <TabList mb='1em'>
        <Tab>Techonologies</Tab>
        <Tab>Projets</Tab>
        <Tab>A propos</Tab>
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
          //Contacts
        </TabPanel>

      </TabPanels>
    </Tabs>
    </div>
    </>
  )
}

export default BarTab;