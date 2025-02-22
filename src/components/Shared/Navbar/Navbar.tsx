'use client';
import AuthButton from '@/components/UI/AuthButton/AuthButton';
import { getUserInfo, removeUser } from '@/services/auth.services';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const AuthButton = dynamic(
    () => import('@/components/UI/AuthButton/AuthButton'),
    { ssr: false }
  );
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          <Box component="span" color="primary.main">
            H
          </Box>
          ealth Care
        </Typography>
        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography component={Link} href="/healthplans">
            Health Plan
          </Typography>
          <Typography component={Link} href="/medicine">
            Medicines
          </Typography>
          <Typography component={Link} href="/diagnostics">
            Diagnostics
          </Typography>
          <Typography component={Link} href="ngos">
            NGOs
          </Typography>
        </Stack>

        <AuthButton />
      </Stack>
    </Container>
  );
};

export default Navbar;
