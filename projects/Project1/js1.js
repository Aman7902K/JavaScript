const selector = document.querySelectorAll('.color')
const bd = document.querySelector("body")

selector.forEach(function(el){
    el.addEventListener('click', function(e){
        console.log(e.target);
        if (e.target.id === 'red') {
            bd.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'yellow') {
            bd.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'grey') {
            bd.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'orange') {
            bd.style.backgroundColor = e.target.id
        }
        if (e.target.id === bd ) {
            bd.style.backgroundColor = 'white'
        }
        // switch (e.target.id) {
        //     case 'grey':
        //         bd.style.backgroundColor = e.target.id
        //         break;
        //     case 'red':
        //         bd.style.backgroundColor = e.target.id
        //         break;
        //     case 'yellow':
        //         bd.style.backgroundColor = e.target.id
        //         break;
        //     case 'orange':
        //         bd.style.backgroundColor = e.target.id
        //         break;
        //     case 'bdy':
        //         bd.style.backgroundColor = 'white'
        //         break;
        //     default: 
        //         break;
        // }
        })
    })