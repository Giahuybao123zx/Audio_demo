const audio = document.createElement("audio");
audio.src = "c:/Users/PC/Downloads/hieuthuhai-atus-jsol-erik-ft-orange--anh-trai-say-hi.mp3 "; 
audio.type = "audio/mp3"; 
audio.controls = true;
const playButton = document.getElementById("play-button");
playButton.addEventListener("click", () => {
  const x =document.getElementById("audio-container")
  if(!x.contains(audio)){
      x.appendChild(audio)
  }
  if(audio.paused) {
      audio.play();
      playButton.textContent = "Dừng nhạc";
  } else{
      audio.pause();
      playButton.textContent = "Phát nhạc";
  }
})
const tanca = document.createElement("audio");
tanca.src="C:/Users/PC/OneDrive/Music/Playlists/TANCA-DatOzyPiaLinh-12060735.mp3"
tanca.type="audio/mp3";
tanca.controls = true;
const play = document.getElementById("Tan ca") 
play.addEventListener("click", () =>{
const y =   document.getElementById("audio-tanca")
if(!y.contains(tanca)) {
  y.appendChild(tanca)
}
  if(tanca.paused) {
      tanca.play();
      play.textContent = "Dừng nhạc";
  } else{
      tanca.pause();
      play.textContent = "Tiếp tục"
}})  

// const an = document.getElementById("picc")
// an.addEventListener("click", () => {
// const pic = document.getElementById("imgage-container")

// const img = document.querySelector("img")
// if(!img) {
//     const img = document.createElement("img")
// img.src = "C:/Users/PC/OneDrive/Pictures/Saved Pictures/z5814309481975_743f748ce572cc25ffa8bcd4e0ca4669.jpg";
// img.alt = "Mô tả ảnh";
// img.style.maxWidth = "100%"; 
// img.style.height = "auto"; 

// pic.appendChild(img);
// }});

// const ds = document.getElementById("clear")
// ds.addEventListener("click", () => {
//     const pic = document.getElementById("imgage-container")
//     let img = pic.querySelector("img");
//     if(img){
//     pic.removeChild(img)
//     }});

const an = document.getElementById("picc");
an.addEventListener("click", () => {
let pic = document.getElementById("imgage-container");
const img = document.createElement("img")
img.src = "C:/Users/PC/OneDrive/Pictures/Saved Pictures/z5814309481975_743f748ce572cc25ffa8bcd4e0ca4669.jpg";
img.alt = "Mô tả ảnh";
img.style.maxWidth = "100%"; 
img.style.height = "auto"; 
const existingImg = pic.querySelector("img");
if(!existingImg) {
pic.appendChild(img);
an.textContent = "Gỡ ảnh"
} else {
pic.removeChild(existingImg);
an.textContent = "Hiện ảnh";
}
})

const color = document.getElementById("changeBackgroundColor")
color.addEventListener("click", () => {
  if(document.body.style.backgroundColor === "lightblue") {
      document.body.style.backgroundColor = ""
      color.textContent = "Đổi màu nền trang";
  } else{
          document.body.style.backgroundColor = "lightblue";
          color.textContent = "Trở lại màu gốc";

  }

  
}
);