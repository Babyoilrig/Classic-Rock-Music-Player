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
}
//Might need a comma after line 25?
]
);