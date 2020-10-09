function alterarNumero1(novoNumero1){
    return {
        type: 'NOVO_NUM1',
        payload: novoNumero1
    }
}

function alterarNumero2(novoNumero2){
    return {
        type: 'NOVO_NUM2',
        payload: novoNumero2
    }
}

export {alterarNumero1, alterarNumero2}