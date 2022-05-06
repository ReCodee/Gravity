import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material";
import './NFTCard.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
function NFTCard() {
  return (
      
    <Box id = 'boxx' width = '300px' >
        <Card>
            <CardMedia 
                component= 'img'
                height = '140'
                image = 'https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416__480.png'
            />

                {/* <Typography gutterBottom variant = 'h5' component = 'div'>
                    Astronaut
                </Typography>
                <Typography variant = 'body2' color = 'text.secondary' component = 'div'>
                    #0000000
                </Typography> */}
                <div className="card_content_root">
                    <div className="card_content_1">
                        <div className="card_content_1_left">
                            Astronaut
                            <Typography variant = 'body2' color = 'text.secondary' component = 'div'>
                                #0000000
                            </Typography>
                        </div>
                        <div className="card_content_1_right">
                            <FavoriteBorderIcon color="primary" style={{ fontSize: 40 }}/>
                        </div>
                    </div>
                    <CardActions>
                        <Button id = 'buttonn' size = 'large' >25000 FINS</Button>
                    </CardActions>
                    
                </div>

            
        </Card>
    </Box>
  )
}

export default NFTCard;