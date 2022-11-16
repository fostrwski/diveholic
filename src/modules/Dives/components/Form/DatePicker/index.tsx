import CalendarTodayRounded from "@mui/icons-material/CalendarTodayRounded";
import EditRounded from "@mui/icons-material/EditRounded";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
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
import { useNewDiveContext } from "common/context/NewDive";
import formatDate from "common/utils/formatDate";
import React, { useState } from "react";

import useDate from "../hooks/useDate";
import getFirstDayOfMonth from "../utils/getFirstDayOfMonth";
import months from "../utils/months";
import weekdays from "../utils/weekdays";

interface DatePickerProps {
  initialDate?: Date;
}

const DatePicker: React.FC<DatePickerProps> = ({ initialDate }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { newDive, updateNewDiveProp } = useNewDiveContext();
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
    updateNewDiveProp("date", date);
    handleModalClose();
  };

  const handleDayRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDay(parseInt(e.target.value));
  };

  const handleMonthSelectChange = (month: string) => {
    const monthNumeric = months.indexOf(month);
    setMonth(monthNumeric);
  };

  const handleYearSelectChange = (year: number) => {
    setFullYear(year);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Avatar sx={{ "--Avatar-size": "52px" }}>
            <CalendarTodayRounded sx={{ fontSize: "24px" }} />
          </Avatar>
          <FormControl>
            <Typography level="h6" component="div">
              <FormLabel sx={{ color: "GrayText" }}>Date</FormLabel>
              <>
                {newDive.date ? (
                  <>
                    {formatDate(newDive.date)} &bull;{" "}
                    <Link
                      endDecorator={<EditRounded />}
                      color="warning"
                      level="body1"
                      component="button"
                      onClick={handleModalToggle}
                      sx={{ p: 0 }}
                      aria-label="Edit date"
                    >
                      Edit
                    </Link>
                  </>
                ) : (
                  <Link
                    component="button"
                    onClick={handleModalToggle}
                    level="h5"
                    color="neutral"
                    aria-label="Set date"
                    sx={{ p: 0 }}
                  >
                    Click here to set
                  </Link>
                )}
              </>
            </Typography>
          </FormControl>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
      >
        <ModalDialog
          sx={{
            overflow: "auto",
            top: "unset",
          }}
          layout="fullscreen"
        >
          <Typography level="h4" component="p" id="modal-title">
            Select date
          </Typography>

          <Box component="form" mt={2}>
            <Grid container spacing={2}>
              <Grid xs={6}>
                <FormControl>
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
                </FormControl>
              </Grid>
              <Grid xs={6}>
                <FormControl>
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
                </FormControl>
              </Grid>

              <Grid xs={12}>
                <RadioGroup row value={day} aria-label="Select day of month">
                  <Grid container columns={7} sx={{ width: "100%" }}>
                    {weekdays.map((weekday: string) => (
                      <Grid xs={1} key={weekday}>
                        <Typography fontWeight="lg">{weekday}</Typography>
                      </Grid>
                    ))}
                    {/* Create white space to properly align days of month with matching weekdays (hard to explain) */}
                    {[...Array(getFirstDayOfMonth(date))].map((_, index) => (
                      <Grid xs={1} key={index} />
                    ))}
                    {[...Array(daysInMonth)].map((_, index) => {
                      const dayInMonth = index + 1;
                      const checked = dayInMonth === day;
                      return (
                        <Grid key={dayInMonth} xs={1}>
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
                              onChange={(e) => handleDayRadioChange(e)}
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
                alignItems: "center",
                mt: 6,
                gap: 2,
              }}
            >
              <Button
                variant="plain"
                color="neutral"
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
