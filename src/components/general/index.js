import { MAIN } from '../../constants';

import "../style.css";

export const triggerReset = { trigger: MAIN.RESET }

export const goDocs = (link) => {
  //window.location.reload();
  window.open(`https://docs.eadplataforma.com/docs/${link}`, '_blank');
}

export const btnArticle = (link) => {
  return (
    <button className="btn-docs" onClick={() => goDocs(link)}>Ver artigo</button>
  )
}

export const myDashboard = () => {
  return (
    <div>
      <p>
        Na área da <b>Dashboard</b> é possível analisar alguns indicadores 
        sobre transações, matrículas e quais os tipos de produtos vendidos.
      </p>

      <p>
        Também existem atalhos para ajudar na criação de tarefas simples como
        cadastrar usuários ou inserir conteúdos na <b>Biblioteca</b>.
      </p>
    </div>
  )
}