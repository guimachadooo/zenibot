import { btnArticle } from "../general"

export const allUsers = () => {
  return (
    <div>
      <p>
        Nessa seção você irá encontrar todos os usuários cadastrados na plataforma.
        É possível filtrar os usuários por tipo de permissão {'('}aluno, professor, tutor, 
        administrador...{')'}, por status e qual o período de cadastro.
      </p>

      <p>
        Em <b>Usuários</b> você pode enviar comunicados em massa, importar ou exportar usuários,
        cadastrar novos usuários e aplicar permissões a eles.
      </p>

      <p>
        Todo usuário cadastrado exibe o status do seu e-mail com um ícone ao lado. Esses status são:

        <ul>
          <li>❗ Em análise: Não teve nenhum e-mail enviado ainda;</li>
          <li>✅ Confirmado: Já recebeu um e-mail e é válido;</li>
          <li>❌ Inválido: Enviou um comunicado e o e-mail não é válido.</li>
        </ul>
      </p>
    </div>
  )
}

export const userDetails = () => {

  return (
    <div>
      <p>
        Nessa seção, todas os dados do usuário são exibidos, como e-mail, endereço, redes sociais...
      </p>

      <p>
        Também é possível gerenciar as permissões individualmente do usuário, e cadastrar um recebedor
        para receber percentuais de participação sempre que houver uma venda de um produto que esse usuário
        estiver vinculado como comissionado.
      </p><br/>

      {btnArticle('detalhes-do-usuário')}
    </div>
  )
}

export const userGroups = () => {

  return (
    <div>
      <p>
        Os grupos na plataforma servem exclusivamente para matricular vários alunos em vários 
        cursos de uma só vez. Não são turmas, o conceito é apenas facilitar as matrículas em massa.
      </p>
      
      <p>
        Um grupo precisa de apenas duas informações: cursos e usuários. No momento que você 
        inclui usuários dentro do grupo, o EAD já cria automaticamente o cadastro de usuário. 
        Mas somente quando tiver cursos e usuários é que serão criadas as matrículas dos alunos.
      </p><br/>

      {btnArticle('grupos')}
    </div>
  )
}

export const userNews = () => {

  return (
    <div>
      <p>
        Com a Newsletter é possível obter uma lista de usuários para
        enviar comunicados sobre ofertas e novidades.
      </p>
      
      <p>
        Os usuários podem deixar o e-mail no rodapé do site para depois
        receberem esses comunicados.
      </p>
    </div>
  )
}

export const userGeneralSettings = () => {

  return (
    <div>
      <p>
        Nessa seção você pode:
      </p>

      <ul>
        <li>
          Configurar a obrigatoriedade do cadastro completo do aluno, 
          preenchendo data de nascimento, telefone e endereço;
        </li>
        <li>
          Habilitar a confirmação do cadastro com ativação via e-mail;
        </li>
        <li>
          Permitir que usuários com e-mail inválidos recebam notificação de 
          Cadastro, Recuperação de senha e Convite.</li>
      </ul>
    </div>
  )
}

export const userTemplates = () => {

  return (
    <div>
      <p>
        Nessa seção você pode cadastrar novos templates de permissão, como por exemplo
        <b> Financeiro</b> ou <b>Comercial</b>, e configurar quais módulos do sistema
        serão liberados. Depois no cadastro do usuário, basta utilizar o novo template e salvar.
      </p>
    </div>
  )
}

export const userFields = () => {

  return (
    <div>
      <p>
        Nessa seção é possível cadastrar novos campos que serão exibidos {'('}somente{') '}
        no cadastro de usuário. Você pode criar um campo <b>"Como nos conheceu?"</b> e inserir
        algumas opções para o usuário preencher, e depois trabalhar essas informações.
      </p>
    </div>
  )
}