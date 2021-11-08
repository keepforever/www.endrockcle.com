/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@supabase/gotrue-js';
import { useEffect, useState } from 'react';

import { supabase } from '@/utils/supabaseClient';

export const useUserProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState<User | null>(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      let profileDataResp = null;
      try {
        profileDataResp = await supabase.auth.user();
        console.log('\n', `profileDataResp = `, profileDataResp, '\n');

        setApiData(profileDataResp);
      } catch (error: any) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { isLoading, user: apiData, serverError };
};
