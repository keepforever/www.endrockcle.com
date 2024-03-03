export const songs = [
  {
    artist: 'Bowling for Soup',
    title: '1985',
  },
  {
    artist: 'Pearl Jam',
    title: 'Alive',
  },
  {
    artist: 'Smash Mouth',
    title: 'All Star',
  },
  {
    artist: 'Blink-182',
    title: 'All the Small Things',
  },
  {
    artist: 'Tom Petty and the Heartbreakers',
    title: 'American Girl',
  },
  {
    artist: 'Green Day',
    title: 'Basket Case',
  },
  {
    artist: 'Weezer',
    title: 'Buddy Holly',
  },
  {
    artist: 'Rage Against the Machine',
    title: 'Bulls on Parade',
  },
  {
    artist: 'Hole',
    title: 'Celebrity Skin',
  },
  {
    artist: 'The Presidents of the United States of America',
    title: 'Cleveland Rocks',
  },
  {
    artist: 'Semisonic',
    title: 'Closing Time',
  },
  {
    artist: 'The Offspring',
    title: 'Come Out and Play',
  },
  {
    artist: 'Radiohead',
    title: 'Creep',
  },
  {
    artist: 'Blink-182',
    title: 'Dammit',
  },
  {
    artist: '311',
    title: 'Down',
  },
  {
    artist: 'Rob Zombie',
    title: 'Dragula',
  },
  {
    artist: 'Foo Fighters',
    title: 'Everlong',
  },
  {
    artist: 'Sum 41',
    title: 'Fat Lip',
  },
  {
    artist: 'Harvey Danger',
    title: 'Flagpole Sitta',
  },
  {
    artist: 'Bush',
    title: 'Glycerine',
  },
  {
    artist: 'Better Than Ezra',
    title: 'Good',
  },
  {
    artist: 'Green Day',
    title: 'Good Riddance (Time of Your Life)',
  },
  {
    artist: 'Gin Blossoms',
    title: 'Hey Jealousy',
  },
  {
    artist: 'Misfits',
    title: 'Hybrid Moments',
  },
  {
    artist: 'The Darkness',
    title: 'I Believe in a Thing Called Love',
  },
  {
    artist: 'Ramones',
    title: 'I Wanna Be Sedated',
  },
  {
    artist: 'Eve 6',
    title: 'Inside Out',
  },
  {
    artist: 'Stone Temple Pilots',
    title: 'Interstate Love Song',
  },
  {
    artist: 'Rage Against the Machine',
    title: 'Killing in the Name',
  },
  {
    artist: 'The Strokes',
    title: 'Last Nite',
  },
  {
    artist: 'Nirvana',
    title: 'Lithium',
  },
  {
    artist: 'Green Day',
    title: 'Longview',
  },
  {
    artist: 'Bush',
    title: 'Machinehead',
  },
  {
    artist: 'Alice in Chains',
    title: 'Man in the Box',
  },
  {
    artist: 'The Killers',
    title: 'Mr. Brightside',
  },
  {
    artist: 'Foo Fighters',
    title: 'My Hero',
  },
  {
    artist: 'Weezer',
    title: 'My Name Is Jonas',
  },
  {
    artist: 'Lit',
    title: 'My Own Worst Enemy',
  },
  {
    artist: 'Stone Temple Pilots',
    title: 'Plush',
  },
  {
    artist: 'Rancid',
    title: 'Ruby Soho',
  },
  {
    artist: 'Beastie Boys',
    title: 'Sabotage',
  },
  {
    artist: 'Sublime',
    title: 'Santeria',
  },
  {
    artist: 'Weezer',
    title: "Say It Ain't So",
  },
  {
    artist: 'Third Eye Blind',
    title: 'Semi-Charmed Life',
  },
  {
    artist: 'The White Stripes',
    title: 'Seven Nation Army',
  },
  {
    artist: 'Marcy Playground',
    title: 'Sex and Candy',
  },
  {
    artist: 'Collective Soul',
    title: 'Shine',
  },
  {
    artist: 'Cake',
    title: 'Short Skirt / Long Jacket',
  },
  {
    artist: 'Goo Goo Dolls',
    title: 'Slide',
  },
  {
    artist: 'Nirvana',
    title: 'Smells Like Teen Spirit',
  },
  {
    artist: 'Blur',
    title: 'Song 2',
  },
  {
    artist: 'Fountains of Wayne',
    title: "Stacy's Mom",
  },
  {
    artist: 'Fall Out Boy',
    title: "Sugar, We're Going Down",
  },
  {
    artist: 'Bryan Adams',
    title: "Summer of '69",
  },
  {
    artist: 'Wheatus',
    title: 'Teenage Dirtbag',
  },
  {
    artist: 'Good Charlotte',
    title: 'The Anthem',
  },
  {
    artist: 'Jimmy Eat World',
    title: 'The Middle',
  },
  {
    artist: 'The Smashing Pumpkins',
    title: 'Today',
  },
  {
    artist: 'Chumbawamba',
    title: 'Tubthumping',
  },
  {
    artist: 'Red Hot Chili Peppers',
    title: 'Under the Bridge',
  },
  {
    artist: 'Kings of Leon',
    title: 'Use Somebody',
  },
  {
    artist: 'Sublime',
    title: 'What I Got',
  },
  {
    artist: 'Blink-182',
    title: "What's My Age Again?",
  },
  {
    artist: 'Green Day',
    title: 'When I Come Around',
  },
  {
    artist: 'The Killers',
    title: 'When You Were Young',
  },
  {
    artist: 'Pixies',
    title: 'Where is My Mind?',
  },
  {
    artist: 'Oasis',
    title: 'Wonderwall',
  },
  {
    artist: 'The Cranberries',
    title: 'Zombie',
  },
].map((song, index) => ({
  ...song,
  id: index + 1,
}));

// a function that takes in the song list above and returns a list sorted by title alphabetically and give a new sequential id
const sortSongs = (
  songs: {
    id: number;
    artist: string;
    title: string;
  }[]
) => {
  const sortedSongs = songs.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  return sortedSongs.map((song, index) => {
    return { ...song, id: index };
  });
};

export const newSongs = sortSongs(songs);
