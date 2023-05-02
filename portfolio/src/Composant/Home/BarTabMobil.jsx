import Projects from "../../Pages/Projects";
import * as React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Technologie from "../../Pages/Technologie";
import Contact from "../../Pages/Contact";
import About from "../../Pages/About";


function BarTabMobil(){
  return (
    <>
    <div className="bartabmobil">
    <Tabs isFitted variant='unstyled' colorScheme="black">


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
      <TabList mb='1em'>
        <Tab><img src="/images/icons/la-technologie.png" alt="Techno" /></Tab>
        <Tab><img src="/images/icons/project-management.png" alt="Projects" /></Tab>
        <Tab><img src="/images/icons/information-button.png" alt="About" /></Tab>
        <Tab><img src="/images/icons/letter.png" alt="Contacts" /></Tab>
      </TabList>
    </Tabs>
    </div>
    </>
  )
}

export default BarTabMobil;