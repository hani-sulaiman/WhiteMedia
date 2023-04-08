function includeJS (incFile) { 
    document.querySelector('body').write ('<script type=\"text/javascript\" src=\"'+ incFile+ '\"></script>'); 
}
stopVideos();
window.onload=()=>{
    setTimeout(()=>{
        document.querySelector('.body').classList.remove('hide');
        document.querySelector('.load').classList.add('hide');
        Main();
        MainGallery();
        MainSlider();  
    },600);   
}