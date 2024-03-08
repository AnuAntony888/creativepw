import React, { useEffect } from "react";
import { Banner1, MetaComponent, Parall, TypographyText } from "../ReusableComponent/Reusab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";

const HVAC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen1 = useMediaQuery(theme.breakpoints.down("sm"));
  const sizes = isSmallScreen ? (isSmallScreen1 ? "20px" : "24px") : "30px";
  return (
    <div>
       <MetaComponent
        dynamicTitle="HVAC & Air Conditioning Contracting | Creative Power EMC - MEP Contractor Dubai"
        dynamicKeywords="Creative Power EMC HVAC & air conditioning contracting, MEP contractor Dubai, HVAC solutions UAE, Air conditioning installations, HVAC maintenance, HVAC solutions provider, Dubai electromechanical contractor, MEP excellence, HVAC systems, Air conditioning engineering.."
        dynamicDescription="Explore our HVAC & Air Conditioning Contracting services at Creative Power EMC, the leading MEP contractor in Dubai. Our expert team specializes in HVAC installations, maintenance, and solutions, ensuring optimal comfort and efficiency for diverse projects across the UAE."
       
      />
      <Banner1 image="http://www.completeheatingandairutah.com/wp-content/uploads/2015/06/Air-Conditioning-Contractor.jpg" />
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
            Typography={<>HVAC & Air Conditioning Contracting </>}
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
                Creative Power Electromechanical Works L.L.C. specializes in
                comprehensive HVAC solutions, ensuring your comfort and peace of
                mind in both residential and commercial spaces across Dubai. Our
                team of seasoned professionals is dedicated to delivering
                top-tier services, from installation to maintenance and repair,
                tailored to meet your specific needs.
                <br />
                <br />
                <span className="blodcontent">
                  Why Opt for Creative Power Electromechanical Works L.L.C.?
                </span>
                <br />
                <br />
                <span className="blodcontent1">
                  Expertise and Innovation:{" "}
                </span>{" "}
                With years of hands-on experience and a commitment to
                innovation, our technicians possess the skills and knowledge
                required to tackle even the most complex HVAC challenges. From
                installation to troubleshooting, we employ cutting-edge
                techniques and industry-best practices to ensure superior
                results.
                <br />
                <br />
                <span className="blodcontent1">Enhanced Efficiency: </span>Our
                certified technicians leverage advanced tools and technology to
                optimize the efficiency of your HVAC systems. Whether it's a
                routine maintenance check or a full-scale installation, we
                strive to maximize energy efficiency and minimize operational
                costs, keeping your systems running smoothly for years to come.
                <br />
                <br />{" "}
                <span className="blodcontent1">Time-Saving Solutions: </span>We
                understand the value of your time and prioritize swift,
                efficient service delivery. By entrusting your HVAC needs to
                Creative Power Electromechanical Works L.L.C., you can rest
                assured that your projects will be completed promptly and with
                meticulous attention to detail, minimizing disruptions to your
                daily routine.
                <br />
                <br /> <span className="blodcontent1">Safety First: </span>Your
                safety is our top priority. Our team adheres to stringent safety
                protocols and guidelines throughout every project, ensuring the
                well-being of both our clients and our staff. From rigorous
                quality checks to meticulous installation practices, we take
                every precaution to safeguard your home or business environment.
                <br />
                <br />{" "}
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
            lg={index === 1 || index === 2 ? 8 : 4}
            md={index === 1 || index === 2 ? 8 : 4}
            sm={index === 1 || index === 2 ? 8 : 4}
            key={index}
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
                {" "}
                <span className="blodcontent">
                  Our Comprehensive Services Include:
                </span>
                <br />
                <br /><span className="blodcontent1">
                HVAC Installation and Maintenance:      </span>From central air conditioning
                systems to specialized ventilation solutions, we offer
                comprehensive installation and maintenance services tailored to
                your unique requirements.
                <br />
                <br /><span className="blodcontent1">
                Chiller Plant Installation and Maintenance:       </span>We specialize in the
                installation and maintenance of chiller plants, cooling towers,
                and chilled water pumps, ensuring optimal performance and
                longevity.
                <br />
                <br /><span className="blodcontent1">
                Smoke Ventilation Systems:       </span>Our expertise extends to the design
                and installation of smoke extraction and management systems,
                enhancing safety and compliance in commercial and residential
                settings.
                <br />
                <br /><span className="blodcontent1">
                Kitchen and Car Park Ventilation:       </span>We provide tailored
                ventilation solutions for kitchens and car parks, optimizing air
                quality and circulation to create safe, comfortable
                environments.
                <br />
                <br /><span className="blodcontent1">
                Design and Engineering Services:       </span>Our team offers comprehensive
                design and engineering support, including heat load calculation,
                ductwork design, and equipment selection, ensuring seamless
                integration and optimal system performance.
                <br />
                <br /><span className="blodcontent1">
                Testing and Commissioning:       </span>We conduct thorough testing and
                commissioning procedures to validate system integrity and
                performance, ensuring compliance with industry standards and
                regulations.
                <br /><br />
                At Creative Power Electromechanical Works L.L.C., we are committed to excellence in every aspect of our service delivery. Whether you require installation, maintenance, or repair services for your HVAC systems, you can trust us to deliver exceptional results with professionalism and integrity.
              </>
            }
            color="#6a7c92"
            textAlign="left"
          />
        </Grid>
      </Grid>
      <Parall
        imges="https://www.townsendtotalenergy.com/wp-content/uploads/2019/06/hvac-contractor-4.jpg"
        txt={
          <>
           
           Contact us today to learn more about our services.<br/>We can enhance the comfort, efficiency, and safety of your space.
          </>
        }
      />
    </div>
  );
};

export default HVAC;
const Imageset = [
  {
    img: "https://www.blueridge.edu/wp-content/uploads/2019/12/ftr-HVAC-GI1151366143.jpg",
  },
  {
    img: "https://www.afrdynamics.com/wp-content/uploads/2019/05/hvac-contractors.jpg",
  },
  {
    img: "https://www.maxpwrdubai.com/wp-content/uploads/2022/10/heating-ventilation-air-conditioning-systems-227465-600x400.jpeg",
  },
  {
    img: "http://mydecorative.com/wp-content/uploads/2018/05/HVAC-Contractor.jpg",
  },
];
