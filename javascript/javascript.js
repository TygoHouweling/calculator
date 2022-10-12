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
    document.querySelector('.discount_percentage').innerHTML = discound;
    document.querySelector('.total').innerHTML = total;

    const country = document.querySelectorAll('#country');


    switch (country) {
        case 'NL':
    
            var btwtotaal = totaal % 21;
            
            break;
        case 'BE':
    
            var btwtotaal =  totaal % 21;
    
    
        break;
        case 'LU':
    
            var btwtotaal = totaal % 17;
    
    
        break;
        case 'DE':
    
            var btwtotaal = totaal % 19;
    
    
        break;
        case 'FR':
    
            var btwtotaal = totaal % 20;
    
    
        break;
    }

}