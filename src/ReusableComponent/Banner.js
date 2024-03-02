import React from "react";
import { Grid } from "@mui/material";
import Commenskelton from "./Commenskelton";

const Banner = (props) => {
  const { data, isLoadingBannerImage, style } = props;
  return isLoadingBannerImage ? (
    <Commenskelton
      length={1}
      // key={index}
      lg={12}
      height={{
        lg: props.lg,
        md: props.md,
        sm: props.sm,
        xs: props.xs,
      }}
    />
  ) : (
    data &&
      data?.map((curElem, index) => (
        <Grid
          item
          key={curElem?.banner_id}
          lg={props.lg}
          md={props.md}
          sm={props.sm}
          xs={props.xs}
          height={props.height}
        >
          {curElem.url ? (
            <a href={curElem.url} target="_blank" rel="noopener noreferrer">
              <img
                alt="familyFitnessBannerImage"
                className={props.className}
                src={curElem}
                width="100%" height= '100%'
                style={{ ...style }}
              />
            </a>
          ) : (
            <img
              alt="familyFitnessBannerImage"
              className={props.className}
              src={curElem}
              width="100%" height= '100%'
              style={{ ...style }}
            />
          )}
        </Grid>

      ))
  );
};

export default Banner;
