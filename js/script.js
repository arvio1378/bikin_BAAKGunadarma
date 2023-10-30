// scroll menu
window.onscroll = function() {scrollFunction()};

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const sticky = navbar.offsetTop;

function scrollFunction(){
    // bila scroll lebih dari 100, maka width dan ukuran teks diubah, bila tidak maka kembali normal
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        menu.style.padding = "0";
        navbar.style.backgroundColor = "white";
        navbar.style.justifyContent = "center";
        navbar.style.padding = "20px";
    } else {
        navbar.style.backgroundColor = "transparent";
        menu.style.padding = "20px";
    }

    // bila navbar mencapai paling atas web, maka tambahkan sticky, bila tidak di paling atas web sticky dihilangkan
    if(window.pageYOffset >= sticky) {
        navbar.classList.add("diam");
    } else {
        navbar.classList.remove("diam");
    }
}

// variabel pada mahasiswa baru
const tombol1 = document.querySelector(".tombol1");
const form1 = document.querySelector(".form1");

// transisi pada mahasiswa baru
tombol1.onclick = () => {

    if(form1.classList.contains("h-0")){
        tombol1.classList.remove("fa-plus");
        tombol1.classList.add("fa-minus");
        form1.classList.remove("h-0");
        form1.classList.add("h-26");
    } else if (tombol1.classList.contains("fa-minus")) {
        form1.classList.remove("h-26");
        form1.classList.add("h-0");
        tombol1.classList.remove("fa-minus");
        tombol1.classList.add("fa-plus");
    }

}

// variabel pada mahasiswa kelas 2
const tombol2 = document.querySelector(".tombol2");
const form2 = document.querySelector(".form2");

// transisi pada mahasiswa baru
tombol2.onclick = () => {

    if(form2.classList.contains("h-0")){
        tombol2.classList.remove("fa-plus");
        tombol2.classList.add("fa-minus");
        form2.classList.remove("h-0");
        form2.classList.add("h-26");
    } else if (tombol2.classList.contains("fa-minus")) {
        form2.classList.remove("h-26");
        form2.classList.add("h-0");
        tombol2.classList.remove("fa-minus");
        tombol2.classList.add("fa-plus");
    }

}

// dibuat fixed pada saat kueri 128px
const a = window.matchMedia("(max-width: 1280px)");

function responsive(a) {
    if(a.matches) {
        window.onscroll = null;
        menu.classList.add("diam");
    } else {
        window.onscroll.scrollFunction;
        menu.classList.remove("diam");
    }
}

a.addEventListener("change", responsive);
responsive(a);

// untuk pada saat klik logo menu garis tiga, maka muncul menu responsifnya
const bars = document.querySelector(".bars");

bars.onclick = () => {
    navbar.classList.toggle("max-xl:-translate-x-full");
    bars.classList.toggle("fa-xmark");
}