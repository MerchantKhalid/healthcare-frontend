import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const Specialty = async () => {
  const res = await fetch('http://localhost:5000/api/v1/specialties', {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialities } = await res.json();
  return (
    <Container>
      <Box>
        <Box
          sx={{
            margin: '40px 0px',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              textAlign: 'start',
            }}
          >
            <Typography variant="h4" fontWeight={600}>
              <h2>Explore Treatments Across Specialities</h2>
            </Typography>
            <Typography
              component="p"
              variant="h4"
              fontWeight={300}
              fontSize={18}
            >
              Experienced Doctor Across All Specialities
            </Typography>
          </Box>
          <Stack direction="row" gap={5} mt={5}>
            {specialities.map((speciality: any) => (
              <Box
                key={speciality.id}
                sx={{
                  flex: 1,
                  width: '150px',
                  backgroundColor: 'rgba(245,245,245,1)',
                  border: '1 px solid rgba(250,250,250,1)',
                  borderRadius: '10px',
                  textAlign: 'center',
                  padding: '40px 10px',
                  '& img': {
                    width: '50px',
                    height: '50px',
                    margin: '0 auto',
                  },
                  '&:hover': {
                    border: '1px solid blue',
                  },
                }}
              >
                <Image
                  src={speciality.icon}
                  width={100}
                  height={100}
                  alt="icon1"
                />
                <Box>
                  <Typography
                    component="p"
                    variant="h4"
                    fontWeight={600}
                    fontSize={18}
                    mt={2}
                  >
                    {speciality.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
          <Button variant="outlined" sx={{ marginTop: '25px' }}>
            View All
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Specialty;
