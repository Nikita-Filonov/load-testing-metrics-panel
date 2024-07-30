import React, { Fragment, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { AppSettingsModal } from '../Modals/Settings/AppSettingsModal';
import ServiceLabel from '../Labels/Services/ServiceLabel';

export const NavigationNavbarActions = () => {
  const [appSettingsModal, setAppSettingsModal] = useState(false);

  const onAppSettings = () => setAppSettingsModal(true);

  return (
    <Fragment>
      <ServiceLabel onSelectLabel={onAppSettings} />
      <IconButton color="inherit" onClick={onAppSettings}>
        <SettingsOutlinedIcon />
      </IconButton>
      <AppSettingsModal modal={appSettingsModal} setModal={setAppSettingsModal} />
    </Fragment>
  );
};