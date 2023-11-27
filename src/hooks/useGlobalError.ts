import { useState } from 'react';

const useGlobalError = () => {
  const [error, setError] = useState<string | null>(null);

  if (error !== null) {
    throw new Error(error);
  }

  return setError;
};

export default useGlobalError;
