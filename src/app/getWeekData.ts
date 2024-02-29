export function getWeekData() {
    // Obter a data atual
    const dataAtual = new Date();
  
    // Array com os nomes dos dias da semana
    const nomesDosDias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  
    // Obter informações para cada dia da semana
    const informacoesDaSemana = [];
    for (let i = 0; i < 7; i++) {
      // Calcular a data para o dia da semana atual
      const dataParaDiaDaSemana = new Date(dataAtual);
      const indiceDoDia = (dataParaDiaDaSemana.getDay() + i) % 7; // Ajuste para o índice correto
      dataParaDiaDaSemana.setDate(dataAtual.getDate() + i);
  
      // Obter informações
      const indexDoDia = indiceDoDia;
      const numeroDoMes = (dataParaDiaDaSemana.getMonth() + 1).toString().padStart(2, '0');
      const diaDoMes = dataParaDiaDaSemana.getDate().toString().padStart(2, '0');
  
      // Adicionar as informações ao array
      informacoesDaSemana.push({
        indexDoDia,
        numeroDoMes,
        diaDoMes
      });
    }
  
    return informacoesDaSemana;
  }
  

  