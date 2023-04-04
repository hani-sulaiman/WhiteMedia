function includeJS (incFile) { 
    document.querySelector('body').write ('<script type=\"text/javascript\" src=\"'+ incFile+ '\"></script>'); 
}
window.addEventListener("load", function() {
    Main();
    MainGallery();
    MainSlider();       
});