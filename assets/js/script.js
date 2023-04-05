function includeJS (incFile) { 
    document.querySelector('body').write ('<script type=\"text/javascript\" src=\"'+ incFile+ '\"></script>'); 
}
stopVideos();
window.onload=()=>{
    setTimeout(()=>{
        Main();
        MainGallery();
        MainSlider();  
    },600);   
}