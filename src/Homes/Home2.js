import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import CountUp from "react-countup";
import { AllCards, TypographyText } from "../ReusableComponent/Reusab";

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
          pt: "3%",
          pb: "50px",
          // backgroundColor: "#F3A1C7",
          backgroundColor:'#BD0F65',
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
                    color="#fff"
                    // fontWeight="600"
                    fontSize="1.1rem"
                  />
                </>
              }
              color="#FFFFFF"
              fontSize={sizes}
              fontWeight="bolder"
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
                fontSize: sizes,
                fontWeight: "bolder",
                color:"#fff"
              }}
            />
          )}{" "}
          <span
            style={{
              fontSize: sizes,
              fontWeight: "bolder",
              color:"#fff"
            }}
          >
            +
          </span>
          <TypographyText
            Typography="
                  Projects Completed "
           color="#fff"
      
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
                    color="#fff"
                    // fontWeight="600"
                    fontSize="1.1rem"
                  />
                </>
              }
              // color="#1E1666"
              color="#fff"
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
        }}>
              <Grid item xs={12}>
          <TypographyText
            Typography={<>Why Choose Creative Power
              <br/>
              Electromechanical Works L.L.C</>}
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

        <Grid item xs={12}>
        <TypographyText
            Typography={<>When selecting Creative Power Electromechanical Works L.L.C, you gain access to comprehensive MEP solutions tailored to your specific needs. Our Engineering Division boasts expertise in conceptual design and development, supported by a skilled team capable of handling projects of any scale, whether residential, industrial, or commercial. Additionally, our Maintenance Division ensures the ongoing reliability of projects during their defect liability period, equipped with all necessary tools and equipment. From design to supply, installation, testing, and commissioning, Creative Power offers a seamless MEP contracting experience covering Electrical, Fire, and other essential systems. Trust us for excellence, reliability, and efficiency in your electromechanical projects.</>}
        textAlign="left"
        color="#6a7c92"      
              />


</Grid>


        {coose.map((data, index) => (
          <Grid item lg={4} md={6} sm={6} xs={12}>
         <AllCards
              image={data.image}
              height="70px"
              width="70px"
              backgroundColor="#FFFFFF"
              boxShadow="9px 17px 30px 0px rgba(0,0,0,.1)"
              backgroundColor1="#FFFFFF"
              txt1color="black"
              txt2color="#6a7c92"
              txt1fontSize="22px"
              txt2fontSize="15px"
              Typography1={data.Typography1}
              Typography2={data.Typography2}
              txt1fontWeight="bolder"
              txt2textAlign='justifyContent'
              fontWeight="600"
          
            />
          </Grid>
        ))}
        </Grid>
      {/***************************** */}
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
          objectFit: "cover",
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
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
            >
              <img
                src={data.img}
                // src="https://content.mykukun.com/wp-content/uploads/2021/05/19090128/electrical-contractor.jpg"
                alt=""
                width="100%"
                style={{ borderRadius: "20px" }}
              />
              <TypographyText
                Typography={data.txt}
                textTransform="capitalize"
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

const Service = [
  {
    img: "https://content.mykukun.com/wp-content/uploads/2021/05/19090128/electrical-contractor.jpg",
    txt: "Electrical Contracting",
  },
  {
    img: "https://handymanomaha.org/wp-content/uploads/2020/12/plumbing-contractor-3-1024x684.jpeg",
    txt: "Plumbing Contracting",
  },
  {
    img: "https://petersheatingandcoolingllc.com/wp-content/uploads/2020/05/Residential-HVAC-Contractor-768x513.jpg",
    txt: "HVAC Contracting",
  },
  {
    img: "https://www.relifire.com/images/products/fire-contractor.jpg",
    txt: "Fire  Contracting",
  },
  {
    img: "https://static.wixstatic.com/media/683fc5_a40f6b35a84a4eb8ac7d75ea2bc6a246~mv2.gif",
    txt: "MEP Contracting",
  },
];
const Datas = [
  { txt: "DEWA", txt1: "Approved Contractor" },
  { txt: "100%", txt1: "Customer Satisfaction Guaranteed" },
];

const Data = [{ txt: "2014", txt1: "Established" }];
const coose = [
  {

    image:'https://www.adinternationalbv.com/wp-content/uploads/2016/12/quality-label-round.png',
      // "https://tse2.mm.bing.net/th?id=OIP.eU8MX_P_BjrtFhY2mpftwAHaHa&pid=Api&P=0&h=180",
    Typography1: "Quality",
    Typography2:
      <>At Creative Power Electromechanical Works L.L.C, we continuously strive to provide the highest quality and service standards, aiming to serve our customers in the most exemplary manner possible.</>,
  },
  {

    image:
      "https://tse4.mm.bing.net/th?id=OIP.I8T0LGdX0YILMcYRw1bQ2AHaHa&pid=Api&P=0&h=180",
    Typography1: "Trust",
    Typography2:
      " Trust forms the bedrock of our relationships, where we prioritize building and maintaining trust among our employees and customers alike at Creative Power Electromechanical Works L.L.C.",
  },
  {

    image:
      "https://tse1.mm.bing.net/th?id=OIP.ofOu_ZenbWynFmh5iGuHLAHaGA&pid=Api&P=0&h=180",
    Typography1: "Customer Support:",
    Typography2:
      " Creative Power Electromechanical Works L.L.C is dedicated to offering robust customer support services, ensuring our clients receive prompt assistance and guidance throughout their engagement with us.",
  },]