let listaDePecas = ["Filtro de Ar", "motor", "Disco de Freio"]

if (listaDePecas.length < 10)
{
    console.log ("é possivel cadastras mais peças!!!")
}
else
{
    console.log ("Capacidade insuficiente, não é possivel cadastrar")
}

let peso = 100

if (peso <100)
{
    console.log ('A peça deve pesar no minimo 100kg')
}
else 
{
    console.log ('A peça possui o peso adequado.')
}

let nomePeca = 'motor'

if (nomePeca.length >= 3)
{
    console.log ('nome da peça adequado para cadastro')
}
else if (nomePeca.length ==0 )
{
    consoloe.log ('nome da peça nao pode ser vazio')
}
else 
{
    console.log('Nome da peça deve ter no minimo 3 caracteres.')
}
switch (nomePeca.length) {
    case 0: 
    console.log ('O nome da peça nao pode estar vazio')
    break;
    case 1:
    case 2:
        console.log ('O nome da peça nao deve ter mais de tres caracteres')
        break;
        default:
            console.log('Nome da peça adequado para o cadastro')
            break;
}