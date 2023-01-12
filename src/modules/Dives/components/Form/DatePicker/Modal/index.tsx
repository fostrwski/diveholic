import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import ErrorOutlineRounded from "@mui/icons-material/ErrorOutlineRounded";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormHelperText from "@mui/joy/FormHelperText";
import FormLabel from "@mui/joy/FormLabel";
import Grid from "@mui/joy/Grid";
import IconButton from "@mui/joy/IconButton";
import MuiLink from "@mui/joy/Link";
import MuiModal from "@mui/joy/Modal";
import MuiModalDialog from "@mui/joy/ModalDialog";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import {
  type DatePickerUserConfig,
  useDatePicker
} from "@rehookify/datepicker";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

interface ModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ open, setOpen }) => {
  const [error, setError] = useState<boolean>(false);

  const config: DatePickerUserConfig = {
    locale: {
      weekday: "short"
    }
  };

  const { setValue, clearErrors } = useFormContext();

  const date = new Date();
  const [hours, setHours] = useState<number | "">(date.getHours());
  const [minutes, setMinutes] = useState<number | "">(date.getMinutes());

  const {
    data: { selectedDates, calendars, weekDays },
    propGetters: { nextMonthButton, previousMonthButton },
    actions: { setDay }
    // @ts-ignore
  } = useDatePicker(config);

  const selectedDate = selectedDates[0];

  const { days, month, year } = calendars[0];

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleModalDone = () => {
    setError(false);
    if (!selectedDate) return setError(true);

    setValue("date", selectedDate);
    clearErrors("date");
    handleModalClose();
  };

  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [day, month, year] = e.target.value.split("/");
    // Convert strings to ints
    setDay(new Date(+year, +month - 1, +day));
  };

  const onHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHours(parseInt(e.target.value, 10) || "");
  };

  const onMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(parseInt(e.target.value, 10) || "");
  };

  return (
    <MuiModal open={open} onClose={handleModalClose} aria-label="Select date">
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
      >
        <Box component="form">
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
            >
              <ChevronLeftRounded />
            </IconButton>

            <Box sx={{ textAlign: "center" }}>
              <Typography level="subtitle1">{year}</Typography>

              <Typography level="h5" component="p">
                {month}
              </Typography>
            </Box>

            <IconButton color="neutral" variant="plain" {...nextMonthButton()}>
              <ChevronRightRounded />
            </IconButton>
          </Box>

          <Box mt={2}>
            <RadioGroup row onChange={onRadioChange}>
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
                ))}
              </Grid>
            </RadioGroup>

            <Box mt={4}>
              <Typography level="subtitle1" textAlign="center">
                Time
              </Typography>
              <Box
                sx={{
                  mt: 1,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2
                }}
              >
                <TextField
                  type="number"
                  value={hours}
                  onChange={onHoursChange}
                  sx={{
                    width: 60,
                    input: {
                      textAlign: "center",
                      fontSize: "md",
                      fontWeight: "md"
                    }
                  }}
                  aria-label="Hours"
                />
                <Typography level="h2">:</Typography>
                <TextField
                  type="number"
                  value={minutes}
                  onChange={onMinutesChange}
                  sx={{
                    width: 60,
                    input: {
                      textAlign: "center",
                      fontSize: "md",
                      fontWeight: "md"
                    }
                  }}
                  aria-label="Minutes"
                />
              </Box>
            </Box>
          </Box>

          {error && (
            <Typography
              startDecorator={<ErrorOutlineRounded />}
              color="danger"
              sx={{ mt: 3, fontWeight: "xl" }}
            >
              Select valid date and time
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
            <MuiLink variant="plain" color="neutral" onClick={handleModalClose}>
              Cancel
            </MuiLink>
            <Button color="neutral" onClick={handleModalDone}>
              Done
            </Button>
          </Box>
        </Box>
      </MuiModalDialog>
    </MuiModal>
  );
};

export default Modal;
