import { useState } from 'react';
import { setConsent, getConsentState } from '../analytics/events';

export function useCookieConsent() {
  const [consentState, setConsentState] = useState<'accepted' | 'rejected' | null>(
    getConsentState
  );

  const accept = () => {
    setConsent(true);
    setConsentState('accepted');
  };

  const reject = () => {
    setConsent(false);
    setConsentState('rejected');
  };

  return { showBanner: consentState === null, accept, reject };
}
