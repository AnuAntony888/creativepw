import React, { useEffect } from "react";
import { Banner1, Parall, TypographyText } from "../ReusableComponent/Reusab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";
import int from "../Assets/int1.png";
import int2 from "../Assets/int2.jpg";
const Plumbing = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen1 = useMediaQuery(theme.breakpoints.down("sm"));
  const sizes = isSmallScreen ? (isSmallScreen1 ? "20px" : "24px") : "30px";
  return (
    <div>
      <Banner1 image="https://www.licensesetc.com/wp-content/uploads/2020/05/bigstock-Plumber-Tools-And-Equipment-On-305185702-1110x550.jpg
    " />
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
            Typography={<>Plumbing Contracting</>}
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
            fontSize="15px"
            Typography={
              <>
                Welcome to Creative Power Electromechanical Works L.L.C, where
                excellence meets innovation in plumbing contracting services. As
                the premier choice for plumbing solutions in Dubai, we bring
                forth unparalleled expertise and a commitment to exceeding
                expectations. Our dedication to quality craftsmanship and client
                satisfaction sets us apart as leaders in the industry
                <br />
                <br />
                <span className="blodcontent">
                  Why Choose Creative Power for Your Plumbing Needs?
                </span>
                <br />
                <br />
                <span className="blodcontent1">Expertise and Efficiency:</span>
                Our team comprises skilled plumbing professionals who excel in
                diagnosing and efficiently resolving plumbing issues. Equipped
                with advanced tools and technologies, we swiftly identify
                problems and deliver effective solutions, minimizing downtime
                and inconvenience.
                <br />
                <br />
                <span className="blodcontent1">
                  Long-lasting Solutions:{" "}
                </span>{" "}
                We understand the importance of durability in plumbing repairs.
                Our meticulous approach ensures that each repair is made to
                last, providing you with a reliable plumbing system that
                functions seamlessly for years to come. Say goodbye to recurring
                issues and hello to peace of mind.
                <br />
                <br />
                <span className="blodcontent1">Safety First: </span>Plumbing
                tasks can involve risks, especially when dealing with
                electricity and complex systems. With Creative Power, safety is
                paramount. Our experienced contractors adhere to strict safety
                protocols, ensuring that repairs are conducted with utmost care
                and precision, eliminating any potential hazards.
                <br />
                <br />
                <span className="blodcontent1">Prompt Response: </span>We
                recognize the urgency of plumbing emergencies. Whether it's a
                blocked drain or a leaking pipe, our team is dedicated to
                providing fast and reliable service. With our rapid response
                time, you can trust that help is just a phone call away, 24/7.
                <br />
                <br />
              </>
            }
            color="#6a7c92"
            textAlign="left"
          />
        </Grid>

        {Imageset.map((data, index) => (
          <Grid
            item
            xs={12}
            lg={index === 0 ? 3 : 4.5}
            md={index === 0 ? 3 : 4.5}
            sm={12}
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
        <Grid item xs={12} lg={12} md={12} sm={12} sx={{ margin: "auto" }}>
          <TypographyText
            fontSize="15px"
            Typography={
              <>
                <span className="blodcontent">
                  Our Comprehensive Plumbing Services Include:
                </span>
                <br /> <br />
                Plumbing Installation and Maintenance
                <br /> <br />
                Hot and Cold-Water Supply Systems
                <br /> <br />
                Drainage and Wastewater Systems
                <br /> <br />
                Solar Water Heating Systems
                <br /> <br />
                Water Cooling Systems
                <br /> <br />
                Water Treatment and Filtration Systems
                <br /> <br />
                Grease Trap Installation
                <br /> <br />
                Sanitary Fixtures Supply and Installation
                <br /> <br />
                Chlorination and Sanitation Works
                <br /> <br />
                Plumbing System Design and Approval
                <br /> <br />h Concept Engineering and Product Selection
                <br /> <br />
                Water Demand Calculation and Shop Drawing Preparation
                <br /> <br />
                Liaison with Authorities for Approvals
                <br /> <br />
                Leakage Detection, Pressure Testing, and Repairs
                <br /> <br />
                Testing and Commissioning
                <br /> <br />
                At Creative Power Electromechanical Works L.L.C, we don't just
                provide plumbing services—we deliver solutions that redefine
                standards. With our unwavering commitment to excellence and
                innovation, we ensure that your plumbing needs are met with
                precision and professionalism.
                <br /> <br />
                Contact us today at +971 551474827  to experience
                the power of creativity in plumbing contracting. Let us empower
                your space with superior plumbing solutions tailored to your
                needs.
              </>
            }
            color="#6a7c92"
            textAlign="left"
          />
        </Grid>
      </Grid>
      <Parall
        imges="  https://tse1.mm.bing.net/th?id=OIP.GkvzRksyhonqcihtfvWeUQHaDt&pid=Api&P=0&h=180"
        txt={
          <>
            Let us empower your space with superior plumbing solutions, 
            <br />
            customized to your unique needs.
          </>
        }
      />
    </div>
  );
};

export default Plumbing;
const Imageset = [

  {
    img: "https://www.premierplumbingideas.com/wp-content/uploads/2017/01/8255783_m.jpg",
  },
  {
    img: "https://azbigmedia.com/wp-content/uploads/2020/01/plumbing-problems.png",
  },
  {
    img: "http://www.catalystenergy.co.uk/wp-content/uploads/2017/02/title-plumbing-contractors.jpg",
  },
];
