import FilterListRounded from '@mui/icons-material/FilterListRounded';
import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRounded from '@mui/icons-material/KeyboardArrowUpRounded';
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import type { Dive } from 'common/types';
import React, {
  type Dispatch,
  type SetStateAction,
  useMemo,
  useState,
} from 'react';

import type { FiltersState } from '../index';
import Location from './Location';

interface FiltersProps {
  dives: Array<Dive>;
  filters: FiltersState;
  setFilters: Dispatch<SetStateAction<FiltersState>>;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
}

const sortingOptions = [
  {
    title: 'Latest dives',
    value: 'dateDescending',
    startDecorator: <KeyboardArrowDownRounded />,
  },
  {
    title: 'Oldest dives',
    value: 'dateAscending',
    startDecorator: <KeyboardArrowUpRounded />,
  },
];

const Filters: React.FC<FiltersProps> = ({
  dives,
  filters,
  setFilters,
  sortBy,
  setSortBy,
}) => {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenMenu = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const handleFiltersToggle = () => {
    setShowFilters(!showFilters);
  };

  const filtersCount = useMemo(
    () => filters.countryCodes.length,
    [filters.countryCodes],
  );

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Button
          color="neutral"
          variant="outlined"
          onClick={handleOpenMenu}
          size="sm"
          aria-controls={open ? 'sortingOptions' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          Sort
        </Button>

        <Badge color="info" variant="outlined" badgeContent={filtersCount}>
          <Button
            color="info"
            variant="outlined"
            startDecorator={<FilterListRounded />}
            onClick={handleFiltersToggle}
            aria-controls="filters"
            aria-expanded={showFilters}
          >
            Filters
          </Button>
        </Badge>
      </Box>

      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseMenu}
        placement="bottom-start"
        variant="plain"
        size="sm"
        id="sortingOptions"
      >
        {sortingOptions.map((sortingOption) => (
          <MenuItem
            key={sortingOption.title}
            color={sortBy === sortingOption.value ? 'info' : 'neutral'}
            onClick={() => setSortBy(sortingOption.value)}
          >
            <ListItemDecorator>
              {sortingOption.startDecorator}
            </ListItemDecorator>
            {sortingOption.title}
          </MenuItem>
        ))}
      </Menu>

      <div id="filters">
        {showFilters && (
          <Location dives={dives} filters={filters} setFilters={setFilters} />
        )}
      </div>
    </>
  );
};

export default Filters;
