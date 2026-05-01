'use client';

import dynamic from 'next/dynamic';

const SwirlBackground = dynamic(() => import('./swirl-background-client'), {
  ssr: false,
});

export default SwirlBackground;
