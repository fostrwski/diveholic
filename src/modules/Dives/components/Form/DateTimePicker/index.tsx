import CalendarTodayRounded from "@mui/icons-material/CalendarTodayRounded";
import EditRounded from "@mui/icons-material/EditRounded";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import FormLabel from "@mui/joy/FormLabel";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import { formatDate, formatTime } from "common/utils/datetime/format";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

const Modal = dynamic(() => import("./Modal"));

const DateTimePicker: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    getValues,
    formState: { errors }
  } = useFormContext();

  const handleModalToggle = () => {
    setOpen(!open);
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
              <FormLabel sx={{ color: "GrayText" }}>Date and time</FormLabel>
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
                      type="button"
                      onClick={handleModalToggle}
                      sx={{ p: 0, fontWeigth: "lg" }}
                      aria-label="Edit date"
                      data-cy="DateTimePicker-editDateAndTime"
                    >
                      Edit
                    </Link>
                  </>
                ) : (
                  <Link
                    component="button"
                    type="button"
                    color="neutral"
                    onClick={handleModalToggle}
                    level="h5"
                    aria-label="Set date"
                    sx={{ p: 0, fontWeight: "xl" }}
                    data-cy="DateTimePicker-setDateAndTime"
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

      <Modal open={open} setOpen={setOpen} />
    </>
  );
};

export default DateTimePicker;
