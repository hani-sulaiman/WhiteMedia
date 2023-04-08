function includeJS (incFile) { 
    document.querySelector('body').write ('<script type=\"text/javascript\" src=\"'+ incFile+ '\"></script>'); 
}
stopVideos();
window.onload=()=>{
    document.querySelector('.logo').classList.add('zoom');
    setTimeout(()=>{
        document.querySelector('.body').classList.remove('hide');
        document.querySelector('.load').classList.add('hide');
    },800);   
    setTimeout(()=>{
        Main();
        MainGallery();
        MainSlider();  
    },600);   
}