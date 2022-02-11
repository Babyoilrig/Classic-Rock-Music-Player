import {writable} from "svelte/store";

export const musicList = writable([
{   image: "acdc-back-in-black.jpeg",
    audio: "AC_DC - Back In Black (Official Video) (128kbit_AAC).m4a",
    name: "Back in black",
    artist: "ACDC"
},
{   image: "motorhead-ace-of-spades.jpeg",
    audio: "Motorhead - Ace Of Spades + Lyrics (HQ) (128kbit_AAC).m4a",
    name: "Ace of Spades",
    artist: "Motorhead"
},

{
    image: "black-sabbath-the-wizard.jpeg",
    audio:"Black Sabbath _The Wizard_ (128kbit_AAC).m4a",
    name: "The Wizard",
    artist: "Black Sabbath"
},
{
    image: "guns-n-roses-night-train.jpeg",
    audio: "Guns and Roses - Night train (128kbit_AAC).m4a",
    name: "Night Train", 
    artist: "Guns and Roses"
},
{
    image: "def-leppard-animal.jpeg",
    audio: "Def Leppard - Animal (Official Lyric Video) (128kbit_AAC).m4a",
    name: "Animal", 
    artist: "Def Leppard"
},
{
    image: "joan-jett-i-love-rock-n-roll.jpeg",
    audio: "Joan Jett I Love Rock n_ Roll_ Lyrics (128kbit_AAC).m4a",
    name: "Joan Jett", 
    artist: "I love rock n roll"
},
{
    image: "motley-crue-kickstart-my-heart.jpeg",
    audio: "Mötley Crüe - Kickstart my Heart (128kbit_AAC).m4a",
    name: "Motley Crue", 
    artist: "Kickstart my heart"
},
{
    image: "rainbow-since-youve-been-gone.jpeg",
    audio: "Rainbow - Since you_ve been gone with lyrics (128kbit_AAC).m4a",
    name: "Since you've been gone", 
    artist: "Rainbow"
},
{
    image: "queen-dont-stop-me-now.jpeg",
    audio: "Queen - Dont Stop Me Now (Lyrics). (128kbit_AAC).m4a",
    name: "Don't stop me now", 
    artist: "Queen"
},

//To add new entries
// {
//     image: "",
//     audio: "",
//     name: "", 
//     artist: ""
// },

]
);