import "./profileCalender.scss";

import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { StyledEngineProvider } from "@mui/system";
// import { makeStyles } from '@mui/styles';


// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 480,
//     padding: '0 30px',
//     gap: '90px',
//   },
// });


const ProfileCalender = () => {
  // const classes = useStyles();
  return (
    // <StyledEngineProvider injectFirst>
    <div className="profileCalender">
      {/* <div className="profileTop"></div>
      <div className="profileMiddle"></div>
    <div className="profileBottom"></div> */}

    <LocalizationProvider 
    className="calender"
    // dateAdapter={AdapterDateFns}
    // OR
    dateAdapter={AdapterDayjs}
    
    >
      <DateCalendar 
      // className="tester" 
      // sx={{ gap: 3 }}
      // className={classes.root}
      />
    </LocalizationProvider>
      
    </div>
      // </StyledEngineProvider>
  )
}

export default ProfileCalender



