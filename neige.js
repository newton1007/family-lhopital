/* Guirlande et neige communes à toutes les pages (chargé avec defer). */
(function () {
    'use strict';

    // Bandeau guirlande statique si la page n'en a pas déjà une
    if (!document.querySelector('.guirlande')) {
        var bandeau = document.createElement('div');
        bandeau.className = 'guirlande bandeau';
        bandeau.setAttribute('aria-hidden', 'true');
        document.body.insertBefore(bandeau, document.body.firstChild);
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var zone = document.getElementById('neige');
    if (!zone) {
        zone = document.createElement('div');
        zone.className = 'neige';
        zone.id = 'neige';
        zone.setAttribute('aria-hidden', 'true');
        document.body.appendChild(zone);
    }

    var bouton = document.getElementById('stop-neige');
    if (!bouton) {
        bouton = document.createElement('button');
        bouton.type = 'button';
        bouton.className = 'stop-neige';
        bouton.id = 'stop-neige';
        bouton.hidden = true;
        bouton.textContent = '❄ Arrêter la neige';
        document.body.appendChild(bouton);
    }

    var symboles = ['❄', '❅', '•', '❆', '•'];
    var nb = window.innerWidth < 600 ? 28 : 55;
    for (var i = 0; i < nb; i++) {
        var f = document.createElement('span');
        f.className = 'flocon';
        f.textContent = symboles[i % symboles.length];
        var chute = 8 + Math.random() * 10;
        f.style.left = (Math.random() * 100) + 'vw';
        f.style.fontSize = (8 + Math.random() * 16) + 'px';
        f.style.opacity = (0.5 + Math.random() * 0.5).toFixed(2);
        f.style.animationDuration = chute + 's, ' + (2 + Math.random() * 3) + 's';
        f.style.animationDelay = (-Math.random() * chute) + 's, 0s';
        zone.appendChild(f);
    }

    bouton.hidden = false;
    bouton.addEventListener('click', function () {
        var arret = !zone.hidden;
        zone.hidden = arret;
        bouton.textContent = arret ? '❄ Relancer la neige' : '❄ Arrêter la neige';
    });
})();
