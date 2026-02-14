let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById('gifContainer').style.display = 'block';

document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar el gif triste y mostrar el gif feliz
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    // Ocultar los botones "Pregunta Sí" y "No "
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    // Asegurar que el mensaje NO se tape (z-index alto)
    const msg = document.getElementById('messageContainer');
    msg.style.display = 'block';
    msg.style.position = 'relative';
    msg.style.zIndex = '9999';
    msg.style.fontSize = '28px';
    msg.style.marginTop = '12px';

    // Mensajes bonitos (MEJORADOS)
    msg.innerHTML = 'Entonces es oficial… 🥹💖';

    setTimeout(function() {
        msg.innerHTML = '¿Quieres ser mi novia? Prometo quererte bonito, siempre 🌷';
    }, 1500);

    setTimeout(function() {
        msg.innerHTML = 'Y si algún día dudas… me mirarás y recordarás que tus ojos son mi lugar favorito ✨👀💘';
    }, 3500);

    // Mostrar gifs en secuencia
    setTimeout(function() {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 1000);

    setTimeout(function() {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 2000);

    setTimeout(function() {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 3000);
  
});


// --- Lo demás queda igual ---
document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';

            document.getElementById('noBtn').innerHTML = '¡Oh no! ¿Estás segur@?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '40px';
            document.getElementById('siBtn').style.padding = '20px 40px';

            noButtonClickCount++;
            noButtonState++;
            break;

        case 1:
            document.getElementById('noBtn').innerHTML = '¡¿Realmente estas segur@?!';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';

            document.getElementById('siBtn').style.fontSize = '50px';
            document.getElementById('siBtn').style.padding = '30px 50px';
            noButtonState++;
            break;

        case 2:
            document.getElementById('noBtn').innerHTML = 'Estás segur@ de verdad, ¿eh?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';

            document.getElementById('siBtn').style.fontSize = '60px';
            document.getElementById('siBtn').style.padding = '40px 60px';
            noButtonState++;
            break;

        case 3:
            document.getElementById('noBtn').innerHTML = '¿Eres positv@?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('siBtn').style.fontSize = '70px';
            document.getElementById('siBtn').style.padding = '50px 70px';
            noButtonState++;
            break;

        case 4:
            document.getElementById('noBtn').innerHTML = 'Di que si por favor?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('siBtn').style.fontSize = '80px';
            document.getElementById('siBtn').style.padding = '60px 80px';
            noButtonState++;
            break;

        case 5:
            document.getElementById('noBtn').innerHTML = 'Solo piensa en ello';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('siBtn').style.fontSize = '90px';
            document.getElementById('siBtn').style.padding = '70px 90px';
            noButtonState++;
            break;

        case 6:
            document.getElementById('noBtn').innerHTML = 'Si, dices que no estaré muy triste';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('siBtn').style.fontSize = '100px';
            document.getElementById('siBtn').style.padding = '80px 100px';
            noButtonState++;
            break;

        case 7:
            document.getElementById('noBtn').innerHTML = 'Estaré muy triste';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('siBtn').style.fontSize = '120px';
            document.getElementById('siBtn').style.padding = '90px 120px';
            noButtonState++;
            break;

        case 8:
            document.getElementById('noBtn').innerHTML = 'Estaré muy muy muy triste';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('siBtn').style.fontSize = '140px';
            document.getElementById('siBtn').style.padding = '100px 140px';
            noButtonState++;
            break;

        case 9:
            document.getElementById('noBtn').innerHTML = 'Estaré muy muy muy muy triste.';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('siBtn').style.fontSize = '160px';
            document.getElementById('siBtn').style.padding = '110px 160px';
            noButtonState++;
            break;

        case 10:
            document.getElementById('noBtn').innerHTML = 'Vale, ya dejaré de preguntar...';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('siBtn').style.fontSize = '180px';
            document.getElementById('siBtn').style.padding = '120px 180px';
            noButtonState++;
            break;

        case 11:
            document.getElementById('noBtn').innerHTML = 'Es broma, POR FAVOR DI SÍ';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('siBtn').style.fontSize = '200px';
            document.getElementById('siBtn').style.padding = '130px 200px';
            noButtonState++;
            break;

        case 12:
            document.getElementById('noBtn').innerHTML = 'Estaré muy muy muy muy muy triste.';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('siBtn').style.fontSize = '220px';
            document.getElementById('siBtn').style.padding = '140px 220px';
            noButtonState++;
            break;

        case 13:
            document.getElementById('noBtn').innerHTML = 'Estás rompiendo mi corazón :(';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('siBtn').style.fontSize = '240px';
            document.getElementById('siBtn').style.padding = '150px 240px';
            noButtonState++;
            break;

        case 14:
            document.getElementById('noBtn').innerHTML = 'NO... ya di que si';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('siBtn').style.fontSize = '260px';
            document.getElementById('siBtn').style.padding = '160px 260px';
            noButtonState++;
            break;

        case 15:
            document.getElementById('noBtn').innerHTML = 'Anda Siiiiiiiiiiiiiiiiiiiiiiiiiii';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('siBtn').style.fontSize = '280px';
            document.getElementById('siBtn').style.padding = '170px 280px';
            noButtonState++;
            break;

        case 16:
            document.getElementById('noBtn').innerHTML = 'por favooooooor';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'block';
            document.getElementById('happyGifContainer').style.display = 'none';

            noButtonState = 0;
            break;

        default:
            break;
    }
});

(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
.push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
ml('account', '736768');
