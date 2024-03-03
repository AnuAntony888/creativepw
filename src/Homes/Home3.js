import { Box, Card, CardContent, CardMedia, Grid } from "@mui/material";
import React from "react";
import { Buttons, TypographyText } from "../ReusableComponent/Reusab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Slider from "react-slick";
import pro from "../Assets/pr1.png";
import pro1 from "../Assets/pr2.png";
import pro2 from "../Assets/pr3.png";
import pro3 from "../Assets/pro4.png";
import pro4 from "../Assets/pro6.png";
import pro5 from "../Assets/pro7.png";
import LinkIcon from "@mui/icons-material/Link";
import { LazyLoadImage } from "react-lazy-load-image-component";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <>
      <div
        className="slickbuttonprev"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        {" "}
        <KeyboardArrowLeftIcon />
      </div>
    </>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="slickbuttonnext" onClick={onClick}>
      <KeyboardArrowRightIcon className="keybordarrow" />
    </div>
  );
}
const settings = {
  className: "center",
  infinite: true,
  centerPadding: "20px",
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Home3 = () => {
  const project = [
    {
      img: pro,
      name: "B+G+6 Building at AL QUSAIS 2nd PLOT NO: 2330101, Dubai. ",
    },
    { img: pro1, name:' AL Warqa First  G+6 Building MEP works Plot No :4210473' },
    { img: pro2, name: 'Khawaneej G+1 Villa -4 NOs MEP works '},
    { img: pro3 , name:'B+G+6+R Building at AL QUSAIS 2nd PLOT NO: 233-123, Dubai'},
    { img: pro4 , name:'B+G+6+R Building at AL Warqa Plot No : 421-2091, Dubai'},
    { img: pro5 , name:'B+G+6+R Building at Plot No:421-0353  Warqa 1st , Dubai'},
  ];

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen1 = useMediaQuery(theme.breakpoints.down("sm"));
  const sizes = isSmallScreen ? (isSmallScreen1 ? "20px" : "24px") : "30px";
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{
          pr: "6%",
          pt: "4%",
          pb: "40px",
          pl: "6%",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12}>
          <TypographyText
            Typography={<>Our Projects</>}
            color="#1E1666"
            fontSize={sizes}
            fontWeight="600"
          />
        </Grid>
        <Grid item xs={12}>
          <hr
            width="50px;"
            color="red"
            size="5"
            style={{ margin: "auto" }}
          ></hr>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{ pl: "6%", pr: "6%", pb: "6%", marginLeft: "-10px" }}
      >
        <Grid xs={12} sx={{}}>
          <div>
            <Slider {...settings} className="slickheight">
              {project?.map((post) => {
                return (
                  <>
                    <Card
                      sx={{
                        position: "relative",
                        margin: "auto",
                        display: "flex",
                        boxShadow: "none",
                        borderRadius: "30px",

                        "& .image_sub_card": { display: "none" },
                        ":hover": {
                          "& .image_sub_card": {
                            display: "flex",
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                          },
                        },
                      }}
                    >
                      {/* <LazyLoadImage
                        component="img"
                        src={post.img}
                        style={{
                          margin: "auto",
                          width: "100%",
                          objectFit: "contain",
                          borderRadius: "20px",
                          display:'block'
                        }}
                        alt={post.name}
                      /> */}
                      <CardMedia     component="img"
                        src={post.img}
                        sx={{
                          margin: "auto",
                          width: "100%",
                          objectFit: "contain",
                          borderRadius: "20px",
                          display:'block'
                        }}
                        alt={post.name}/>
                      <Box
                        className="image_sub_card"
                        sx={{
                          top: "0",
                          position: "absolute",
                          borderRadius: "20px",
                          width: "100%",
                          height: "100%",

                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <TypographyText
                          Typography={post.name}
                          color="white"
                          fontSize=".8rem"
                          fontWeight="600"
                        />
                      </Box>
                    </Card>
                  </>
                );
              })}
            </Slider>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home3;
