import React from 'react';
import Divider from "@mui/material/Divider";

function MyDivider({text}) {
  return (
    <Divider textAlign="left"><p style={{ fontFamily: 'Merriweather, serif', fontSize: '40px', color:'black' }}>{text}</p></Divider>
  );
}

export default MyDivider;