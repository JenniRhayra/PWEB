
function play(escolha){
    var n_escolha = parseInt(escolha)
    var pc_random = Math.floor(Math.random()*3+1)

    esc_pc_txt = pc_random == 1 ? 'pedra' : pc_random == 2 ? 'papel' : 'tesoura'
    esc_jog_txt = n_escolha == 1 ? 'pedra' : n_escolha == 2 ? 'papel' : 'tesoura'

    if (pc_random === n_escolha){
        return("Você empatou! \nComputador escolheu: "+esc_pc_txt+"   |   Você escolheu: "+esc_jog_txt);
    }
    else if(pc_random === 1 & n_escolha === 2){
        return("Papel cobre pedra! Você ganhou!\nComputador escolheu: "+esc_pc_txt+"   |   Você escolheu: "+esc_jog_txt);
    }
    else if(pc_random === 1 & n_escolha === 3){
        return("Pedra quebra tesoura! Você perdeu!\nComputador escolheu: "+esc_pc_txt+"   |   Você escolheu: "+esc_jog_txt);
    }
    else if(pc_random === 2 & n_escolha === 1){
        return("Papel cobre pedra! Você perdeu!\nComputador escolheu: "+esc_pc_txt+"   |   Você escolheu: "+esc_jog_txt);
    }
    else if(pc_random === 3 & n_escolha === 1){
        return("Pedra quebra tesoura! Você ganhou!\nComputador escolheu: "+esc_pc_txt+"   |   Você escolheu: "+esc_jog_txt);
    }
}