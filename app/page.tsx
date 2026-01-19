'use client';

import { useOSStore } from '@/store/useOSStore';
import Desktop from '@/components/os/Desktop';
import BootSequence from '@/components/os/BootSequence';

export default function Home() {
  const { bootPhase } = useOSStore();

  return (
    <>
      <BootSequence />
      {bootPhase === 'DESKTOP' && <Desktop />}
    </>
  );
}
