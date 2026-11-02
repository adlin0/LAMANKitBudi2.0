
/* =====================================
   KIT BUDI - MAIN JAVASCRIPT
===================================== */

// DAPATKAN ELEMENT
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const startButton = document.getElementById("startButton");


// =====================================
// FUNGSI MUZIK KIT BUDI
// =====================================

let musicPlaying = false;

music.loop = true;

musicButton.addEventListener("click", async function () {

    if (!musicPlaying) {

        try {

            await music.play();

            musicPlaying = true;

            musicButton.innerHTML = "🔊 MUZIK ON";

        } catch (error) {

            console.error("Muzik gagal dimainkan:", error);

            alert("Muzik tidak dapat dimainkan. Sila cuba lagi.");

        }

    } else {

        music.pause();

        musicPlaying = false;

        musicButton.innerHTML = "🔇 MUZIK OFF";

    }

});


// =====================================
// BUTANG MULA PENGEMBARAAN
// =====================================

startButton.addEventListener("click", function () {

    window.location.href = "biodata.html";

});
