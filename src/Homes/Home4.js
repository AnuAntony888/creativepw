import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Parallax } from "react-parallax";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Buttons, TypographyText } from "../ReusableComponent/Reusab";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
const Home4 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen1 = useMediaQuery(theme.breakpoints.down("sm"));
  const sizes = isSmallScreen ? (isSmallScreen1 ? "20px" : "24px") : "30px";
  const Datas = [
    {
      imges: "https://ik.imagekit.io/jlco9jzsq/creativepower/projects-banner-new.jpg?updatedAt=1710091534497",
    },
  ];
  return (
    <div>
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
            Typography={
              <>
                List Of Completed Projects
                {/* Accomplished List of Projects */}
              </>
            }
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
      </Grid>

      {/***************** */}
      {Datas.map((data, indexs) => {
        return (
          <div key={indexs}>
            <Parallax
              bgImage={data.imges}
              strength={300}
              style={{
                backgroundSize: "cover",
                objectFit: "cover",
                height: "70vh", // Adjusted for full screen height
                display: "flex",
                alignItems: "center",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
              }}
            >
              <Grid
                container
                spacing={0}
                className="large-header"
                sx={{
                  height: "70vh",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    left: 0,
                    backgroundColor: "rgba(0,0,0,.7)", // Adjust color and opacity as needed
                  }}
                ></Box>

                <Grid
                  container
                  Spacing={3}
                  sx={{
                    zIndex: 1,
                  }}
                >
                  <Grid item xs={12} sx={{ margin: "auto", p: "2%" }}>
                    <div data-aos="fade-right">
                      <TypographyText
                        Typography={
                          <>
                            Welcome to Creative Power Electromechanical Works
                            L.L.C!
                            <br />
                            Contact us today to power your innovative solutions.
                          </>
                        }
                        color="#fff"
                        fontWeight="600"
                        textAlign={"centre"}
                        fontSize={isSmallScreen ? "1.25rem" : "1.3rem"}
                      />
                      <br />
                      <Buttons
                        className="button1"
                        Buttonname={
                          <>
                            <Link to="/contactus">Contact Us</Link>
                          </>
                        }
                        bgcolor="#BD0F65"
                        bgcolor1="#BD0F65"
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Parallax>
          </div>
        );
      })}
    </div>
  );
};

export default Home4;
export const Data = [
  {
    txt: "B+G+6+R Building at AL QUSAIS 2nd PLOT NO: 233-123, Dubai. Scope – MEP Works (Under Main contractor: Majal Contracting LLC).",
  },
  {
    txt: "B+G+6+R Building at AL Warqa Plot No : 421-2091, Dubai. Scope – MEP Works (Building Name BAITHI-1 & 2 Under Main contractor: Majal Contracting). ",
  },
  {
    txt: "B+G+6+R Building at Plot No:421-0353  Warqa 1st , Dubai. Scope of Work – MEP Works (Under Main contractor: Majal Contracting LLC).",
  },

  {
    txt: "42 nos G+1 Town House Villa Building at AL Furjan, Dubai.Scope – MEP Works ( Main contractor : Abdulla bin Dasmal contracting llc).",
  },

  { txt: " G+ 4 Labor CAMP MEP Works(Main contractor: DNB construction LLC)." },
  {
    txt: "	G+4 Residential Building MEP Works (Main contractor: 3D Construction LLC).",
  },
  {
    txt: "	Holiday inn express hotel- Dubai airport CPVC plumbing Renovation works ",
  },
  {
    txt: "	Office Project Exchange Tower Floor 20th  (Complete Civil & MEP works)",
  },
  { txt: "	Al Khawaneej Majlis Building (Interior and MEP Works)." },
  { txt: "	Hotel Room Renovation Works (Holiday inn express DIC)." },
  {
    txt: "	G+1 Building at Lahbab, Dubai. Scope of MEP Works (Main contractor: Somar contracting LLC).",
  },
  {
    txt: "	Ware House Project Jebel ali Dubai MEP Works (Main contractor: 3D Construction LLC).",
  },
  {
    txt: "	G+2 Residential Building MEP Works (Main contractor: Stonehill contracting LLC).",
  },
  {
    txt: "	B+G+1 Residential Villa Khawaneej MEP Works (Main contractor: Majal Contracting llc).",
  },
  {
    txt: "	B+G+1 Residential Villa Safa park MEP Works (Main contractor: 3D Construction LLC).",
  },
  {
    txt: "	B+G+1 Residential Villa Al Tawar MEP Works (Main contractor: 3D Construction LLC).",
  },
  { txt: "Carrefour market Electrical Works (Ras al khaima)." },
  {
    txt: "	G+5 Building Electrical & Civil maintenance works (Holiday inn express hotel Dubai 4Nos Safa,Airport,Jumeira & DIC.",
  },
  { txt: "	 ALOFT ABUDHABI Scope of Work Included Fit Out Works." },
  {
    txt: "	 36Nos Office at Business center Business bay building (3D construction).",
  },
  { txt: " Crowne plaza Hotel Deira, Spice Island Restaurant Fit out works. " },
  { txt: " Rajadani Restaurant Fit out works." },
  { txt: " Al jawarah Restaurant Complete fit Out works. " },
  { txt: "	 G+1 Villa Palm Jumeirah & Office works with (Quantum interiors)." },
  {
    txt: "	Mind share Office (45th Floor) Twin Tower Sheik said Road.(Interior and MEP).",
  },
];
