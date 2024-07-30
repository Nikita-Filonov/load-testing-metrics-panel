import { Service } from '../../../Models/Services/Services';
import { FC } from 'react';
import { BaseListItem } from '../BaseListItem';
import CodeIcon from '@mui/icons-material/Code';
import IconButton from '@mui/material/IconButton';
import LinkIcon from '@mui/icons-material/Link';

type ServiceListItemProps = {
  service: Service;
  selected: boolean;
  onSelectService: (service: Service) => void;
};

export const ServiceListItem: FC<ServiceListItemProps> = ({ service, selected, onSelectService }) => {
  const onSelect = () => onSelectService(service);

  const onViewService = () => window.open(service.url, '_blank');

  return (
    <BaseListItem
      icon={<CodeIcon fontSize={'small'} />}
      title={service.name}
      onClick={onSelect}
      selected={selected}
      menu={
        <IconButton size={'small'} onClick={onViewService}>
          <LinkIcon fontSize={'small'} />
        </IconButton>
      }
    />
  );
};
