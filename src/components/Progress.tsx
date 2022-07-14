import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';

export default function Progress() {
  return (
    <Box sx={{ display: 'flex', justifyContent:"center", alignItems:"center", marginBottom:"30px"
  }}
    >
      <CircularProgress  size={28} thickness={4}  color="primary" />
      <span style={{marginLeft:"8px"}}>데이터를 불러오는 중...</span>
    </Box>
  );
}


 