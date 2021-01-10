function MediaPlayer(config) {
    this.media = config.el;
   
    
}

MediaPlayer.prototype.play = function() {
    this.media.play();
};

MediaPlayer.prototype.pause = function() {
    this.media.pause();
};

MediaPlayer.prototype.togglePlay = function (){ 
    if(this.media.paused){
        this.play();
    }else {
        this.pause();
    }
};

// MediaPlayer.prototype.controls = function (){
    
//     if(this.media.paused){
//         this.media.play();
//     }else {
//         this.media.pause();
//     }
// }



export default MediaPlayer;
//para usar módulos con vanilla js debo colocar el atributo type="module" en la etiqueta script
