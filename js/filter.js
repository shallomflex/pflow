let sortbtn = document.querySelector('.filter-menu').children;
let sortWorks = document.querySelector('.works').children;

for(let i = 0; i < sortbtn.length; i++){
    sortbtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortbtn.length; j++){
            sortbtn[j].classList.remove('current')
        }

        this.classList.add('current');

        
        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortWorks.length; k++){
            sortWorks[k].classList.remove('active');
            sortWorks[k].classList.add('delete');

            if(sortWorks[k].getAttribute('data-item') == targetData || targetData == "branding"){
                sortWorks[k].classList.remove('delete');
                sortWorks[k].classList.add('active');
            }
            if(sortWorks[k].getAttribute('data-item2') == targetData || targetData == "branding"){
                sortWorks[k].classList.remove('delete');
                sortWorks[k].classList.add('active');
            }

        }
    });
} 

// // TRIAL
const images_names = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
const images_names2 = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
const images_names3 = ['img1.jpg', 'img2.jpg'];
var images = "";
var images2 = "";
var images3 = "";

// SHOWING ALL IMAGES
for (let i=0; i < images_names.length; i++) {
    images += `<div class="zone" data-item2="all">
                <img src="./img/${images_names[i]}" alt="">
            </div>`
    document.getElementById('works').innerHTML = images;
}

// SHOWING ALL BRAND IMAGES
// for (let i=0; i < images_names2.length; i++) {
    // images2 += `<div class="zone" data-item="brand">
    //             <img src="./img/${images_names2[i]}" alt="">
    //         </div>`
    // document.getElementById('works').innerHTML = images2
// }

// for (let i=0; i < images_names3.length; i++) {
//     images3 += `<div class="zone hide" data-item="poster">
//                 <img src="./img/${images_names3[i]}" alt="">
//             </div>`
//     document.getElementById('works').innerHTML = images3
// }

