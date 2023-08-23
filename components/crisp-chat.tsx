'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('e3b0c09b-8bae-492e-ba2e-60e35db3788a');
  }, []);

  return null;
};
