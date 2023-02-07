import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import { Badge } from "@mui/joy";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import IconButton from "@mui/joy/IconButton";
import MuiLink from "@mui/joy/Link";
import MuiModal from "@mui/joy/Modal";
import MuiModalDialog from "@mui/joy/ModalDialog";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import { useDatePicker } from "@rehookify/datepicker";
import ErrorMessage from "common/components/ErrorMessage";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

import type { FormFields } from "../../types";
import config from "./config";
import getDayRadioAriaLabel from "./getDayRadioAriaLabel";
import options from "./options";

interface ModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ open, setOpen }) => {
  const [error, setError] = useState<boolean>(false);

  const { setValue, clearErrors, getValues } = useFormContext<FormFields>();

  const date = new Date();

  const [time, setTime] = useState<string>(
    date.toLocaleTimeString(undefined, options)
  );

  const {
    data: { selectedDates, calendars, weekDays },
    propGetters: { nextMonthButton, previousMonthButton },
    actions: { setDay }
    // @ts-ignore
  } = useDatePicker(config);

  useEffect(() => {
    const initialDate = getValues("date") ? new Date(getValues("date")) : "";

    if (initialDate) {
      // @ts-ignore
      setTime(initialDate.toLocaleTimeString(undefined, options));

      initialDate.setHours(0, 0, 0, 0);
      selectedDates[0] = initialDate;
    }
  }, [getValues, selectedDates]);

  const { days, month, year } = calendars[0];

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleModalDone = () => {
    const selectedDate = selectedDates[0];

    setError(false);
    if (!selectedDate || !time) return setError(true);

    const datetime = new Date(selectedDate);
    const [hours, minutes] = time.split(":");
    datetime.setHours(parseInt(hours, 10));
    datetime.setMinutes(parseInt(minutes, 10));

    setValue("date", datetime.toString());

    clearErrors("date");

    handleModalClose();
  };

  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [day, month, year] = e.target.value.split("/");
    // Convert strings to ints
    setDay(new Date(+year, +month - 1, +day));
  };

  const onTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [hours, minutes] = e.target.value.split(":");
    setTime(`${hours}:${minutes}`);
  };

  return (
    <MuiModal open={open} onClose={handleModalClose}>
      <MuiModalDialog
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
        aria-label="Select date and time"
      >
        <Box>
          <Box
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
              aria-label="Previous month"
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
              aria-label="Next month"
            >
              <ChevronRightRounded />
            </IconButton>
          </Box>

          <Box mt={2}>
            <RadioGroup name="day" row onChange={onRadioChange}>
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

                {days.map((dpDay: any) => (
                  <Grid key={`${month}-${dpDay.date}`} xs={1}>
                    <Badge
                      invisible={!dpDay.isToday}
                      size="sm"
                      variant="soft"
                      color="info"
                      badgeInset="0 50%"
                    >
                      <Avatar
                        size="sm"
                        color="neutral"
                        variant={dpDay.selected ? "soft" : "plain"}
                      >
                        <Radio
                          value={dpDay.date}
                          label={dpDay.day}
                          componentsProps={{
                            input: {
                              "aria-label": dpDay.inCurrentMonth
                                ? getDayRadioAriaLabel(dpDay.day, month)
                                : ""
                            }
                          }}
                          disabled={!dpDay.inCurrentMonth}
                          size="sm"
                          color="neutral"
                          variant="plain"
                          overlay
                          disableIcon
                          data-cy={`DateTimePicker-dayRadio-${dpDay.day}`}
                        />
                      </Avatar>
                    </Badge>
                  </Grid>
                ))}
              </Grid>
            </RadioGroup>

            <Box mt={4}>
              <Typography level="subtitle1" textAlign="center" mb={1}>
                Time
              </Typography>

              <TextField
                onChange={onTimeChange}
                value={time}
                type="time"
                variant="outlined"
                aria-label="Time"
              />
            </Box>
          </Box>

          {error && (
            <ErrorMessage sx={{ mt: 4 }}>Invalid date or time</ErrorMessage>
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
            <MuiLink
              component="button"
              type="button"
              variant="plain"
              color="danger"
              onClick={handleModalClose}
              aria-label="Cancel setting date and time"
            >
              Cancel
            </MuiLink>
            <Button
              color="neutral"
              onClick={handleModalDone}
              data-cy="DateTimePicker-submit"
              aria-label="Save date and time"
            >
              Done
            </Button>
          </Box>
        </Box>
      </MuiModalDialog>
    </MuiModal>
  );
};

export default Modal;
