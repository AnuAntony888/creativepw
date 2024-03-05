// import React from 'react'

// const Fire = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Fire

import React, { useEffect } from "react";
import { Banner1, Parall, TypographyText } from "../ReusableComponent/Reusab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";

const Fire = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen1 = useMediaQuery(theme.breakpoints.down("sm"));
  const sizes = isSmallScreen ? (isSmallScreen1 ? "20px" : "24px") : "30px";
  return (
    <div>
      <Banner1 image="https://summitfire.com/wp-content/uploads/2020/04/fire-protection-engineer1_S.jpg" />
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
            Typography={<> Fire Safety Services</>}
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
                Creative Power Electromechanical Works L.L.C. stands at the
                forefront of fire safety and protection services in the UAE,
                offering a spectrum of innovative solutions tailored to meet
                diverse customer needs. With years of expertise and a dedicated
                team, Creative Power is committed to designing, implementing,
                and maintaining cutting-edge fire safety systems that adhere to
                the highest standards and statutory regulations.
                <br />
                <br />
                As a leading provider of fire safety services, Creative Power
                takes pride in its ability to deliver bespoke solutions that
                integrate the latest technologies and industry best practices.
                Our comprehensive portfolio encompasses a wide range of
                services, including planning, design, testing, commissioning,
                and maintenance of fire protection systems.
                <br />
                <br />
                At Creative Power, we understand the critical importance of fire
                safety in diverse environments, from residential and commercial
                to industrial projects. Our team of skilled professionals
                possesses the expertise and experience to handle even the most
                complex requirements with precision and efficiency.
              </>
            }
            color="#6a7c92"
            textAlign="left"
          />
        </Grid>

        {Imageset.map((data, index) => (
          <Grid item xs={12} lg={6} md={6} sm={6} key={index}>
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
                <span className="blodcontent">Our offerings include:</span>
                <br /> <br />
                <span className="blodcontent1">
                  Fire Fighting Solutions:{" "}
                </span>{" "}
                Creative Power specializes in delivering customized fire
                fighting solutions that prioritize safety, quality, and
                innovation. Leveraging state-of-the-art technology and
                meticulous attention to detail, we ensure optimal protection for
                people and property alike.
                <br /> <br />
                <span className="blodcontent1">
                  Fire Alarm System Installation:{" "}
                </span>{" "}
                We excel in the installation of advanced fire alarm systems
                designed to detect and mitigate potential risks effectively.
                From smoke alarms to emergency lighting systems, Creative Power
                provides comprehensive solutions tailored to your specific
                needs.
                <br /> <br />
                <span className="blodcontent1">
                  Specialized Fire Protection Systems:{" "}
                </span>{" "}
                Our expertise extends to a range of specialized fire protection
                systems, including sprinkler systems, hose reel systems, wet
                riser systems, and more. We employ rigorous testing and
                commissioning processes to ensure seamless functionality and
                reliability.
                <br /> <br />
                <span className="blodcontent1">
                  Emergency Lighting Solutions:{" "}
                </span>{" "}
                Creative Power integrates active and passive emergency lighting
                systems to enhance fire safety measures and ensure swift
                evacuation during emergencies.
                <br /> <br />
                <span className="blodcontent1">
                  Concept Engineering and Design:{" "}
                </span>{" "}
                With a focus on innovation and efficiency, Creative Power offers
                concept engineering services and meticulous product selection to
                meet the unique requirements of each project.
                <br /> <br />
                <span className="blodcontent1">
                  Procurement and Approval Processes:{" "}
                </span>{" "}
                We manage the procurement process and obtain necessary approvals
                from regulatory authorities to ensure compliance with safety
                standards and regulations.
                <br /> <br />
                <span className="blodcontent1">
                  Testing and Commissioning:{" "}
                </span>{" "}
                Our team conducts thorough testing and commissioning procedures
                to identify and address any issues, ensuring the seamless
                operation of fire protection systems. At Creative Power
                Electromechanical Works L.L.C., we are committed to excellence
                in fire safety services, delivering unparalleled quality,
                reliability, and customer satisfaction. Contact us today to
                learn more about how we can safeguard your residential,
                commercial, or industrial projects with innovative fire
                protection solutions.
              </>
            }
            color="#6a7c92"
            textAlign="left"
          />
        </Grid>
      </Grid>
      <Parall
        imges="https://tse1.mm.bing.net/th?id=OIP.NecKShJ6aEicqfypcq_PagHaEK&pid=Api&P=0&h=180"
        txt={
          <>
            Contact us now to see how our fire safety services can enhance your
            space's security and peace of mind.
          </>
        }
      />
    </div>
  );
};

export default Fire;
const Imageset = [
  {
    img: "https://www.maxpwrdubai.com/wp-content/uploads/2022/10/Fire-Protection-Services-600-x-600-600x400.jpeg",
  },
  {
    img: "https://dorsetfireprotection.co.uk/app/uploads/2020/08/service1.jpg",
  },
];
