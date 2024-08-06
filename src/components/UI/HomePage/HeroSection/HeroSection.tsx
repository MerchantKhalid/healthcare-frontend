import { Box, Container, Typography, Button } from '@mui/material';
import Image from 'next/image';
import assets from '@/assets';

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        direction: 'row',
        my: 16,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '700px',
            top: '-145px',
            left: '-120px',
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Come From
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          color="primary.main"
          fontWeight={600}
        >
          Preventive Care
        </Typography>
        <Typography
          variant="h6"
          component="p"
          fontWeight={400}
          sx={{
            my: 4,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          repellendus suscipit ad atque aut, in earum quasi ipsa eius, excepturi
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button>Make Appointment</Button>
          <Button variant="outlined">Contact us</Button>
        </Box>
      </Box>
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          mt: 0,
          position: 'relative',
        }}
      >
        <Box sx={{ position: 'absolute', left: '200px', top: '-30px' }}>
          <Image src={assets.svgs.arrow} width={100} height={100} alt="arrow" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
          }}
        >
          <Box mt={4}>
            <Image
              src={assets.images.doctor1}
              width={240}
              height={380}
              alt="doctor6"
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              width={240}
              height={350}
              alt="doctor2"
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '220px',
            left: '150px',
          }}
        >
          <Image
            src={assets.images.doctor3}
            width={240}
            height={240}
            alt="doctor1"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
