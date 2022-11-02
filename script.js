const dark = document.getElementById('btn-dark');
const x = document.getElementById('body');
   const k = document.getElementById('box');
   var head = document.getElementById('header');
   const bgtb = document.getElementById('bg-tb');
   const bgtb2 = document.getElementById('bg-tb2');
   const box2 = document.getElementById('box-2');
dark.addEventListener("click", function mode(){
   if(x.style.backgroundColor == 'rgb(32, 32, 34)') {
      x.style.backgroundColor = 'white';
      x.style.color = '#202022';
      k.style.backgroundColor = '#F8F7F5';
      head.style.backgroundColor = '#FDC982';
      bgtb.style.backgroundColor = '#FDC982';
      bgtb2.style.backgroundColor = '#FDC982';
      box2.style.backgroundColor = '#FDC982';
      document.getElementById('btn-dark').innerHTML = "<p>Tema gelap</p>";
      dark.style.backgroundColor = '#202022';
      dark.style.color = '#f8f7f5';
      
   }else{
      x.style.backgroundColor = '#202022';   
      x.style.color = 'white';
      k.style.backgroundColor = '#202022';
      head.style.backgroundColor = '#202022';
      bgtb.style.backgroundColor = '#F0900E';
      bgtb2.style.backgroundColor = '#F0900E';
      box2.style.backgroundColor = '#F0900E';
      dark.style.backgroundColor = '#F8F7F5';
      dark.style.color = '#202022';
   }
});

const perkecil = document.getElementById('perkecil');
perkecil.addEventListener("click", function showInfo(){
   const kecil = document.getElementById('kotak-1');
   if(kecil.style.display == 'none') {
      kecil.style.display = '';
      document.getElementById('perkecil').innerHTML = "<p>Perkecil</p>";
   }else{
      kecil.style.display = 'none';
      document.getElementById('perkecil').innerHTML = "<p>Lihat Konten</p>";
   }
});

const perkecil2 = document.getElementById('perkecil-2');
perkecil2.addEventListener("click", function showInfo(){
   const kecil2 = document.getElementById('kotak-2');
   if(kecil2.style.display == 'none') {
      kecil2.style.display = '';
      document.getElementById('perkecil-2').innerHTML = "<p>Perkecil</p>";
   }else{
      kecil2.style.display = 'none';
      document.getElementById('perkecil-2').innerHTML = "<p>Lihat Konten</p>";
   }
});

function mode(){
   document.getElementById('btn-dark').innerHTML = "<p>Tema terang</p>";
}