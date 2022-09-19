import CalendarTodayRounded from "@mui/icons-material/CalendarTodayRounded";
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
import CheckRounded from "@mui/icons-material/CheckRounded";
import EditRounded from "@mui/icons-material/EditRounded";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import FormLabel from "@mui/joy/FormLabel";
import Grid from "@mui/joy/Grid";
import Link from "@mui/joy/Link";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Option from "@mui/joy/Option";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Select from "@mui/joy/Select";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import useDate from "common/hooks/useDate";
import formatDate from "common/utils/formatDate";
import React, { useEffect, useState } from "react";

import isEqualDate from "./isEqualDate";
import months from "./months";
import presetDates from "./presetDates";
import textToDate from "./textToDate";

interface DatePickerProps {
  setDate: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ setDate }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [showAutoSaveMessage, setShowAutoSaveMessage] =
    useState<boolean>(false);

  const handleModalToggle = () => {
    setOpen(!open);
  };

  const handleModalClose = () => {
    setShowAutoSaveMessage(false);
    setOpen(false);
  };

  const {
    date,
    setDay,
    setMonth,
    setFullYear,
    day,
    month,
    fullYear,
    daysInMonth,
  } = useDate();

  useEffect(() => {
    if (open) {
      console.log("Change");
      setDate(date);
      setShowAutoSaveMessage(true);
      setTimeout(() => setShowAutoSaveMessage(false), 3000);
    }
  }, [date]);

  const handleRadioDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDay(parseInt(e.target.value));
  };
  const handleMonthSelectChange = (value: string) => {
    const monthNumeric = months.indexOf(value);
    setMonth(monthNumeric);
  };

  const handleYearTextFieldChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFullYear(parseInt(e.target.value));
  };

  const handleRadioChipChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    if (e.target.checked) {
      const date = textToDate(value);
      setDay(date.getDate());
      setMonth(date.getMonth());
      setFullYear(date.getFullYear());
    }
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
          <Typography fontWeight="md" level="h6">
            <FormLabel sx={{ color: "GrayText" }}>Date</FormLabel>
            <>
              {isEqualDate(textToDate("today"), date)
                ? "Today"
                : formatDate(date, true)}{" "}
              &bull;
              <Link
                endDecorator={<EditRounded />}
                color="warning"
                level="body1"
                onClick={handleModalToggle}
              >
                Edit
              </Link>
            </>
          </Typography>
        </Box>
      </Box>

      <Modal open={open} onClose={handleModalClose}>
        <ModalDialog sx={{ maxWidth: 600 }}>
          <Typography level="h4">Select date</Typography>
          <Grid container spacing={2} sx={{ mt: 2 }} component="form">
            <Grid xs={6}>
              <FormLabel required>Month</FormLabel>
              <Select
                size="sm"
                onChange={(value) => handleMonthSelectChange(value!)}
                value={months[month]}
              >
                {months.map((month: string) => (
                  <Option key={month} value={month} sx={{ p: 1 }} label={month}>
                    {month}
                  </Option>
                ))}
              </Select>
            </Grid>
            <Grid xs={6}>
              <TextField
                type="number"
                fullWidth
                label="Year"
                size="sm"
                required
                onChange={(e) => handleYearTextFieldChange(e)}
                value={fullYear}
              />
            </Grid>

            <Grid xs={12}>
              <RadioGroup sx={{ flexWrap: "wrap", gap: 1 }} row value={day}>
                {[...Array(daysInMonth)].map((_, index) => {
                  const dayInMonth = index + 1;
                  const checked = dayInMonth === day;
                  return (
                    <Avatar size="sm" color={checked ? "primary" : "neutral"}>
                      <Radio
                        value={dayInMonth}
                        label={dayInMonth}
                        overlay
                        disableIcon
                        variant="plain"
                        color={checked ? "primary" : "neutral"}
                        sx={{ borderRadius: "sm" }}
                        onChange={(e) => handleRadioDayChange(e)}
                      />
                    </Avatar>
                  );
                })}
              </RadioGroup>
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: 4,
              maxWidth: "100%",
            }}
          >
            <RadioGroup
              sx={{
                flexWrap: "wrap",
                gap: 1,
              }}
              row
            >
              {presetDates.map((presetDate) => {
                const checked = isEqualDate(textToDate(presetDate), date);
                return (
                  <Chip
                    key={presetDate}
                    variant="outlined"
                    color={checked ? "primary" : "neutral"}
                    startDecorator={
                      checked && (
                        <CheckRounded
                          sx={{ zIndex: 1, pointerEvents: "none" }}
                        />
                      )
                    }
                  >
                    <Radio
                      variant="outlined"
                      overlay
                      disableIcon
                      label={presetDate}
                      value={presetDate}
                      color={checked ? "primary" : "neutral"}
                      onChange={(e) => handleRadioChipChange(e, presetDate)}
                    />
                  </Chip>
                );
              })}
            </RadioGroup>
          </Box>

          {showAutoSaveMessage && (
            <Typography
              level="subtitle1"
              sx={{ mt: 4 }}
              startDecorator={<CheckCircleRounded color="success" />}
            >
              Saved automatically
            </Typography>
          )}
        </ModalDialog>
      </Modal>
    </>
  );
};

export default DatePicker;
