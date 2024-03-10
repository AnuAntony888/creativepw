import React, { useEffect } from "react";
import { Banner1, TypographyText } from "../ReusableComponent/Reusab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Data } from "../Homes/Home4";
import pro1 from "../Assets/pr1.png";
import pro2 from "../Assets/pr2.png";
import pro3 from "../Assets/pr3.png";
import pro4 from "../Assets/pro4.png";
import pro5 from "../Assets/pro6.png";
import pro6 from "../Assets/pro7.png";
const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen1 = useMediaQuery(theme.breakpoints.down("sm"));
  const sizes = isSmallScreen ? (isSmallScreen1 ? "20px" : "24px") : "30px";
  return (
    <div>
      <Banner1 image="https://ik.imagekit.io/jlco9jzsq/creativepower/Portada.jpg?updatedAt=1710091808145" />

      <Grid
        container
        spacing={2}
        sx={{
          pr: "6%",

          pb: "40px",
          pl: "6%",
        }}
      >
        <Grid item xs={12}>
          <TypographyText
            Typography={<>List Of Completed Projects</>}
            fontSize={sizes}
            fontWeight="600"
          />
        </Grid>
        <Grid item xs={12}>
          <hr
            width="50px;"
            color="#DA117B"
            size="5"
            style={{ margin: "auto" }}
          ></hr>
        </Grid>
        {Data.map((post, indexs) => (
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            sx={{ pl: "10px", pt: "6px" }}
          >
            <List sx={{ p: "0" }}>
              <div data-aos="fade-up">
                <ListItem
                  sx={{ textAlign: "left", padding: "0 !important" }}
                  key={indexs}
                >
                  <ListItemIcon
                    sx={{ minWidth: "30px", color: "      #6a7c92" }}
                  >
                    {indexs + 1},
                  </ListItemIcon>

                  <ListItemText
                    sx={{ textAlign: "left", padding: "0", fontFamily: "Lora" }}
                  >
                    <TypographyText
                      fontSize="15px"
                      Typography={post.txt}
                      color="#6a7c92"
                    />
                  </ListItemText>
                </ListItem>
              </div>
            </List>
          </Grid>
        ))}

        <Grid item xs={12}>
          <TypographyText
            Typography={<> Project Gallary</>}
            fontSize={sizes}
            fontWeight="600"
          />
        </Grid>
        <Grid item xs={12}>
          <hr
            width="50px;"
            color="#DA117B"
            size="5"
            style={{ margin: "auto" }}
          ></hr>
        </Grid>
        {Imageset.map((data, index) => (
          <Grid
            item
            xs={12}
            lg={index === 0 || index == 5 ? 6 : 3}
            md={index === 0 || index == 5 ? 6 : 3}
            sm={index === 0 || index == 5 ? 12 : 6}
          >
            <img
              src={data.img}
              alt=""
              width="100%"
              style={{
                maxHeight: "50vh",
                minHeight: "50vh",
                borderRadius: "10px",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Project;

const Imageset = [
  {
    img: pro1,
  },
  {
    img: pro2,
  },
  {
    img: pro3,
  },
  {
    img: pro4,
  },
  {
    img: pro5,
  },
  {
    img: pro6,
  },
];
