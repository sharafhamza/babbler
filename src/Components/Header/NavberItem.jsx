import { Typography } from '@mui/material'
import React from 'react'
const NavberItem = ({item}) => {
  return (
<Typography sx={{fontWeight: 600}}  variant="body1" component="li" color="primary.main">
    {item}
</Typography>
  )
}

export default NavberItem
