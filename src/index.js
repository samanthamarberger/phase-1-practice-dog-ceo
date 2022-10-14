console.log('%c HI', 'color: firebrick')

//CHALLENGE 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('dog-image-container');
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(resp => {
            resp.message.forEach((imgSrc) => {
                const image = document.createElement('img');
                image.src = imgSrc;
                imageContainer.appendChild(image);
            })
        });
});

//CHALLENGE 2
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
document.addEventListener('DOMContentLoaded', () => {
    const ul = document.getElementById('dog-breeds');
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(resp => {
            const keys = Object.keys(resp.message);
            keys.forEach((dogBreed) => {
                const li = document.createElement('li');
                li.classList.add('breed');
                li.textContent = dogBreed;
                //CHALLENGE 3
                li.addEventListener('click', () => {
                    li.style.color = 'pink';
                })
                ul.appendChild(li);
            
            //CHALLENGE4
            const dropDown = document.getElementById('breed-dropdown');
            dropDown.addEventListener('change', alphabetBreed);

            function alphabetBreed() {
                if(dropDown.value == 'a') {
                    //document.location.reload();
                    keys.forEach((dogBreed) => {
                        if (li.textContent.charAt(0) !== "a" ) {
                            li.style.visibility = 'hidden';
                        }
                        else{
                            li.style.visibility = 'visible';
                        }
                    })
                }
                if(dropDown.value == 'b') {
                    keys.forEach((dogBreed) => {
                        if (li.textContent.charAt(0) !== "b" ) {
                            li.style.visibility = 'hidden';
                        }
                        else{
                            li.style.visibility = 'visible';
                        }
                    })
                }
                if(dropDown.value == 'c') {
                    keys.forEach((dogBreed) => {
                        if (li.textContent.charAt(0) !== "c" ) {
                            li.style.visibility = 'hidden';
                        }
                        else{
                            li.style.visibility = 'visible';
                        }
                    })
                }
                if(dropDown.value == 'd') {
                    keys.forEach((dogBreed) => {
                        if (li.textContent.charAt(0) !== "d" ) {
                            li.style.visibility = 'hidden';
                        }
                        else{
                            li.style.visibility = 'visible';
                        }
                    })
                }
            }
            })
        })
})

//CHALLENGE4
// document.addEventListener('DOMContentLoaded', () => {
//     const dropDown = document.getElementById('breed-dropdown');
//     dropDown.addEventListener('change', alphabetBreed);

//     function alphabetBreed() {
//         if(dropDown.value == 'a') {
//             console.log('a was selected');
//         }
//         if(dropDown.value == 'b') {
//             console.log('b was selected');
//         }
//         if(dropDown.value == 'c') {
//             console.log('c was selected');
//         }
//         if(dropDown.value == 'd') {
//             console.log('d was selected');
//         }
//     }
// })




