import React, { useEffect } from 'react'
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Buttons, CardsSection, TypographyText } from '../ReusableComponent/Reusab';
import { Box, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const Contact = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0); 
}, []);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
      <div>
                <CardsSection
        backgroundImage="https://ryse.radiantthemes.com/wp-content/uploads/2020/12/banner-bg.png"
        txt1="Contact Us"
        txt2="Donec sollicitudin magnaultric semper. Lorem ipsum dolor
        sit amet consectetur.​"
        imges="https://ryse.radiantthemes.com/wp-content/uploads/2020/12/contact.png"
      />
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
                Typography={
                  <>Get in Touch</>
                }
                color="#1E1666"
                fontSize="30px"
                fontWeight="600"
                textAlign={!isSmallScreen ? "left" : "centre"}
              />
            </Grid>
            <Grid item xs={12}>
              <hr
                width="50px;"
                color="red"
                size="5"
                style={{ margin: !isSmallScreen ? 0 : "auto" }}
              ></hr>
            </Grid>
            <Grid item xs={12}>
              <br />
              <TypographyText
                Typography={
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies, nisi in maximus volutpat, turpis erat semper est. In leo tortor, lobortis et urna id, lora consequat.
                  </>
                }
                color="#6A7C92"
                textAlign="left"
              />
              <br />
            </Grid>

            <Grid item xs={12}>
              {Listcontent.map((data, index) => (
                <ListItem disablePadding>
                  <ListItemButton
                    style={{ backgroundColor: "transparent" }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    <ListItemIcon>
                      <img src={data.listimg} alt="" />
                    </ListItemIcon>
                    <ListItemText
                      primary={data.listtxt}
                      sx={{ color: "#6A7C92", fontSize: ".9rem" }}
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
              backgroundColor: "whitesmoke",
              borderRadius: "10px",
            }}
          >
            <Grid item xs={12} lg={12} md={12} sm={12}>
              <TypographyText
                Typography={<>Drop Us a Line</>}
                fontWeight="bolder"
                color="#1E1666"
                fontSize="25px"
              />
            </Grid>

        
            {contactform.map((data, index) => (
              <Grid
                item
                xs={12}
                lg={12}
                md={12}
                sx={{ pr: "16px", pb: "16px" }}
                >{index === 2 ? <textarea
                    fullWidth
                    type="text"
                    name="name"
                    placeholder={data.placeholder}
                   
                    required
                    style={{
                        height: "150px",
                        width: "100%",
                        border: "none",
                        fontFamily:'Inter' ,   
                        backgroundColor: "#FDFEFF",
                    }} /> :
                    <input
                        fullWidth
                        type="text"
                        name="name"
                        placeholder={data.placeholder}
                 
                        required
                        style={{
                            height: "40px",
                            width: "100%",
                            border: "none",
fontFamily:'Inter' ,                           backgroundColor: "#FDFEFF",
                        }}
                    />}
              </Grid>
            ))}
            <Grid item xs={12} sx={{ pr: "16px", pb: "16px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: !isSmallScreen ? "flex-start" : "center",
                }}
              >
                <Buttons
                  Buttonname="Send a Message"
                  className="button1"
                  width="100%"
                />
              </Box>
            </Grid>
          </Grid>
              </Grid>
          </Grid>
          <div style={{ height: '100vh', width: '100%' }}>
          <Map
                    google={props.google}
                    style={{ width: '100%', height: '100%', position: 'relative' }}
                    className={'map'}
                    zoom={14}
                    initialCenter={{ lat: 37.759703, lng: -122.428093 }}
                >
                    <Marker name={'Dolores park'} position={{ lat: 37.759703, lng: -122.428093 }} />
                </Map>
    </div> 
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyADOQouhmntJTwG6N0oAaakDOvLxJuEpKw'
})(Contact);
const contactform = [
    { placeholder: "Name" },
    { placeholder: "Email" },
    { placeholder: "Comment" },
  
  ];
const Listcontent = [
    {
      listimg:
        "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/contact-form-new-icon1.png",
        listtxt: <>
            121 King Street, Melbourne<br/>
            Victoria 3000 Australia</>,
    },
    {
      listimg:
        "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/contact-form-new-icon2.png",
      listtxt:<>
      121 King Street, Melbourne<br/>
      Victoria 3000 Australia</>,
    },
    {
      listimg:
        " https://ryse.radiantthemes.com/wp-content/uploads/2019/06/contact-form-new-icon3.png",
      listtxt: <>
      121 King Street, Melbourne<br/>
      Victoria 3000 Australia</>,
    },
  ];
  