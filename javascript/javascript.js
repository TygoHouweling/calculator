function calculator() {
    total = document.querySelector('#total_items').value;
    const country = document.getElementById('country')

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
    document.querySelector('.discount_percentage').innerHTML = discound;
    document.querySelector('.total').innerHTML = total;

    const countryValue = country.value;


    switch (countryValue) {
        case 'NL':
    
            var total = total % 21;
            
            break;
        case 'BE':
    
            var total =  total % 21;
    
    
        break;
        case 'LU':
    
            var total = total % 17;
    
    
        break;
        case 'DE':
    
            var total = total % 19;
    
    
        break;
        case 'FR':
    
            var total = total % 20;
    
    
        break;
    }

}