import { NextApiRequest, NextApiResponse } from 'next';

import { supabase } from '@/utils/supabaseClient';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  supabase.auth.api.setAuthCookie(req, res);

  return res.status(200).json({
    message: 'Successfully authenticated',
  });
}
