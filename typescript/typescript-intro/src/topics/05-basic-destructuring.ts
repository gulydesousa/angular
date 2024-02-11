interface AudioPlayer {
  audioVolume: number;
  audioDuration: number;
  audioTitle: string;
  details: Details;
}

interface Details {
  artist: string;
  album: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 100,
  audioDuration: 300,
  audioTitle: "Never Gonna Give You Up",
  details: {
    artist: "Rick Astley",
    album: "Whenever You Need Somebody",
    year: 1987,
  },
};

const pokemon =  ['Pikachu', 'Charmander', 'Squirtle', 'Bulbasaur'];

const [, , , fourth, fifth=''] = pokemon;

console.log({fourth, fifth});

const {audioVolume: volumen, audioDuration, audioTitle, details} = audioPlayer;

const { artist, album, year } = details;

console.log({ volumen, audioDuration, audioTitle, artist, album, year });

export {};
