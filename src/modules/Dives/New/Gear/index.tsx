import LineWeightRounded from "@mui/icons-material/LineWeightRounded";
import NumbersRounded from "@mui/icons-material/NumbersRounded";
import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import TextSeparator from "common/components/TextSeparator";
import { useNewDiveContext } from "common/context/NewDive";
import React, { useState } from "react";

const Gear: React.FC = () => {
  const { newDive, updateNewDiveProp } = useNewDiveContext();
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <TextSeparator sx={{ mt: 8 }}>Gear</TextSeparator>
      <Typography
        mb={2}
        component="p"
        textColor="GrayText"
        fontWeight="md"
        mt={4}
      >
        Exposure protection
      </Typography>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid xs={6}>
          <TextField
            type="text"
            name="exposureProtectionType"
            label="Type"
            value={newDive.gearExposureProtectionType}
            onChange={(e) =>
              updateNewDiveProp("gearExposureProtectionType", e.target.value)
            }
          />
        </Grid>
        <Grid xs={6}>
          <TextField
            type="text"
            name="exposureProtectionThickness"
            label="Thickness"
            startDecorator={<LineWeightRounded />}
            value={newDive.gearExposureProtectionThickness}
            onChange={(e) =>
              updateNewDiveProp(
                "gearExposureProtectionThickness",
                e.target.value
              )
            }
          />
        </Grid>
      </Grid>

      <Typography
        mb={2}
        mt={4}
        component="p"
        textColor="GrayText"
        fontWeight="md"
      >
        Tanks
      </Typography>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid xs={6}>
          <TextField
            type="number"
            name="tanksCount"
            label="Count"
            startDecorator={<NumbersRounded />}
            value={newDive.gearTanksCount}
            onChange={(e) =>
              updateNewDiveProp("gearTanksCount", e.target.value)
            }
          />
        </Grid>
        <Grid xs={6}>
          <TextField
            type="text"
            name="tankType"
            label="Type"
            value={newDive.gearExposureProtectionType}
            onChange={(e) => updateNewDiveProp("gearTanksType", e.target.value)}
          />
        </Grid>
      </Grid>

      {showMore && (
        <>
          <Typography
            mb={2}
            mt={4}
            component="p"
            textColor="GrayText"
            fontWeight="md"
          >
            Other gear
          </Typography>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid xs={6}>
              <TextField
                type="text"
                name="bcd"
                label="BCD"
                value={newDive.gearBcd}
                onChange={(e) => updateNewDiveProp("gearBcd", e.target.value)}
              />
            </Grid>
            <Grid xs={6}>
              <TextField
                type="text"
                name="fins"
                label="Fins"
                value={newDive.gearFins}
                onChange={(e) => updateNewDiveProp("gearFins", e.target.value)}
              />
            </Grid>
            <Grid xs={6}>
              <TextField
                type="text"
                name="regulator"
                label="Regulator"
                value={newDive.gearRegulator}
                onChange={(e) =>
                  updateNewDiveProp("gearRegulator", e.target.value)
                }
              />
            </Grid>
          </Grid>
        </>
      )}

      <Button
        sx={{ mt: 6 }}
        variant="outlined"
        color="neutral"
        fullWidth
        onClick={handleClick}
      >
        {showMore ? "Show less" : "Show more"}
      </Button>
    </>
  );
};

export default Gear;
