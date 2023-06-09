import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const index = () => {
  return (
    <Grid container spacing={3}>
      {[1, 2, 3, 4, 5].map(item => (
        <Grid item xs={3} key={item}>
          <Card sx={{ boxShadow: "none" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              image="https://picsum.photos/seed/picsum/600"
              sx={{
                height: 200,
                borderRadius: 4,
              }}
            />
            <CardContent sx={{ px: 0 }}>
              <Stack direction="row" gap={2}>
                <Avatar alt="image profile" src="https://picsum.photos/200" />
                <Box>
                  <Typography gutterBottom variant="body1" fontWeight="600">
                    Snowfall in The Lofoten Islands
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Nomadic Ambience
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    2 Tr lượt xem - 1 năm trước
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default index;
