// ketika ketemu return maka program berhenti disitu, jadi gaperlu if else

function getPilihanComputer() {
    const comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

// functuin untuk aturan rules
function getHasil(comp, player) {
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
    return 'memasukkan pilihan yang salah!';
}

// timing 
function putar() {
    // ambil gambar
    const imgComputer = document.querySelector('.img-computer')
    const gambar= ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    // time waktu interval
    setInterval(function() {
        if(new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' +gambar[i++] + '.png');
        if(i == gambar.length) i = 0;
    },100); 
}




//  menyeleksi 3 gambar sekaligus
let hPlayer = 0, hComputer=0;
const pilihan = document.querySelectorAll('li img') // hanay yg ada didalam li

// looping image
pilihan.forEach(function(pil) {
    // kasih event tiap pilihan ketika di klik
    pil.addEventListener('click',function() {
    // kita ambil pilihan comp
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className; //diambil berdasarkan gambar yg diklik
    
    // hasil
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    putar();


    setTimeout(function() {
    // ganti gambar
    const imgComputer = document.querySelector('.img-computer');

    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png'); // logic memilih berdasarkan comp

    const info = document.querySelector('.info');
    info.innerHTML = hasil; 
    const sKomputer = document.querySelector('.komputer');
    const sPlayer = document.querySelector('.player');
        if( hasil == 'KALAH!'){
            sKomputer.innerHTML = 'Komputer : ' + hKomputer++ ;
        } else if(hasil == 'MENANG!'){
            sPlayer.innerHTML = 'Player : ' + hPlayer++;
            return;
        }
    if(hasil == 'MENANG') hPlayer++;
    else if(hasil == 'KALAH') hComputer++;
    const p = document.querySelector('.hPlayer');
    const c = document.querySelector('.hComputer');
    p.innerHTML = 'Player : ' + hPlayer;
    c.innerHTML = 'Computer : ' + hComputer;  
        }, 1000);

    });
});













// Event
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//     // kita ambil pilihan comp
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className; //diambil berdasarkan nama class
    
//     // hasil
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
    

//     // ganti gambar

//     const imgComputer = document.querySelector('.img-computer');

//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png'); // logic memilih berdasarkan comp

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil; 
// });


// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
//      // kita ambil pilihan comp
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className; //diambil berdasarkan nama class
    
//     // hasil
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
    

//     // ganti gambar

//     const imgComputer = document.querySelector('.img-computer');

//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png'); // logic memilih berdasarkan comp

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil; 
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
//     // kita ambil pilihan comp
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className; //diambil berdasarkan nama class
    
//     // hasil
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
    

//     // ganti gambar

//     const imgComputer = document.querySelector('.img-computer');

//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png'); // logic memilih berdasarkan comp

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil; 
// });



