function contar(){
let alturaa = window.document.getElementById('altura')
let idadee = window.document.getElementById('idade')
let pesoo = window.document.getElementById('peso')
let ress = window.document.getElementById('res')
    if(alturaa.value.length == 0 || idadee.value.length == 0 || pesoo.value.length == 0 ){
        window.alert('[ERRO] Preencha os campos vazios')
    }else{ 
        let a = Number(alturaa.value)
        let i = Number(idadee.value)
        let p = Number(pesoo.value)
        let r = Number(ress.value)
        if(a <= 0 || i <= 0 || p <= 0){
            window.alert('[ERRO]Impossível alguém ter esses dados')
            window.alert('Digíte valores válidos')
        }else{
            let sex = window.document.getElementsByName('radsex')
            if(sex[0].checked){
                r = 66.5 + (13.75 * p) + (5.003 * a) - (6.775 * i)
            
            }else if(sex[1].checked){
                r = 655.1 + (9.563 * p) + (1.85 * a) - (4.676 * i)
            }
            ress.innerHTML=`Seu gasto calórico basal diário é de ${r.toFixed(0)}KCal`
            
        }
        
    
    }
}       