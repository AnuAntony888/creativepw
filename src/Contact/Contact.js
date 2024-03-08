import React, { useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import {
  Banner1,
  Buttons,

  TypographyText,
} from "../ReusableComponent/Reusab";
import {
  Box,
  Button,
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen1 = useMediaQuery(theme.breakpoints.down("sm"));
  const sizes = isSmallScreen ? (isSmallScreen1 ? "20px" : "24px") : "30px";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vpkwic4",
        "template_nml3icd",
        form.current,
        "9zScA-1V-BCm8E_Ck"
      )
      .then(
        (result) => {
          toast.success('Thank you for contact us', {
            position: 'top-right',
            autoClose: 3000, // Duration in milliseconds
          });
        },
        (error) => {
          toast.error('hai', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme,
          });
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
       <Banner1 image="https://sqexpertise.com/wp-content/uploads/2022/02/Contact-Us.jpg" />
      <Grid
        container
        spacing={5}
        sx={{
          p: "6%",
        }}
      >
        <Grid item lg={6} md={6} xs={12} sm={12}>
          <Grid container sx={{}}>
            <Grid item xs={12}>
              <TypographyText
                Typography={<>Get in Touch</>}
                // color="#1E1666"
                fontSize={sizes}
                fontWeight="600"
                textAlign={!isSmallScreen ? "left" : "centre"}
              />
            </Grid>
            <Grid item xs={12}>
              <hr
                width="50px;"
                color="#BD0F65"
                size="5"
                style={{ margin: !isSmallScreen ? 0 : "auto" }}
              ></hr>
            </Grid>
            <Grid item xs={12}>
              <br />
              <TypographyText
                Typography={
                  <>
                    Feel free to reach out to Creative Power Electromechanical
                    Works L.L.C for all your electromechanical needs.
                  </>
                }
                color="#6A7C92"
                textAlign="left"
                fontSize= "15px" 
              />
              <br />
            </Grid>

            <Grid item xs={12}>
              {Listcontent.map((data, index) => (
                <ListItem disablePadding>
                  <ListItemButton
                    style={{ backgroundColor: "transparent",fontFamily: "Lora"  }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    <ListItemIcon sx={{width:'25px'}}>
                {data.listimg} 
                    </ListItemIcon>
                    <ListItemText
                      primary={data.listtxt}
                      sx={{ color: "#6A7C92", fontSize: "15px" ,fontFamily: "Lora"  }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} md={6} xs={12} sm={12}>
          <Grid
            container
            spacing={2}
            sx={{
              padding: "3%",
              // backgroundColor: "whitesmoke",
              borderRadius: "10px",
            }}
          >
            <Grid item xs={12} lg={12} md={12} sm={12}>
              <TypographyText
                Typography={<>Drop Us a Line</>}
                fontWeight="bolder"
                // color="#1E1666"
                fontSize={sizes}
              />
            </Grid>
            <Grid
              item
              xs={12}
              lg={12}
              md={12}
              sx={{ border: "dashed 2px lightgray", margin: "10px" }}
            >
              {" "}
              <form action="" ref={form} onSubmit={sendEmail}>
                <Grid container spacing={2}>
                  <Grid item xs={12} lg={12} md={12} sx={{ pr: "16px" }}>
                    <p className="contacttext">Your Name</p>
                    <input
                      fullWidth
                      type="text"
                      name="name"
                      required
                      style={{
                        height: "35px",
                        width: "100%",
                        border: "none",
                        backgroundColor: "#F7F7F7",
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} lg={12} md={12} sx={{ pr: "16px" }}>
                    <p className="contacttext">Your Email Address</p>
                    <input
                      fullWidth
                      type="email"
                      name="email"
                      required
                      style={{
                        height: "35px",
                        width: "100%",
                        border: "none",
                        backgroundColor: "#F7F7F7",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={12} md={12} sx={{ pr: "16px" }}>
                    <p className="contacttext">Phone</p>
                    <input
                      fullWidth
                      type="text"
                      name="phone"
                      required
                      style={{
                        height: "35px",
                        width: "100%",
                        border: "none",
                        backgroundColor: "#F7F7F7",
                      }}
                    />
                  </Grid>
                  

                  <Grid item xs={12} lg={12} md={12} sx={{ pr: "16px" }}>
                    <p className="contacttext">Message</p>

                    <textarea
                      name="message"
                      rows="10"
                      required
                      style={{
                        border: "none",
                        width: "100%",
                        backgroundColor: "#F7F7F7",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={12} md={12} sx={{ pr: "16px" }}>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        bgcolor: "#BD0F65",
                        color: "#fff",
                        textAlign: "left",
textTransform:'capitalize',
                        fontFamily: "Lora",
                      }}
                    >
                      Send Message
                    </Button>
                    <br />
                    <br />
                  </Grid>
                </Grid>
              </form>
            </Grid>
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
const contactform = [
  { placeholder: "Name" },
  { placeholder: "Email" },
  { placeholder: "Comment" },
];
const Listcontent = [
  {
    listimg:
    <LocationOnIcon sx={{ color: "      #6a7c92" }} />,
    listtxt: (
      <>
        <span className="blodcontent">Address</span>
        
        <br />
        Creative Power Electromechanical Works L.L.C
        <br />
        Key Business Building Near Hyundai Show Room Alkhabaisi,
        <br />
        Office M303,
        <br />
        Dubai, Deira , United Arab Emirates
      </>
    ),
  },
  {
    listimg:
    <PhoneIcon sx={{ color: "      #6a7c92" }}/>, 
    listtxt: (
      <>
   +971 42731990
      </>
    ),
  },
  {
    listimg:
<SmartphoneIcon sx={{ color: "      #6a7c92" }} />,
    listtxt: (
      <>
   +971 551474827
      </>
    ),
  },
  {
    listimg:
    <EmailIcon sx={{ color: "      #6a7c92" }} />,
    listtxt: (
      <>
        info@creativepw.com
      </>
    ),
  },
  {
    listimg:
    <LanguageIcon sx={{ color: "      #6a7c92" }} />,
    listtxt: (
      <>
        www.creativepw.com
      </>
    ),
  },
];
// import React from 'react'

// const Contact = () => {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact
