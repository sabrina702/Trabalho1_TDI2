function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;

    if(hora >= 0 && hora < 12){
        img.src = 'fotoManha.png'
        //document.section.style.backgroundImage = 'url(ManhaDesfoque.png)';
        //document.body.style.background ='#E3AF3F'
    }else if(hora >=12 && hora < 18){
        img.src = 'fotoTarde.png'
        //document.section.style.backgroundImage = 'url(TardeDesfoque.png)';
        //document.body.style.background = '#A9A6D4'
    }else{
        img.src = 'fotoNoite.png'
        //document.body.style.background = '#012047'
    }
} 
