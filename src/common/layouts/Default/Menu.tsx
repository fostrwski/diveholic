import DashboardRounded from '@mui/icons-material/DashboardRounded';
import DownloadRounded from '@mui/icons-material/DownloadRounded';
import LogoutRounded from '@mui/icons-material/LogoutRounded';
import PersonRounded from '@mui/icons-material/PersonRounded';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import MuiMenu, { type MenuProps } from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import NextLink from 'next/link';
import React, { useState } from 'react';

import LearnHowToInstallModal from './LearnHowToInstall/Modal';

const Menu: React.FC<MenuProps> = ({ anchorEl, open, onClose }) => {
  const [openLearnHowToInstall, setOpenLearnHowToInstall] =
    useState<boolean>(false);

  const handleToggleLearnHowToInstall = () => {
    setOpenLearnHowToInstall(!openLearnHowToInstall);
  };

  return (
    <>
      <MuiMenu
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        variant="plain"
        placement="bottom-end"
      >
        <NextLink href="/" passHref>
          <MenuItem component="a">
            <ListItemDecorator>
              <DashboardRounded />
            </ListItemDecorator>
            Home
          </MenuItem>
        </NextLink>

        <NextLink href="/account" passHref>
          <MenuItem component="a">
            <ListItemDecorator>
              <PersonRounded />
            </ListItemDecorator>
            Account
          </MenuItem>
        </NextLink>

        <MenuItem onClick={handleToggleLearnHowToInstall}>
          <ListItemDecorator>
            <DownloadRounded />
          </ListItemDecorator>
          Install
        </MenuItem>

        <NextLink href="/api/auth/logout" passHref>
          <MenuItem component="a">
            <ListItemDecorator>
              <LogoutRounded />
            </ListItemDecorator>
            Sign out
          </MenuItem>
        </NextLink>
      </MuiMenu>

      <LearnHowToInstallModal
        open={openLearnHowToInstall}
        setOpen={setOpenLearnHowToInstall}
      />
    </>
  );
};

export default Menu;
