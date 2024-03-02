import React, { useEffect } from "react";
import {
  Buttons,
  CardsSection,
  Section2,
  TypographyText,
} from "../ReusableComponent/Reusab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Grid } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Freequate = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
}, []);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <CardsSection
        backgroundImage="https://ryse.radiantthemes.com/wp-content/uploads/2020/12/banner-bg.png"
        txt1="Free Quote"
        txt2="Donec sollicitudin magnaultric semper. Lorem ipsum dolor
        sit amet consectetur.​"
        imges="https://ryse.radiantthemes.com/wp-content/uploads/2020/12/free-quote.png"
      />
      <Section2
        text1="SEO Quote Request Form"
        pt= "5%"
        text2={
          <>
            {" "}
            Please fill out the form below to receive a free quote for our
            search marketing services. Select what services you are interested
            in below and we’ll contact you as soon as possible.
          </>
        }
      />
      <Box sx={{ p: "6%" }}>
        <Grid
          container
          spacing={2}
          sx={{
            padding: "2%",
            backgroundColor: "whitesmoke",
            borderRadius: "10px",
          }}
        >
          {contactform.map((data, index) => (
            <Grid
              item
              xs={12}
              lg={index===8||index==9?12:6}
              md={index===8||index==9?12:6}
              sm={12}
              sx={{ pr: "16px", pb: "16px" }}
            >{index === 6 || index === 7 ||index === 8 || index === 9 ? <TypographyText
              Typography={data.text}
                fontSize=".8rem"
            color="#6A7C92"
                textAlign="left" /> : ''}
              
              {index === 8 || index == 9 ? <textarea
                fullWidth
                type="text"
                name="name"
                placeholder={data.placeholder}
                   
                required
                style={{
                  height: "150px",
                  width: "100%",
                  border: "none",
                  fontFamily: 'Inter',
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

                    backgroundColor: "#FDFEFF",
                  }}
                />}
            </Grid>
          ))}

<Grid item xs={12} lg={12} sx={{ pr: "16px", pb: "16px" ,margin:'auto'}}>
    <Box
        sx={{
            display: "flex",
            justifyContent: "center",
        }}
    >
        <Buttons
            Buttonname="Submit Request"
            className="button1"
        />
    </Box>
</Grid>

        </Grid>
      </Box>
    </div>
  );
};

export default Freequate;
const contactform = [
  { placeholder: "Website URL" },
  { placeholder: "Company Name" },
  { placeholder: "First Name" },
  { placeholder: "Last Name" },
  { placeholder: "Phone Number" },
  { placeholder: "Email Address" },
  {
    text: 'Approximate Monthly Budget',
    placeholder: ''
  },
  {
    text: 'What services are you interested in?',
    placeholder: ''
  },
  {
    text: 'Tell us a little about your Web site and the services you are interested in:',
    placeholder: ''
  },
  {
    text: 'Please include a handful of your major keywords',
    placeholder: ''
  },
];
