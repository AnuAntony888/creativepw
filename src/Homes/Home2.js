import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import CountUp from "react-countup";
import { TypographyText } from "../ReusableComponent/Reusab";

const Home2 = () => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("count-up");
   
      if (element) {
        const { top } = element.getBoundingClientRect();
        const isVisible = top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

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
          pl: "6%",
          pr: "6%",
          pt: "2%",
          pb: "50px",
          backgroundColor: "rgba(218, 17, 123,.1)",
          margin: "auto",
        }}
      >
        {Data.map((data, index) => (
          <Grid item lg={3} md={3} xs={12} sm={6} sx={{ margin: "auto" }}>
            <TypographyText
              Typography={
                <>
                  {data.txt}
                  <TypographyText
                    Typography={data.txt1}
                    color="gray"
                    fontWeight="600"
                    fontSize="1.1rem"
                  />
                </>
              }
              // color="#1E1666"
              fontSize={sizes}
              fontWeight="600"
            />
          </Grid>
        ))}

        <Grid
          item
          lg={3}
          md={3}
          xs={12}
          sm={6}
          sx={{ margin: "auto" }}
          id="count-up"
        >
          {isVisible && (
            <CountUp
              start={1}
              end={100}
              duration={2.5}
              style={{
                fontSize: sizes, fontWeight: "600",
                // color: "#1E1666"
              }}
            />
          )}{" "}
          <span
            style={{
              fontSize: sizes, fontWeight: "600",
              // color: "#1E1666"
            }}
          >
            +
          </span>
          <TypographyText
            Typography="
                  Projects Completed "
                  color="gray"
            fontWeight="600"
            fontSize="1.1rem"
          />
        </Grid>
        {Datas.map((data, index) => (
          <Grid item lg={3} md={3} xs={12} sm={6} sx={{ margin: "auto" }}>
            <TypographyText
              Typography={
                <>
                  {data.txt}
                  <TypographyText
                    Typography={data.txt1}
                    color="gray"
                    fontWeight="600"
                    fontSize="1.1rem"
                  />
                </>
              }
              // color="#1E1666"
              fontSize={sizes}
              fontWeight="600"
            />
          </Grid>
        ))}
      </Grid>
      {/*******************************/}
      <Grid
        container
        spacing={2}
        sx={{
          pr: "6%",
          pt: "4%",
          pb: "50px",
          pl: "6%",
          justifyContent: "center",
          backgroundImage: `url(
            http://wallpapercave.com/wp/MQy6rhu.jpg
           
            )`,
          objectFit: 'cover',
          // backgroundRepeat:'no-repeat'
            
        }}
      >
        <Grid item xs={12}>
          <TypographyText
            Typography={<>Our Services</>}
            // color="#1E1666"
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
        {Service.map((data, index) => (
          <Grid item lg={4} md={6} sm={6} xs={12}>
          <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="500">
            <img
              src={data.img}
              // src="https://content.mykukun.com/wp-content/uploads/2021/05/19090128/electrical-contractor.jpg"
              alt=""
              width="100%"
              style={{borderRadius:'20px'}}
            />
         <TypographyText
            Typography={data.txt}
            textTransform='capitalize'
            fontSize="1.1rem"
            fontWeight="600"
              />
              </div>
          </Grid>
        ))}
     
      </Grid>
    </div>
  );
};

export default Home2;

const Service = [{
  img: 'https://content.mykukun.com/wp-content/uploads/2021/05/19090128/electrical-contractor.jpg',
  txt: 'Electrical Contracting'
},
{
  img: 'https://handymanomaha.org/wp-content/uploads/2020/12/plumbing-contractor-3-1024x684.jpeg',
  txt:'Plumbing Contracting'
  },
  {
    img: 'https://petersheatingandcoolingllc.com/wp-content/uploads/2020/05/Residential-HVAC-Contractor-768x513.jpg',
    txt:'HVAC Contracting'
  }
  ,
  {
    img: 'https://www.relifire.com/images/products/fire-contractor.jpg',
    txt:'Fire  Contracting'
  },
  {
    img: 'https://static.wixstatic.com/media/683fc5_a40f6b35a84a4eb8ac7d75ea2bc6a246~mv2.gif',
    txt:'MEP Contracting'
  } 


]
const Datas = [
  { txt: "DEWA", txt1: "Approved Contractor" },
  { txt: "100%", txt1: "Customer Satisfaction Guaranteed" },
];

const Data = [{ txt: "2014", txt1: "Established" }];
