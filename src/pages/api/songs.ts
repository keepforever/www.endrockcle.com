import type { NextApiRequest, NextApiResponse } from 'next';

import { supabase } from '@/utils/supabaseClient';

type Song = {
  id: string;
  title: string;
  artist: string;
};

type Data = {
  songs: Song[] | null;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { data: songs } = await supabase.from<Song>('songs').select('*');
  // console.log('\n', '\n', `songs = `, songs, '\n', '\n');
  // console.log('\n', '\n', `error = `, error, '\n', '\n');
  return res.status(200).json({ songs });
};

export default handler;
