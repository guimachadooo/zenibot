import { btnArticle } from "../general"

export const myCourses = () => {

  return (
    <div>
      <p>
        A opção <b>Meus Cursos</b> é exclusiva do aluno,
        e exibe a lista de cursos que ele está matriculado.
      </p>

      <p>
        Os últimos cursos acessados serão exibidos primeiro,
        para garantir a sequência dos conteúdos.
      </p>
    </div>
  )
}

export const forum = () => {

  return (
    <div>
      <p>
        O fórum é um local para debater ideias e resolver
        dúvidas referente a conteúdos da plataforma. Os alunos
        podem interagir entre si e criar novos tópicos, além de
        poder participar dos já existentes.
      </p>
    </div>
  )
}

export const myProfile = () => {

  return (
    <div>
      <p>
        A área de perfil do aluno contém informações do cadastro
        e atalhos para compras, matrículas e assinaturas. <br/>

        No seu perfil é possível alterar os dados, fotos e cadastrar
        a forma de pagamento para as compras no EAD. 
      </p>

      <p>
        Na área de <b>Matrículas</b> ele visualiza todos os cursos que possui
        e quando expiram os acessos. Em <b>Assinaturas</b> o aluno visualiza
        os planos ativos e altera a forma de pagamento de sua assinatura.
      </p>

      <p>
        Já na área de <b>Compras</b> é possível visualizar todas as compras feitas no EAD,
        seja de cursos, combos, planos, períodos de acesso ou certificados.
      </p>
    </div>
  )
}

export const banners = () => {

  return (
    <div>
      <p>
        Nessa seção ficam visíveis os banners cadastrados para
        agregar a identidade visual do EAD. Para aprender sobre 
        o cadastro clique no botão abaixo.
      </p><br/>

      {btnArticle('banners')}
    </div>
  )
}

export const sections = () => {

  return (
    <div>
      <p>
        A página inicial do seu EAD é o ponto de início dos alunos.
        E as seções ajudam a exibir todo seu conteúdo de cursos e informações
        de venda. Para aprender sobre o cadastro clique no botão abaixo.
      </p><br/>

      {btnArticle('configuracoes-site#vitrine')}
    </div>
  )
}

export const social = () => {

  return (
    <div>
      <p>
        Nessa área serão exibidas as redes sociais da escola cadastradas
        no painel <b>Administrar</b>.
      </p>
    </div>
  )
}

export const searchCertificate = () => {

  return (
    <div>
      <p>
        Esse link leva para uma página <b>pública</b> para qualquer pessoa
        ou instituição {'('}sem cadastro no EAD{')'} consultar o certificado de um aluno. 
        É necessário saber a data de conclusão e o código do certificado.
      </p>
    </div>
  )
}