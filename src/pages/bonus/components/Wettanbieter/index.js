import React from 'react'
import PropTypes from 'prop-types'
import { Box, Card, CardActions, CardContent, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';


function logo(type){
    switch (type) {
        case "n1bet":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="134" height="27" viewBox="0 0 134 27" fill="none">
                <path d="M0.884399 26.1965V0.676661C0.919169 0.5869 1.00262 0.386664 1.21124 0.220951C1.46158 0.0207141 1.73278 0 1.82318 0C3.51995 0 5.22367 0 6.92044 0L18.005 14.2513H19.069V0.766423C19.0968 0.676661 19.1594 0.476425 19.3472 0.289998C19.5558 0.0897612 19.7853 0.0276188 19.8757 0.00690471C21.6002 0.00690471 23.3318 0.00690471 25.0564 0.00690471C25.1607 0.0138094 25.4041 0.0414282 25.6544 0.220951C25.8839 0.386664 25.9951 0.593805 26.0369 0.683566C26.0369 9.19017 26.0369 17.6899 26.0369 26.1965C26.023 26.2793 25.9812 26.5003 25.7935 26.7005C25.5918 26.9215 25.3554 26.9767 25.2719 26.9974C23.4848 26.9974 21.7046 26.9974 19.9174 26.9974L9.12484 12.8704H7.76882V26.3207C7.741 26.4105 7.67842 26.5486 7.55325 26.6867C7.36549 26.8938 7.14296 26.9698 7.04561 26.9974C5.32103 26.9974 3.58949 26.9974 1.86491 26.9974C1.80232 27.0043 1.42681 27.0181 1.1417 26.7281C0.940031 26.521 0.898307 26.2724 0.884399 26.1965Z" fill="#EC3200"></path>
                <path d="M30.0592 6.71085L36.0466 0.00638148H41.4011C41.4567 -0.000523227 41.8114 -0.0350468 42.0965 0.220427C42.326 0.427569 42.3677 0.689948 42.3747 0.765899C42.3747 9.24488 42.3747 17.717 42.3747 26.1959C42.3747 26.265 42.3677 26.4997 42.1939 26.7138C42.027 26.9209 41.8114 26.9831 41.7419 26.9969C39.9756 26.9969 38.2023 26.9969 36.436 26.9969C36.3456 26.9831 36.13 26.9486 35.9283 26.7966C35.7197 26.6378 35.6224 26.4514 35.5876 26.3617C35.5876 20.2579 35.5876 14.161 35.5876 8.05727C35.5737 8.01584 35.4694 7.8018 35.219 7.70513C34.9339 7.60156 34.6836 7.73965 34.6558 7.76037C34.1203 8.2506 33.5779 8.74774 33.0425 9.23798L30.0592 6.71085Z" fill="#EC3200"></path>
                <path d="M77.0608 13.1679C78.5808 13.6492 79.7715 14.4599 80.6328 15.5999C81.4941 16.7146 81.9248 18.0952 81.9248 19.7419C81.9248 22.0726 81.0128 23.8712 79.1888 25.1379C77.3901 26.3792 74.7555 26.9999 71.2848 26.9999H57.5288V0.399902H70.5248C73.7675 0.399902 76.2501 1.02057 77.9728 2.2619C79.7208 3.50324 80.5948 5.1879 80.5948 7.3159C80.5948 8.6079 80.2781 9.76057 79.6448 10.7739C79.0368 11.7872 78.1755 12.5852 77.0608 13.1679ZM63.6468 5.0359V11.3059H69.7648C71.2848 11.3059 72.4375 11.0399 73.2228 10.5079C74.0081 9.9759 74.4008 9.19057 74.4008 8.1519C74.4008 7.11324 74.0081 6.34057 73.2228 5.8339C72.4375 5.3019 71.2848 5.0359 69.7648 5.0359H63.6468ZM70.8288 22.3639C72.4501 22.3639 73.6661 22.0979 74.4768 21.5659C75.3128 21.0339 75.7308 20.2106 75.7308 19.0959C75.7308 16.8919 74.0968 15.7899 70.8288 15.7899H63.6468V22.3639H70.8288Z" fill="white"></path>
                <path d="M107.561 22.0599V26.9999H86.9655V0.399902H107.067V5.3399H93.0835V11.1159H105.433V15.9039H93.0835V22.0599H107.561Z" fill="white"></path>
                <path d="M118.35 5.4159H109.838V0.399902H133.018V5.4159H124.506V26.9999H118.35V5.4159Z" fill="white"></path>
                </svg> 
            )  
            break;
            case "rabona":
                return (
                    "rabona"
                )  
                break;    
            case "librabet":
                return (
                    <img src='https://www.wettboss.com/wp-content/themes/wettboss/assets/images/librabet.png' />
                )  
            break;    
            case "cashpoint":
                return (
                    <img src='https://www.wettboss.com/wp-content/themes/wettboss/assets/images/cashpoint.PNG' />
                )  
            break; 
            case "mrgreen":
                return (
                    <img src='https://www.wettboss.com/wp-content/themes/wettboss/assets/images/mrgreen.png' />
                )  
            break; 
        default:
            break;
    }

}

function Wettanbieter({vorteil1,vorteil2,vorteil3,type}) {
    return (
        <Card  sx={{boxShadow: 3}}>
        <Box height={60} width={"100%"} sx={{background: "black", display: "flex", justifyContent: "center"}} >
            
        {logo(type)}

        </Box>
                                 <CardContent style={{padding: 10}}>
                                     {/* <Typography sx={{textAlign: "center"}} gutterBottom variant="h5" component="div">
                                     N1 Bet
                                     </Typography> */}
                                     <List
             sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
             >
             <ListItem>
                 <ListItemIcon>
                 <CheckIcon color='success' />
                 </ListItemIcon>
                 <ListItemText id="switch-list-label-wifi" primary={vorteil1} />
             </ListItem>
             <Divider />
             <ListItem>
                 <ListItemIcon>
                 <CheckIcon color='success' />
                 </ListItemIcon>
                 <ListItemText id="switch-list-label-wifi" primary={vorteil2} />
             </ListItem>
             <Divider />

             <ListItem>
                 <ListItemIcon>
                 <CheckIcon color='success' />
                 </ListItemIcon>
                 <ListItemText id="switch-list-label-wifi" primary={vorteil3} />
             </ListItem>
             <Divider />

             </List>
             <Typography variant="body2" color="text.secondary">
          
             </Typography>
         </CardContent>
         <CardActions sx={{justifyContent: "center"}}>
             {/* <Button classNameName='pulse' color='error' size="large" variant="contained">JETZT WETTEN</Button> */}
             <a href="https://n1betpartners.com/a99bb436e" target="_blank" className="waves-effect waves-light btn-large red pulse" rel="noopener noreferrer">Jetzt Wetten!</a>
          </CardActions>
         </Card>
    )
}

Wettanbieter.propTypes = {

}

export default Wettanbieter

