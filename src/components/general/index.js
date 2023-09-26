import { MAIN } from '../../constants';

import "../style.css";

export const triggerReset = { trigger: MAIN.RESET }

export const goDocs = (link, outsideDocs) => {
  outsideDocs ? window.open(`${link}`, '_blank') :
  window.open(`https://docs.eadplataforma.com/docs/${link}`, '_blank');
}

export const btnArticle = (link, label, outsideDocs) => {
  return (
    <button className="btn-docs" onClick={() => goDocs(link, outsideDocs)}>
      {label ? label : 'Ver artigo'}
    </button>
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

export const eadStore = () => {

  return (
    <div>
      <p>
        A EAD Store é a loja de aplicativos feita para você utilizar diversas soluções.
      </p>

      <p>
        Com ela, é possível integrar mais de 60 ferramentas de terceiros que auxiliam 
        todo o processo de vendas, métricas e de suporte aos alunos e colaboradores. 
        Atualmente existem apps terceiros para:
      </p>

      <ul>
        <li><b>Vendas</b> - <i>Hotmart, Eduzz...</i></li>
        <li><b>Comunicação</b> - <i>Discord, JivoChat...</i></li>
        <li><b>Track</b> - <i>Facebook Pixel, Google Ads...</i></li>
        <li><b>Analytics</b> - <i>Google Analytics, Hotjar...</i></li>
        <li><b>E-mail Marketing</b> - <i>RD Station, Active Campaign...</i></li>
        <li><b>Integradores</b> - <i>Make, Pluga...</i></li>
        <li><b>EAD Indica</b> - <i>Sugestões de ferramentas</i></li>
        <li><b>Segurança</b> - <i>ReCaptcha</i></li>
        <li><b>Vídeo</b> - <i>Vimeo, Panda Video</i></li>
        <li><b>Nota Fiscal</b> - <i>eNotas, Spedy...</i></li>
        <li><b>CRM</b> - <i>Pipedrive</i></li>
      </ul><br/>

      {btnArticle('ead-store')}
    </div>
  )
}

export const apiDetails = () => {

  return (
    <div>
      <p>teste api</p>
    </div>
  )
}

export const webhooks = () => {

  return (
    <div>
      <p>teste webhooks</p>
    </div>
  )
}

export const trash = () => {

  return (
    <div>
      <p>teste lixeira</p>
    </div>
  )
}