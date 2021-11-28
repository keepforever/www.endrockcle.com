import type { NextApiRequest, NextApiResponse } from 'next';

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
  return res.status(200).json({ songs });
};

export default handler;