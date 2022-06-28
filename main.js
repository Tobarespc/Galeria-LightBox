document.addEventListener('DOMContentLoaded', () => {
    const imgLightBox = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(imgLightBox, {
        inDuration: 500, //Segundos en aumentar la imagen
        outDuration: 1000  //Segundos en disminuir la imagen
    });
});


