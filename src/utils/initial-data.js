import { partition, shuffle } from './index';
import { songList } from './songs';

const songsTransformed = songList.reduce((accumulator, song) => {
  accumulator[song.song] = { id: song.song, content: song.song };

  return accumulator;
}, {});

// const [setOne, setTwo, setThree] = partition(Object.keys(songs));
// const [setOne, setTwo, setThree] = partition(Object.keys(songsTransformed), 3);
const [setOne, setTwo, setThree] = partition(
  shuffle(Object.keys(songsTransformed)),
  3
);

const initialData = {
  tasks: { ...songsTransformed },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Set 1',
      taskIds: setOne,
    },
    'column-2': {
      id: 'column-2',
      title: 'Set 2',
      taskIds: setTwo,
    },
    'column-3': {
      id: 'column-3',
      title: 'Set 3',
      taskIds: setThree,
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default initialData;
