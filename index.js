

let divLength = 0;

// document.addEventListener('mousemove', (e) => {
//     divLength = document.querySelectorAll('div').length;
//     if(divLength < 2049){
//         const div = document.createElement('div');
//         div.setAttribute('onmousemove', 'hoverThroughDivs()');
//         document.querySelector('header').append(div);
//     }
// })

const setTime = setInterval(() => {
    divLength = document.querySelectorAll('div').length;
    
    if(divLength < 448){
        const div = document.createElement('div');
        div.setAttribute('onmousemove', 'hoverThroughDivs()')
        document.querySelector('header').append(div);

        for(let i = 0; i < divLength; i++){
            document.querySelectorAll('div')[i].style.backgroundColor = `hsl(222, ${Math.floor(Math.random() * 100 + 1)}%, ${Math.floor(Math.random() * 100 + 1)}%)`
        }
    }

    if(divLength > 448){
        clearInterval(setTime);
    }
}, 10)

function hoverThroughDivs(){
    for(let i = 0; i < divLength; i++){
        document.querySelectorAll('div')[i].style.backgroundColor = `hsl(222, ${Math.floor(Math.random() * 100 + 1)}%, ${Math.floor(Math.random() * 100 + 1)}%)`

    }
}



















