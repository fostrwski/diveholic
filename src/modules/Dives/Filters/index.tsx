import FilterListRounded from "@mui/icons-material/FilterListRounded";
import Badge from "@mui/joy/Badge";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import type { Dive } from "common/types";
import React, {
  type Dispatch,
  type SetStateAction,
  useMemo,
  useState
} from "react";

import type { FiltersState } from "../index";
import Location from "./Location";

interface FiltersProps {
  dives: Array<Dive>;
  filters: FiltersState;
  setFilters: Dispatch<SetStateAction<FiltersState>>;
}

const Filters: React.FC<FiltersProps> = ({ dives, filters, setFilters }) => {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const handleFiltersToggle = () => {
    setShowFilters(!showFilters);
  };

  const filtersCount = useMemo(
    () => filters.countryCodes.length,
    [filters.countryCodes]
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2
        }}
      >
        <Badge color="info" variant="outlined" badgeContent={filtersCount}>
          <Button
            color="neutral"
            variant="outlined"
            startDecorator={<FilterListRounded />}
            onClick={handleFiltersToggle}
          >
            Filters
          </Button>
        </Badge>

        <Button color="neutral" variant="plain">
          Sort
        </Button>
      </Box>

      {showFilters && (
        <Location dives={dives} filters={filters} setFilters={setFilters} />
      )}
    </>
  );
};

export default Filters;
