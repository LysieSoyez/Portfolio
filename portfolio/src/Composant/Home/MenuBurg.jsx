import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { StarIcon, AttachmentIcon, InfoIcon, EmailIcon, HamburgerIcon,} from '@chakra-ui/icons';
import Technologie from '../../Pages/Technologie';

function MenuBurg(){
return (
  <Menu>
    <MenuButton
      aria-label='Options'
      icon={<HamburgerIcon />}
      variant='outline'
    />
    <MenuList>
      <MenuItem icon={<StarIcon />}>
        <Technologie />
      </MenuItem>
      <MenuItem icon={<AttachmentIcon />}>
        Projets
      </MenuItem>
      <MenuItem icon={<InfoIcon />}>
        A propos
      </MenuItem>
      <MenuItem icon={<EmailIcon />}>
        Contacts
      </MenuItem>
    </MenuList>
  </Menu>
);
}
export default MenuBurg;
