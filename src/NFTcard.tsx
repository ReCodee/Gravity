import { Box, Card, CardContent, Typography } from "@mui/material"
function nftCard() {
  return (
    <Box width = '300px'>
        <Card>
            <CardContent>
                <Typography gutterBottom variant = 'h5' component = 'div'>
                    React
                </Typography>
                <Typography variant = 'body2' color = 'text.secondary'>
                    React is a js library for building user interfaces. React can be used as a base in developmepnt of single page or mobile applications.
                </Typography>
            </CardContent>
        </Card>
    </Box>
  )
}

export default nftCard