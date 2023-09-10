const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#Weight').value);
    const results = document.querySelector('#results')
    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = "dekh faltu bakwaas ni"
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = "dekh faltu bakwaas ni"
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = bmi
    }
})
