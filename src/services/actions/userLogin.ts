'use server';

import { IFormValues } from '@/app/login/page';

export const userLogin = async (data: IFormValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      cache: 'no-store',
    }
  );
  const userInfo = await res.json();
  return userInfo;
};
