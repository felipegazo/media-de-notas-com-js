let studentsList

studentsList = [
    {
        aluno: "Gilberto",
        av1: 10,
        av2: 7.9,
    },
    {
        aluno: "Selena",
        av1: 5.5,
        av2: 8,
    },
    {
        aluno: "Joao",
        av1: 7.1,
        av2: 8,
    },
    {   
        aluno: "Pedro",
        av1: 3.1,
        av2: 8.3,
    }
]



function media(nota1, nota2){
    return Number(((nota1 + nota2) / 2).toFixed(1)) 
}

let result = media > 6

for (let index = 0; index < studentsList.length; index++){

    if (media(studentsList[index].av1, studentsList[index].av2) >= 7){
            alert(`
        Parabéns ${studentsList[index].aluno}, você passou no concurso!
        Sua média foi de: ${media(studentsList[index].av1, studentsList[index].av2)}
                    `)

    } else {
            alert(`
        Que pena ${studentsList[index].aluno}, não foi dessa vez que você passou no concurso.
        Sua média foi de: ${media(studentsList[index].av1, studentsList[index].av2)}`)
                
    }
}