// reactions indexes: 0=likes, 1=dislikes, 2=angry, 3=wow

const songReviews = [
    {
        songTitle:"Seize The Day" ,
        singer: "Avenged Sevenfold" ,
        genre: "Metal" ,
        userName: "FajarNoobArt",
        review: "I don’t care how many years go by, this song will always be amazing and hits different each time I hear it" ,
        reactions: [120,30,5,46] ,
        datePosted: new Date("2021-06-04"),
        source: "https://www.youtube.com/watch?v=jUkoL9RE72o"
    },
    {
        songTitle:"Memories" ,
        singer: "Maroon 5",
        genre: "Pop",
        userName: "The last avenger",
        review: "The saddest part of life is when the person who gave you the best memories becomes a memory",
        reactions: [328,55,14,30],
        datePosted: new Date("2021-08-10"),
        source: "https://www.youtube.com/watch?v=SlPhMPnQ58k"
    },
    {
        songTitle:"Comfortably numb" ,
        singer: "Pink Floyd",
        genre: "Rock",
        userName:"Theblackhours" ,
        review: "My first time hearing this masterpiece. I hope this gives you chills when you see this to remind of the first time you heard this and makes you feel like it’s the first time all over again",
        reactions:[560,123,56,277],
        datePosted: new Date("2020-04-23"),
        source: "https://www.youtube.com/watch?v=_FrOQC-zEog"
    },
    {
        songTitle: "The Bones",
        singer: "Marrin Morris",
        genre: "Countrey",
        userName:"Becca Edwards" ,
        review: "I lost my husband to Covid on October 6, 2020 and this song was what I selected to use in his tribute video when our pictures were shown. It speaks volumes to real relationships that go through ups and downs️  Peace and blessings to all who are heartbroken ",
        reactions:[800,3,10,70] ,
        datePosted:new Date("2023-03-09") ,
        source: "https://www.youtube.com/watch?v=gvPMVKUI9go"

    },
    {
        songTitle:"Here Without You" ,
        singer: "3 Doors Down",
        genre: "Rock",
        userName:"wolfuccino2" ,
        review: "Still a killer hit, sad part is the older you get the more real this song becomes" ,
        reactions: [280,103,45,78],
        datePosted:new Date("2018-07-09") ,
        source: "https://www.youtube.com/watch?v=kPBzTxZQG5Q"
    },
    {
        songTitle: "Dance  Monkey" ,
        singer: "Tones And I" ,
        genre:"Soul" ,
        userName:"Tobias Weit" ,
        review: "THIS GOES HARD ON MUTE ",
        reactions: [150,51,23,15],
        datePosted:new Date("2023-01-01") ,
        source: "https://www.youtube.com/watch?v=q0hyYWKXF0Q"
    },
    {
        songTitle:"Headlines" ,
        singer: "Drake",
        genre: "Hip-Hop" ,
        userName: "James43",
        review:"This song hits so different after not hearing it in years " ,
        reactions: [600,200,14,18],
        datePosted: new Date("2017-03-03"),
        source: "https://www.youtube.com/watch?v=cimoNqiulUE"
    },
    {
        songTitle: "Everything I Wanted",
        singer: "Arizona Zervas" ,
        genre: "Alternative",
        userName: "Ardita",
        review: "This song sounds like heaven but hurts like hell",
        reactions:[100,30,5,12] ,
        datePosted:new Date("2021-03-03") ,
        source: "https://www.youtube.com/watch?v=EgBJmlPo8Xw"
    },
    {
        songTitle:"Him and I " ,
        singer:"G-Eazy" ,
        genre:"Electronic" ,
        userName: "Rocklover",
        review: "The more I listen to this song, the more I love it",
        reactions: [100,20,2,20],
        datePosted:new Date("2020-07-23") ,
        source: "https://www.youtube.com/watch?v=SA7AIQw-7Ms"
    },
    {
        songTitle: "God’s Plan",
        singer: "Drake",
        genre: "Hip-Hop",
        userName: "kimaf",
        review: "I have never been a Drake fan, but it's just something with this song and video, I get glad when I see it, appreciating life and what I have more.",
        reactions: [300, 200, 300, 500],
        datePosted: new Date("2023-02-21"),
        source: "https://www.youtube.com/watch?v=xpVfcZ0ZcFM"
    },
    {
        songTitle: "What They Want",
        singer: "Russ",
        genre: "Rap",
        userName: "itsrealkenna",
        review: "His music hits hard when you have been though the motions of life, and you just tryna understand why everything keep happening to you and the way it does but sometimes you just gotta let it go and live stress fire. Thank you for being as real as you are Russ. Hopefully one day my music can have the same impact as yours",
        reactions:[908, 60, 20, 10],
        datePosted: new Date("2022-12-03"),
        source: "https://www.youtube.com/watch?v=oorK4RPgZ8Q"
    },
    {
        songTitle: "Blinding Lights",
        singer: "The Weekend",
        genre: "R&B",
        userName: "Cayla Corrigan",
        review: "The day this video was released was the day I quit drugs. 3 years sober because of this song and the song “Clover Cage - Ego Dissolution”. Those are the two songs keeping me sane through these tough times. I just want to send love to everyone and I want everyone to know things will get better. We are in this together..I love you ️",
        reactions: [130, 14, 0, 30],
        datePosted: new Date("2023-10-3"),
        source: "https://www.youtube.com/watch?v=4NRXx6U8ABQ"
    },
    {
        songTitle: "Ain't No Sunshine",
        singer: "Bill Withers",
        genre: "R&B",
        userName: "AppulseGamesFR",
        review: `Fun fact : he actually sang "I know" 26 times because he realized that he forgot to write a verse during the recording. When it was over, he wanted to quickly write one, but everybody in the studio told him to keep it`,
        reactions: [780, 10, 5, 300],
        datePosted: new Date("2020–08-07"),
        source: "https://www.youtube.com/watch?v=YuKfiH0Scao"
    },
    {
        songTitle: "Hollywood’s Bleeding",
        singer: "Post Malone",
        genre: "Hip-Hop",
        userName: "Paranormal lazivity",
        review: "His voice, his rapping, the switches between different genre of music THIS SONG IS PERFECT",
        reactions: [470, 120, 11, 25],
        datePosted: new Date("2021-03-21"),
        source: "https://www.youtube.com/watch?v=w5GrxfjuTTI"
    },
    {
        songTitle: "I Feel Good",
        singer: "James Brown",
        genre: "R&B",
        userName: "SKYDORMER",
        review: "Whenever I feel sad or my depression kicks in, I play this song and it never fails to put a smile on my face.",
        reactions: [655, 300, 120, 263],
        datePosted: new Date("2018-05-24"),
        source: "https://www.youtube.com/watch?v=B1wOK9yGUYM"
    },
    {
        songTitle: "Fix You",
        singer: "Coldplay",
        genre: "Rock",
        userName: "Jack",
        review: "I love just how this song gets progressively happier as it goes on, perfect for cheering up someone broken",
        reactions: [255, 20, 15, 9],
        datePosted: new Date("2017-09-03"),
        source: "https://www.youtube.com/watch?v=k4V3Mo61fJM"
    },
    {
        songTitle: "The Box",
        singer: "Roddy Ricch",
        genre: "Hip-Hop",
        userName: "Tyterra",
        review: "This entire video is how everyone's dreams look. Then you wake up and it's a Monday morning.",
        reactions: [300, 200, 12, 15],
        datePosted: new Date("2020-03-15"),
        source: "https://www.youtube.com/watch?v=UNZqm3dxd2w&list=OLAK5uy_lHvgQeq70ANHH58v9aFgQ_aKPF85iPLrw&index=2"
    },
    {
        songTitle: "Wonderwall",
        singer: "Oasis",
        genre: "Alternative",
        userName: "carl",
        review: `When I first learned to play guitar this is the only song I’d play nonstop. My wife would ask “are you ever gonna play anything besides wonderwall?” I said “maybeeeeee”`,
        reactions: [466, 20, 1, 123],
        datePosted: new Date("2021-01-22"),
        source: "https://www.youtube.com/watch?v=bx1Bh8ZvH84"
    },
    {
        songTitle: "Don’t Start Now",
        singer: "Dua Lipa",
        genre: "Pop",
        userName: "Carlos Silve",
        review: "I already can hear this song all over in Zara and H&M",
        reactions: [984, 120, 66, 90],
        datePosted: new Date("2020-10-02"),
        source: "https://www.youtube.com/watch?v=oygrmJFKYZY"
    }
   ]