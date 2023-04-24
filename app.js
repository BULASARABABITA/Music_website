const music = new Audio('audio\1.mp3');
//music.play();
const songs = [
    {
        id: "1",
        songName: `On My Way <br> <div class="subtitle">Alan Walker</div>`,
        poster: "1.jpg"
    },
    {
        id: "2",
        songName: `Alan Walker-Fade <br> <div class="subtitle">Alan Walker</div>`,
        poster: "2.jpg"
    },
    {
        id: "3",
        songName: `Cartoon - On & On <br> <div class="subtitle">Daniel Levi</div>`,
        poster: "3.jpg"
    },
    {
        id: "4",
        songName: `Warrio Mortals <br> <div class="subtitle">Mortals</div>`,
        poster: "4.jpg"
    },
    {
        id: "5",
        songName: `Ertrugral Gazi <br> <div class="subtitle">Ertrugral</div>`,
        poster: "5.jpg"
    },
    {
        id: "6",
        songName: `Electronic Music <br> <div class="subtitle">Electro</div>`,
        poster: "6.jpg"
    },
    {
        id: "7",
        songName: `Agar Tum Sath Ho <br> <div class="subtitle">Tamashaa</div>`,
        poster: "7.jpg"
    },
    {
        id: "8",
        songName: `Suna Hai <br> <div class="subtitle">Neha Kakker</div>`,
        poster: "8.jpg"
    },
    {
        id: "9",
        songName: `Dilbar <br> <div class="subtitle">Satyameve Jayate</div>`,
        poster: "9.jpg"
    },
    {
        id: "10",
        songName: `Duniya <br> <div class="subtitle">Euka Chuppi</div>`,
        poster: "10.jpg"
    },
    {
        id: "11",
        songName: `Lagdi Lahore Di <br> <div class="subtitle">Street Dancer</div>`,
        poster: "11.jpg"
    },
    {
        id: "12",
        songName: `Putt Jatt Da <br> <div class="subtitle">Putt Jatt Da</div>`,
        poster: "12.jpg"
    },
    {
        id: "13",
        songName: `Baarishein <br> <div class="subtitle">Atif Aslam</div>`,
        poster: "13.jpg"
    },
    {
        id: "14",
        songName: `Vaaste <br> <div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "14.jpg"
    },
    {
        id: "15",
        songName: `Lut Gaye <br> <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "15.jpg"
    },
    {
        id: "16",
        songName: `Tu Meri Jindgi Hai Tu <br> <div class="subtitle">Jubin</div>`,
        poster: "16.jpg"
    },
    {
        id: "17",
        songName: `Batao Yaad Hai Thumko <br> <div class="subtitle">Ustad Rahat</div>`,
        poster: "17.jpg"
    },
    {
        id: "18",
        songName: `Mere Dhol Judaiyan <br> <div class="subtitle">Ali Sethi</div>`,
        poster: "18.jpg"
    },
    {
        id: "19",
        songName: `Eh Munde Pagal Ne Saare <br> <div class="subtitle">Ap dhilon</div>`,
        poster: "19.jpg"
    },
    {
        id: "20",
        songName: `Dunny 82K <br> <div class="subtitle">Ap dhilon, Gurinder</div>`,
        poster: "20.png"
    },
]
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
    } else {
        music.pause();
    }
})




let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click',() => {
    pop_song.scrollLeft -= 330;
})

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click',()=>{
    item.scrollLeft += 330;
})
pop_art_left.addEventListener('click',()=>{
    item.scrollLeft -= 330;
})