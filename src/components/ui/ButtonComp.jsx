import { Button, colors, styled } from "@mui/material";


export const ButtonComp =({children,handleClick,className,sx})=>{

  return <CustomButton sx={sx} className={`${className}`} onClick={handleClick}>{children}</CustomButton>
}

const CustomButton = styled(Button)(
    ({theme})=>( {
        backgroundColor: theme.palette.mode =='dark'?colors.grey['100']: colors.grey['900'],
        borderRadius: '10px',
        color: theme.palette.mode =='dark' ? colors.grey['900']: colors.grey['100'], // Rounded corners
        textTransform: 'none', // Disable uppercase text
        padding: '8px 16px', // Custom padding
        fontSize: '16px', // Custom font size
        '&:hover': {
          backgroundColor:theme.palette.mode =='dark' ? colors.grey['400'] : colors.grey['800'], // Custom hover background
        },
        '&.Mui-disabled': {
          backgroundColor: '#424242', // Disabled button background
          color: '#9e9e9e', // Disabled button text color
        },
   })
 );