import CalendarTodayRounded from "@mui/icons-material/CalendarTodayRounded";
import EditRounded from "@mui/icons-material/EditRounded";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormLabel from "@mui/joy/FormLabel";
import Grid from "@mui/joy/Grid";
import Link from "@mui/joy/Link";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Option from "@mui/joy/Option";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Select from "@mui/joy/Select";
import Typography from "@mui/joy/Typography";
import useDate from "common/hooks/useDate";
import formatDate from "common/utils/formatDate";
import React, { useState } from "react";

import months from "./months";

interface DatePickerProps {
  diveDate: any;
  setDate: (date: Date) => void;
  initialDate?: Date;
}

const DatePicker: React.FC<DatePickerProps> = ({
  diveDate,
  setDate,
  initialDate,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    date,
    setDay,
    setMonth,
    setFullYear,
    day,
    month,
    fullYear,
    daysInMonth,
  } = useDate(initialDate);

  const handleModalToggle = () => {
    setOpen(!open);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleModalDone = () => {
    setDate(date);
    handleModalClose();
  };

  const handleRadioDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDay(parseInt(e.target.value));
  };

  const handleMonthSelectChange = (value: string) => {
    const monthNumeric = months.indexOf(value);
    setMonth(monthNumeric);
  };

  const handleYearSelectChange = (value: number) => {
    setFullYear(value);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Avatar sx={{ "--Avatar-size": "52px" }}>
            <CalendarTodayRounded sx={{ fontSize: "24px" }} />
          </Avatar>
          <Typography level="h6" component="p">
            <FormLabel sx={{ color: "GrayText" }}>Date</FormLabel>
            <>
              {diveDate ? (
                <>
                  {formatDate(diveDate)} &bull;{" "}
                  <Link
                    endDecorator={<EditRounded />}
                    color="warning"
                    level="body1"
                    component="button"
                    onClick={handleModalToggle}
                    sx={{ p: 0 }}
                  >
                    Edit
                  </Link>
                </>
              ) : (
                <Link
                  component="button"
                  onClick={handleModalToggle}
                  level="h5"
                  sx={{ p: 0, color: "text.primary" }}
                >
                  Click here to set
                </Link>
              )}
            </>
          </Typography>
        </Box>
      </Box>

      <Modal open={open} onClose={handleModalClose}>
        <ModalDialog
          sx={{
            overflow: "auto",
            top: "unset",
          }}
          layout="fullscreen"
        >
          <Typography level="h4" component="p">
            Select date
          </Typography>

          <Box component="form" mt={2}>
            <Grid container spacing={2}>
              <Grid xs={6}>
                <FormLabel>Month</FormLabel>
                <Select
                  onChange={(value) => handleMonthSelectChange(value!)}
                  value={months[month]}
                  componentsProps={{
                    listbox: {
                      sx: {
                        maxHeight: 280,
                        overflow: "auto",
                      },
                    },
                  }}
                >
                  {months.map((month: string) => (
                    <Option key={month} value={month} label={month}>
                      {month}
                    </Option>
                  ))}
                </Select>
              </Grid>
              <Grid xs={6}>
                <FormLabel>Year</FormLabel>
                <Select
                  onChange={(value) => handleYearSelectChange(value!)}
                  value={fullYear}
                  componentsProps={{
                    listbox: {
                      sx: {
                        maxHeight: 280,
                        overflow: "auto",
                      },
                    },
                  }}
                >
                  {[...Array(new Date().getFullYear() - 1970 + 1)].map(
                    (_, index) => {
                      const year = index + 1970;
                      return (
                        <Option key={index} value={year}>
                          {year}
                        </Option>
                      );
                    }
                  )}
                </Select>
              </Grid>

              <Grid xs={12}>
                <RadioGroup row value={day}>
                  <Grid container columns={7} sx={{ width: "100%" }}>
                    {[...Array(daysInMonth)].map((_, index) => {
                      const dayInMonth = index + 1;
                      const checked = dayInMonth === day;
                      return (
                        <Grid key={index} xs={1}>
                          <Avatar
                            variant={checked ? "soft" : "plain"}
                            size="sm"
                          >
                            <Radio
                              value={dayInMonth}
                              label={dayInMonth}
                              overlay
                              disableIcon
                              variant="plain"
                              sx={{ borderRadius: "sm" }}
                              onChange={(e) => handleRadioDayChange(e)}
                            />
                          </Avatar>
                        </Grid>
                      );
                    })}
                  </Grid>
                </RadioGroup>
              </Grid>
            </Grid>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 6,
                gap: 2,
              }}
            >
              <Button
                color="neutral"
                variant="plain"
                onClick={handleModalClose}
              >
                Cancel
              </Button>
              <Button color="neutral" onClick={handleModalDone} size="lg">
                Done
              </Button>
            </Box>
          </Box>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default DatePicker;
