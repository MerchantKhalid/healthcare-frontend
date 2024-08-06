import { Box, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import fbIcon from '@/assets/landing_page/facebook.png';
import instaIcon from '@/assets/landing_page/instagram.png';
import linkedinIcon from '@/assets/landing_page/linkedin.png';
import twitterIcon from '@/assets/landing_page/twitter.png';

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26,34)" py={5}>
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/healthplans">
            Health Plan
          </Typography>
          <Typography color="#fff" component={Link} href="/medicine">
            Medicines
          </Typography>
          <Typography color="#fff" component={Link} href="/diagnostics">
            Diagnostics
          </Typography>
          <Typography color="#fff" component={Link} href="ngos">
            NGOs
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" gap={3} py={3}>
          <Image src={fbIcon} alt="FbIcon" width={30} height={30} />
          <Image src={instaIcon} alt="InsIcon" width={30} height={30} />
          <Image src={linkedinIcon} alt="LinkIcon" width={30} height={30} />
          <Image src={twitterIcon} alt="TwIcon" width={30} height={30} />
        </Stack>
        {/* <div className="border-b-[1px] border-dashed"></div> */}
        <Box
          sx={{
            border: '1px dashed lightgray',
          }}
        ></Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={3}
          py={3}
        >
          <Typography component="p" color="white">
            &copy; All rights reserved 2024
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            color="white"
            fontWeight={600}
          >
            <Box component="span" color="primary.main">
              H
            </Box>
            ealth Care
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Terms and Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
