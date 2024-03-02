import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
function Commenskelton(props) {
  const skeleton = Array.from({ length: props.length }, (_, indx) => indx);

  return skeleton.map((sk, index) => (
    <Grid
      item
      key={index}
      xs={props.xs}
      lg={props.lg}
      md={props.md}
      sm={props.sm}
      sx={{ display: "flex" }}
    >
      <Skeleton
        variant="rectangular"
        animation="wave"
        height={props.height}
        width={props.width}
        // key={index}
        {...props}
      />
    </Grid>
  ));
}

export default Commenskelton;