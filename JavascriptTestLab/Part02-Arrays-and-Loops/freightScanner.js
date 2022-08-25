function scan(inputarray) {
    let numContraband = 0;

    inputarray.forEach(element => {
        if(element === "contraband") {numContraband = numContraband+1;}
        
    });

    return numContraband;
}

