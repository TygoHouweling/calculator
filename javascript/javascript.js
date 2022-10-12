function calculator() {
    total = document.querySelector('#total_items').value;

    let discound =0;
    if(total>=50000){
        let discound = 15;
    } else {
        if(total>=10000){
            let discound = 10;
        } else {
            if(total>=7000){
                let discound = 7;
            } else {
                if(total>=5000){
                    let discound = 5;

                } else {
                    if(total>=1000){
                        let discound = 3;

                    }
                }
            }
        }
    }
    document.querySelector('.discound_percentage').innerHTML = discound;
    document.querySelector('.total').innerHTML = total;

    const country = document.getElementById('country')
    const countryValue = country.value;


    switch (countryValue) {
        case 'NL':
    
            var btwtotaal = total % 21;
            
            break;
        case 'BE':
    
            var btwtotaal =  total % 21;
    
    
        break;
        case 'LU':
    
            var btwtotaal = total % 17;
    
    
        break;
        case 'DE':
    
            var btwtotaal = total % 19;
    
    
        break;
        case 'FR':
    
            var btwtotaal = total % 20;
    
    
        break;
    }

}