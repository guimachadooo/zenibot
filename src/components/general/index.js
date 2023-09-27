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
      <p>
        A <b>API</b> é um conjunto de pontos de entrada e saída de dados da plataforma.
      </p>

      <p>
        É através da API que o cliente integra o seu EAD com algum outro sistema. 
        Além disso, também é possível recriar as funcionalidades existentes na plataforma 
        consumindo a API.
      </p><br/>

      {btnArticle('https://docs.eadplataforma.com/reference/api-nova-versao', 'Ver Documentação', true)}
    </div>
  )
}

export const webhooks = () => {

  return (
    <div>
      <p>
        Webhook é uma forma de recebimento de informações, que são passadas quando um evento acontece.
      </p>

      <p>
        Dessa forma, o webhook na prática, é a forma de receber informações entre dois sistemas de 
        uma forma passiva, fornecendo informações em tempo real. Um jeito muito eficiente de se 
        comunicar tanto para o prestador dos dados, como para o consumidor.
      </p><br/>

      {btnArticle('webhooks')}
    </div>
  )
}

export const trash = () => {

  return (
    <div>
      <p>
        Todos os registros que são excluídos no EAD passam primeiro pela <b>Lixeira</b>, 
        para permitir que os administradores consigam restaurar algum dado que tenha sido 
        excluído sem querer. Mas também existe a opção de excluir definitivamente, 
        que é feito também nessa tela.
      </p>

      <p>
        Os registros permanecem por 90 dias na <b>Lixeira </b> 
        até que sejam excluídos definitivamente.
      </p>
    </div>
  )
}

export const images = () => {

  return (
    <div>
      <ul>
        <li>Logotipo 240x60</li>
        <li>Logotipo para fundo branco 240x60</li>
        <li>Logotipo tela da aula 240x60</li>
        <li>Logotipo de login 240x60</li>
        <li>Capa de fundo de login 1470x1080</li>
        <li>Icone do App 2048x2732</li>
        <li>Imagem padrão {'('}thumbnail quando compartilha o link{')'} 470x245</li>
        <li>Capa do curso 600x340</li>
        <li>Capa do produto 991x592</li>
        <li>Capa de fundo do produto 1920x420</li>
        <li>Banners 1920x500</li>
        <li>Foto de perfil de usuário 250x250</li>
        <li>Capa do perfil de usuário 600x200</li>
        <li>Ícone da categoria 300x300</li>
        <li>Capa de fundo da página de categoria 1920x300</li>
      </ul>
      
      <ul>
        <li>Capa do curso: aparece no resumo do aluno para acessar as aulas;</li>
        <li>Capa do produto e capa de fundo: página de detalhes do curso;</li>
        <li>Banners: os que aparecem na home;</li>
        <li>Ícone e capa de fundo da categoria: novidade da nova versão.</li>
      </ul>
    </div>
  )
}

export const docs = () => {

  return (
    <div>
      {btnArticle('https://docs.eadplataforma.com', 'Acessar Central de Ajuda', true)}
    </div>
  );
}

export const about = () => {

  const goInsta = () => {
    window.open('https://instagram.com/guimachadooo');
  }

  return (
    <div>
      <p>
        Zenibot é um chat de resposta rápida e direta sobre alguma área
        da plataforma. Seu propósito é ajudar na conversa com clientes no dia a dia
        e resumir de forma fácil todos os recursos do EAD.
      </p>

      <p>Feito com 💚 <span style={{cursor: 'pointer'}} onClick={() => goInsta()}>@guimachadooo</span></p>
    </div>
  )
}