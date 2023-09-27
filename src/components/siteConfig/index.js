import { btnArticle } from "../general"

export const school = () => {

  return (
    <div>
      <p>
        Nessa seção o cliente pode cadastrar todos os dados da empresa, como telefone,
        email e horário de atendimento. Além de também cadastrar redes sociais, um contrato
        geral para as vendas e a política de privacidade.
      </p>
    </div>
  )
}

export const theme = () => {

  return (
    <div>
      <p>
        Na área <b>Tema</b> é possível definir as cores primária e secundária, e estilo dos 
        botões, da plataforma, e alternar entre os temas, podendo utilizar tanto o tema 
        padrão quando o tema Netflix.
      </p>
    </div>
  )
}

export const configBanners = () => {

  return (
    <div>
      <p>
        Nessa seção é possível cadastrar até 10 banners, e eles ficarão visíveis
        na página inicial da plataforma.
      </p>
    </div>
  )
}

export const pages = () => {

  return (
    <div>
      <p>
        O recurso <b>Páginas</b> permite criar páginas institucionais na plataforma,
        mas elas são estáticas, não dispõem de acesso a banco de dados e integrações.
      </p>

      <p>
        Com esse recurso é possível criar uma página de suporte aos alunos ou até mesmo
        um <b>Sobre Nós</b> contando a história da empresa, usando recursos do editor 
        de texto, imagens e vídeos.
      </p>
    </div>
  )
}

export const categories = () => {

  return (
    <div>
      <p>
        Todo curso pode ter uma ou mais categorias, e todas elas ficam cadastradas nessa seção.
        As categorias permitem que o aluno encontre rapidamente o curso que deseja. Elas aparecem
        na página inicial do EAD na barra de pesquisa e na seção <b>Categorias</b> quando ativada.
      </p>
    </div>
  )
}

export const forumSettings = () => {

  return (
    <div>
      <p>
        No fórum todos os usuários {'('}até os alunos{')'} podem criar os tópicos com as dúvidas. 
        A intenção é justamente compartilhar alguma dúvida ou conhecimento com outras pessoas 
        e fazer com que possam interagir respondendo aqueles tópicos.
      </p>
    </div>
  )
}

export const faqSettings = () => {

  return (
    <div>
      <p>
        O FAQ é muito utilizado em diversos sistemas, seria a área de Perguntas e Respostas, 
        ou Dúvidas Frequentes. É possível escolher entre 4 opções, exibir as dúvidas frequentes 
        na página de todos os produtos, exibir somente em produtos Curso, ou Plano ou Combo.
      </p>
    </div>
  )
}

export const terminology = () => {

  return (
    <div>
      <p>
        Com o recurso de <b>Terminologia</b> é possível alterar os termos técnicos padrão 
        como "Fale Conosco" ou "Meus Cursos" para qualquer outra palavra que você ache 
        melhor para os alunos identificarem as seções.
      </p>

      {btnArticle('terminologia')}
    </div>
  )
}

export const snippets = () => {

  return (
    <div>
      <p>
        A área de Snippets contém tudo que é relacionado a códigos terceiros e permite 
        personalizar sua plataforma, alterando elementos do layout e inserindo scripts 
        para captação de dados.
      </p>
    </div>
  )
}

export const domain = () => {

  return (
    <div>
      <p>
        Todo EAD pode estar em um domínio personalizado seu, ao mesmo tempo que funciona 
        no nosso domínio provisório {'('}por exemplo minhaescola.eadplataforma.app{')'}.
      </p>

      <p>
        Se o cliente não possui um domínio próprio {'('}meuscursos.com.br{')'}, poderá 
        continuar usando normalmente o domínio provisório que fornecemos sem custo adicional. 
      </p><br/>

      {btnArticle('dominio')}
    </div>
  )
}

export const ipSettings = () => {

  return (
    <div>
      <p>
        Nessa seção é possível cadastrar uma lista de IP's que podem ou não fazer login 
        e visualizar a plataforma. Após acessar com um IP não liberado {'('}seja na lista 
        de IPs bloqueados ou um que não faz parte dos liberados{')'}, a página do EAD ficará offline.
      </p><br/>

      {btnArticle('cadastro-de-ip')}
    </div>
  )
}

export const siteGeneralSettings = () => {

  return (
    <div>
      <p>
        Na área de Configurações do site ficam listados todos os módulos e sessões do EAD, 
        e também os campos de idioma e tipo de plataforma.
      </p>
    </div>
  )
}

export const configModules = () => {

  return (
    <div>
      <p>
        Você pode rapidamente habilitar e desabilitar alguns dos principais módulos do EAD. 
        A maioria fica separado no menu lateral {'('}Biblioteca, Cobranças…{')'}, quando 
        desabilitado faz ocultar aquela opção ou função, não sendo exibida para todos os 
        usuários inclusive administrador.
      </p>
    </div>
  )
}

export const configSections = () => {

  return (
    <div>
      <p>
        Essa seção lista todas as seções que podem ser ativadas ou desativadas da página 
        inicial do EAD e do rodapé. Caso você queira ocultar a seção Mais Vendidos, ou 
        formas de pagamento no rodapé, basta desativar essas opções, além de definir se a 
        seção irá exibir o background com a cor primária configurada na área Tema.
      </p>
    </div>
  )
}

export const pageSections = () => {

  return (
    <div>
      <p>
        O cadastro de seções na vitrine é um novo recurso no painel que permite configurar 
        a entrada da sua plataforma da forma que desejar, com os títulos mais chamativos 
        e cursos escolhidos pelo próprio cliente.
      </p><br/>

      {btnArticle('configuracoes-site#vitrine')}
    </div>
  )
}