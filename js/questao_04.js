class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }
  
  nomeCompleto(){
    return this.primeiroNome + " " + this.segundoNome;
  }
  media(){
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }

  situacao(){
    if(this.media()>6){
      return "Aprovado";
    }
    return "Reprovado";
  }
}

var alunos = new Array();
alunos[0] = new Aluno("Thiago", "Ferreira", 10, 10);
alunos[1] = new Aluno("Igor", "Silva", 9, 8);
alunos[2] = new Aluno("Luan", "Junior", 10, 10);
alunos[3] = new Aluno("Maria", "Jose", 5, 4);
alunos[4] = new Aluno("Jose", "Maria", 6, 3);


for (var i = 0 ; i<alunos.length ; i++){
  alert("Nome completo: " + alunos[i].nomeCompleto() + "\n" +
  "Media: " + alunos[i].media() + "\n" +
  "Situacao: " + alunos[i].situacao());
}
