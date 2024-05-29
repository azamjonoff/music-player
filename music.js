const audioEl = document.getElementById("audio");
const coverEl = document.getElementById("cover");
const titleEl = document.getElementById("title");
const musicContainer = document.getElementById("music-container");
const volumeEl = document.getElementById("volume");
const volumeValue = document.getElementById("volume-value");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");

audioEl.volume = 0.5;
volumeValue.textContent = 50;

const backwardBtn = document.getElementById("backward");
const playBtn = document.getElementById("play");
const forwardBtn = document.getElementById("forward");

const musics = [
  "Konsta-Bilmaydi",
  "Arctic Monkeys - I Wanna Be Yours",
  "Billie-Eilish-Lovely",
  "Bo'jalar-Seni-Men-Sog'inganda",
  "Eminem-MockinBird",
  "Glaza-Karie-Elbrus-Janmirzayev",
  "Guf-Ice-Baby",
  "Jah-Khalib-Lilovaya",
  "Jahongir-Otajonov-Ayol-Makri",
  "Ne-Jenyus-Ya-Jenyus",
  "Oleg-Kenzov-Pacanskaja",
  "Rauf-Detsvo",
  "Slushii-Past-Lives",
  "Tom-Odell-Another-Love",
];

let currentSong = 0;

const changeMusic = (curMusic) => {
  coverEl.src = `./images/${curMusic}.jpg`;
  audioEl.src = `./sounds/${curMusic}.mp3`;
  titleEl.textContent = curMusic;
};

const playMusic = () => {
  musicContainer.classList.add("play");
  playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  audioE1.play();
};

const pouseMusic = () => {
  musicContainer.classList.remove("play");
  playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
  audioEl.pause();
};

const play = () => {
  const state = musicContainer.classList.contains("play");

  if (state) {
    pouseMusic();
  } else {
    playMusic();
  }
};

const next = () => {
  if (currentsong > musics.length - 1) {
    currentSong = 0;
  } else {
    currentSong++;
  }
  changeMusic(musics[currentsong]);
  playMusic();
};

const prev = () => {
  if (currentSong == 0) {
    currentSong = musics.length - 1;
  } else {
    currentSong--;
  }

  changeMusic(musics[currentSong]);
  playMusic();
};

const changeVolume = () => {
  audioEl.volume = volumeEl.value / 100;
  volumeValue.textContent = volumeEl.value;
};

const changeProgress = (e) => {
  let currentTime = e.target.currentTime;
  let duration = e.target.duration;

  progress.style.width = `${(currentTime / duration) * 100}%`;
};

const timeUptade = function (e) {
  const width = this.clientWidth;
  const clientX = e.offsetX;

  audioEl.currentTime = (clientX / width) * audioEl.duration;
};

playBtn.addEventListener("click", play);
forwardBtn.addEventListener("click", next);
backwardBtn.addEventListener("click", prev);
volumeEl.addEventListener("input", changeVolume);
audioEl.addEventListener("timeUptade", changeProgress);
progressContainer.addEventListener("click", timeUptade);
audioEl.addEventListener("ended", next);
