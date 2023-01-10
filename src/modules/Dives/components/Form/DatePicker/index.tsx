import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import CalendarTodayRounded from "@mui/icons-material/CalendarTodayRounded";
import EditRounded from "@mui/icons-material/EditRounded";
import ErrorOutlineRounded from "@mui/icons-material/ErrorOutlineRounded";
import { FormHelperText, IconButton } from "@mui/joy";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Grid from "@mui/joy/Grid";
import Link from "@mui/joy/Link";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Typography from "@mui/joy/Typography";
import {
  type DatePickerUserConfig,
  useDatePicker
} from "@rehookify/datepicker";
import { formatDate, formatTime } from "common/utils/datetime/format";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

interface DatePickerProps {
  initialDate?: Date;
}

const DatePicker: React.FC<DatePickerProps> = ({ initialDate }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const {
    setValue,
    getValues,
    formState: { errors }
  } = useFormContext();

  const config: DatePickerUserConfig = {
    locale: {
      weekday: "short"
    }
  };

  const {
    data: { selectedDates, calendars, weekDays },
    propGetters: { nextMonthButton, previousMonthButton },
    actions: { setDay }
    // @ts-ignore
  } = useDatePicker(config);

  const selectedDate = selectedDates[0];

  const { days, month, year } = calendars[0];

  const handleModalToggle = () => {
    setOpen(!open);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleModalDone = () => {
    setError(false);
    if (!selectedDate) return setError(true);

    setValue("date", selectedDate);
    handleModalClose();
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [day, month, year] = e.target.value.split("/");
    // Convert strings to ints
    setDay(new Date(+year, +month - 1, +day));
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%"
        }}
      >
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Avatar sx={{ "--Avatar-size": "52px" }}>
            <CalendarTodayRounded sx={{ fontSize: "24px" }} />
          </Avatar>
          <FormControl error={!!errors?.date}>
            <Typography level="h6" component="div">
              <FormLabel sx={{ color: "GrayText" }}>Date</FormLabel>
              <>
                {getValues("date") ? (
                  <>
                    {formatDate(getValues("date"))}
                    <br />
                    {formatTime(getValues("date"))}
                    <br />
                    <Link
                      endDecorator={<EditRounded />}
                      color="warning"
                      level="body1"
                      component="button"
                      onClick={handleModalToggle}
                      sx={{ p: 0, fontWeigth: "lg" }}
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
                    sx={{ p: 0, fontWeight: "lg" }}
                  >
                    Click here to set
                  </Link>
                )}
              </>
            </Typography>

            {!!errors?.date && <FormHelperText>Required field</FormHelperText>}
          </FormControl>
        </Box>
      </Box>

      <Modal open={open} onClose={handleModalClose} aria-label="Select date">
        <ModalDialog
          sx={{
            overflow: "scroll",
            maxHeight: "92%",
            top: "unset",
            pb: 8,
            borderRadius: "xl",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          }}
          layout="fullscreen"
        >
          <Box component="form">
            <Grid container spacing={2}>
              <Grid
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <IconButton
                  color="neutral"
                  variant="plain"
                  {...previousMonthButton()}
                >
                  <ChevronLeftRounded />
                </IconButton>

                <Box sx={{ textAlign: "center" }}>
                  <Typography level="subtitle1">{year}</Typography>

                  <Typography level="h5" component="p">
                    {month}
                  </Typography>
                </Box>

                <IconButton
                  color="neutral"
                  variant="plain"
                  {...nextMonthButton()}
                >
                  <ChevronRightRounded />
                </IconButton>
              </Grid>

              <Grid xs={12}>
                <RadioGroup row onChange={handleRadioChange}>
                  <Grid container columns={7} sx={{ width: "100%" }}>
                    {weekDays.map((wd: string) => {
                      const weekDay = wd.slice(0, 2);

                      return (
                        <Grid xs={1} key={`${month}-${weekDay}`} sx={{ mb: 1 }}>
                          <Avatar
                            size="sm"
                            color="primary"
                            variant="plain"
                            sx={{ fontWeight: "xl" }}
                          >
                            {weekDay}
                          </Avatar>
                        </Grid>
                      );
                    })}

                    {days.map((dpDay: any) => {
                      let checked;

                      return (
                        <Grid key={`${month}-${dpDay.date}`} xs={1}>
                          <Avatar
                            size="sm"
                            color="neutral"
                            variant={dpDay.selected ? "soft" : "plain"}
                          >
                            <Radio
                              value={dpDay.date}
                              label={dpDay.day}
                              disabled={!dpDay.inCurrentMonth}
                              size="sm"
                              color="neutral"
                              variant="plain"
                              overlay
                              disableIcon
                            />
                          </Avatar>
                        </Grid>
                      );
                    })}
                  </Grid>
                </RadioGroup>
              </Grid>
            </Grid>

            {error && (
              <Typography
                startDecorator={<ErrorOutlineRounded />}
                color="danger"
                sx={{ mt: 3, fontWeight: "xl" }}
              >
                Select valid date
              </Typography>
            )}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 4,
                gap: 2
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
