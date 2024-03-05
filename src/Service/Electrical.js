// import React from 'react'

// const Electrical = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Electrical

import React, { useEffect } from "react";
import { Banner1, Parall, TypographyText } from "../ReusableComponent/Reusab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";
import int from "../Assets/int1.png";
import int2 from "../Assets/int2.jpg";
const Electrical = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen1 = useMediaQuery(theme.breakpoints.down("sm"));
  const sizes = isSmallScreen ? (isSmallScreen1 ? "20px" : "24px") : "30px";
  return (
    <div>
      <Banner1 image="https://www.bs3services.co.uk/wp-content/uploads/Electrical-Working-Banner.jpg" />
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
            Typography={<>Electrical Contracting</>}
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
                Creative Power Electromechanical Works L.L.C is your premier
                destination for cutting-edge electrical services and contracting
                solutions. Our company prides itself on staying ahead of
                advancements and trends in electrical installations, ensuring
                that we provide the most innovative and efficient solutions to
                meet your needs. From system design to troubleshooting,
                upgrades, testing, and commissioning, we offer a comprehensive
                range of services tailored to commercial, residential, and
                industrial clients in Dubai and across the UAE.
                <br />
                <br />
                As a leading provider of electrical services, we boast a team of
                highly qualified and licensed professionals dedicated to
                delivering top-notch solutions. Our expertise spans a wide range
                of projects, from residential villas to commercial buildings,
                all adhering to DEWA regulations and industry standards. We
                understand the importance of maintaining electrical systems in
                optimal condition to prevent economic losses and potential
                hazards, which is why we prioritize thorough inspections and
                timely maintenance.
                <br />
                <br />
                At Creative Power, we understand that safety, efficiency, and
                reliability are paramount when it comes to electrical systems.
                That's why all our electricians are not only licensed but also
                experienced in handling all aspects of electrical services.
                Whether it's designing new electrical systems or troubleshooting
                existing ones, our team possesses the skills and knowledge
                needed to tackle even the most complex projects with precision
                and professionalism.
                <br />
                <br />
                Our commitment to excellence extends beyond just providing
                superior electrical services. We also assist clients throughout
                the DEWA approval process, handling paperwork, arranging
                inspections, and ensuring compliance every step of the way. With
                Creative Power, you can rest assured that your electrical
                projects are in capable hands, allowing you to focus on other
                aspects of your business or property management.
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
            lg={index === 0 ? 4 : 8}
            md={index === 0 ? 4 : 8}
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
                  Benefits of Choosing Creative Power Electromechanical Works
                  L.L.C:
                </span>
                <br />
                    <br />
                    <span className="blodcontent1">
                        Safety:
                    </span>
                    Our priority is ensuring that all electrical systems and
                components are installed, maintained, and repaired safely to
                prevent accidents or injuries.
                <br />
                    <br />
                    <span className="blodcontent1">
                Efficiency: </span> We optimize electrical systems to run efficiently,
                reducing energy consumption and lowering utility bills for our
                clients.
                <br />
                        <br />
                        <span className="blodcontent1">
                Cost Savings:  </span>Through regular maintenance and proactive
                troubleshooting, we help identify and fix potential issues
                before they escalate, saving money in the long run.
                <br />
                            <br />
                            <span className="blodcontent1">
                Compliance: </span> Our experienced team ensures that all electrical
                work meets local and national safety codes and regulations,
                providing peace of mind to our clients.
                <br />
                                <br />
                                <span className="blodcontent1">
                Increased Property Value: </span>Well-installed and maintained
                electrical systems can enhance the value of your property,
                making it more attractive to potential buyers or tenants.
                <br />
                                    <br />
                                    <span className="blodcontent1">
                Convenience:  </span>Our advanced electrical solutions ensure
                convenience for residents and businesses, enhancing their
                overall experience.
                <br />
                                        <br />
                                        <span className="blodcontent1">
                                            Reliability:
                                            </span>With accurate installation and maintenance, we
                deliver reliable and consistent performance, minimizing downtime
                and costly repairs.
                <br />
                <br />
                Choose Creative Power Electromechanical Works L.L.C for all your
                electrical contracting needs in Dubai. Our dedication to
                quality, safety, and customer satisfaction sets us apart as the
                premier choice for electrical services in the region. Let us
                empower your projects with creative solutions and unmatched
                expertise.{" "}
              </>
            }
            color="#6a7c92"
            textAlign="left"
          />
        </Grid>
      </Grid>
      <Parall
        imges="https://www.electraqatar.com/uploads/media/Importance%20of%20Electrical%20Contractors%20in%20the%20Workplace649aa7eb32157.jpg"
        txt={
          <>
            For superior electrical contracting solutions,
            <br />
            click here to contact us now!
          </>
        }
      />
    </div>
  );
};

export default Electrical;
const Imageset = [
    {
        img: "https://www.rmjeconstruction.com/wp-content/uploads/2019/09/electrical-contractor-philippines-1024x681.jpg",
      },
  {
    img: "https://www.maxpwrdubai.com/wp-content/uploads/2022/10/1-555x400.jpeg",
  },

];
