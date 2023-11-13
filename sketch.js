// Quantidade de confetes a serem criados
var confeteCount = 100;

// Função para criar um confete
function createConfete() {
    var confete = document.createElement('div');
    confete.className = 'confete';
    confete.style.top = Math.random() * -1000 + 'px';
    confete.style.left = Math.random() * window.innerWidth + 'px';
    confete.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    confete.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
    document.body.appendChild(confete);
}

// Criar os confetes
for (var i = 0; i < confeteCount; i++) {
    createConfete();
}

// Animação dos confetes
setInterval(function() {
    var confetes = document.getElementsByClassName('confete');
    for (var i = 0; i < confetes.length; i++) {
        var confete = confetes[i];
        var top = parseInt(confete.style.top.replace('px', ''));
        if (top < window.innerHeight) {
            confete.style.top = top + 1 + 'px';
        } else {
            confete.style.top = Math.random() * -1000 + 'px';
        }
    }
}, 10);
