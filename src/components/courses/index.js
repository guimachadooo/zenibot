import { btnArticle } from "../general"

export const allCourses = () => {
  return (
    <div>
      <p>
        Nessa seção você irá encontrar todos os cursos cadastrados na plataforma.
        Somente cursos publicados irão aparecer para os alunos.
      </p>
    </div>
  )
}

export const allEnrollments = () => {
  return (
    <div>
      <p>
        Nessa seção ficam armazenadas todas as matrículas dos alunos, 
        seja através de uma compra, via API entre outras opções.
      </p><br/>

      {btnArticle('matriculas')}
    </div>
  )
}

export const library = () => {
  return (
    <div>
      <p>
        Com a <b>Biblioteca</b> é possível carregar arquivos que poderão ser utilizados nas aulas. 
        Esse recurso permite que você utilize o mesmo arquivo em vários cursos/aulas sem fazer novamente o upload. 
        A Biblioteca é uma forma de você economizar espaço e centralizar todo o conteúdo.
      </p><br/>

      {btnArticle('biblioteca')}
    </div>
  )
}

export const drmSettings = () => {
  return (
    <div>
      <p>
        O recurso de DRM permite a total proteção do conteúdo contra pirataria, sendo válida para
        arquivos em vídeo ou arquivos PDF. Junto ao arquivo é exibido a marca d'agua embutida com
        informações do aluno, e você pode configurar algumas opções como fontes, cores e posições.
      </p><br/>

      {btnArticle('drm')}
    </div>
  )
}

export const certificates = () => {
  return (
    <div>
      <p>
        Nessa seção são listados os certificados de alunos e também os modelos de certificado.
      </p><br/>

      {btnArticle('certificados-emitidos')}
    </div>
  )
}

export const allExams = () => {
  return (
    <div>
      <p>
        Essa área armazena as provas feitas pelos alunos, seja prova de aula, 
        de módulo ou prova final. Essa seção se restringe ao gerenciamento das provas, 
        e não ao cadastro delas em si. O cadastro pode ser visualizado dentro do curso, módulo ou aula.
      </p><br/>

      {btnArticle('provas')}
    </div>
  )
}

export const testimonials = () => {
  return (
    <div>
      <p>
        Nessa seção ficam armazenadas as avaliações dos alunos sobre o curso, 
        com alguma avaliação positiva, crítica e/ou sugestão.
      </p>

      <p>
        Eles ficarão visíveis na página de detalhes do produto para que outras 
        pessoas possam analisar o desempenho do curso e assim avaliá-lo para comprar.
      </p><br/>

      {btnArticle('depoimentos')}
    </div>
  )
}

export const support = () => {
  return (
    <div>
      <p>
        A área de suporte recebe as dúvidas de todas as aulas de todos os cursos, 
        caso você tenha habilitado a opção de Suporte no cadastro dos cursos. 
      </p>
        
      <p>
        É possível filtrar as dúvidas pesquisando pelo nome do curso, nome da aula ou nome do aluno.
      </p><br/>

      {btnArticle('suporte')}
    </div>
  )
}

export const certificateSettings = () => {
  return (
    <div>
      <p>
        Nessa aba são exibidas duas configurações sobre certificados, permitindo 
        escolher se fica visível a consulta do PDF do certificado no site, e se o 
        código de autenticade será aleatório. 
      </p>
      
      <p>
        Caso fique marcado como não, os certificados seguirão a sequência de ids de forma crescente.
      </p><br/>

      {btnArticle('configuracoes-cursos')}
    </div>
  )
}

export const periodSettings = () => {
  return (
    <div>
      <p>
        Você pode criar novos períodos além dos que já estão pré cadastrados na plataforma. 
        Para criar um novo período, clique no ícone ➕ <b>Novo</b> e deﬁna quantos dias o 
        período contém, e um nome para ele. Exemplo: 120 dias {'('}que totalizam 4 meses{')'} e o nome “4 meses”.
      </p><br/>

      {btnArticle('configuracoes-cursos')}
    </div>
  )
}

export const courseProd = () => {
  return (
    <div>
      <p>
        Nessa área são exibidos os produtos vinculados ao curso. Ao clicar sobre um deles,
        você será levado para o cadastro do produto, como um atalho.
      </p>
    </div>
  )
}

export const collaborators = () => {
  return (
    <div>
      <p>
        Nessa seção ficam listados todos os professores que fazem parte do curso. Também é
        possível visualizar em quantas aulas e módulos estão associados.
      </p>

      <p>
        Atualmente apenas usuários de permissão <b>Administrador</b> ou <b>Professor </b>
        podem ser incluídos nessa lista.
      </p>
    </div>
  )
}

export const modules = () => {
  return (
    <div>
      <p>
        O módulo é apenas um nome, como se fosse uma pasta que tivesse vários arquivos dentro. 
        Esses arquivos no caso são as aulas 😄
      </p>

      <p>O intuito do módulo é organizar as aulas em seções para facilitar a navegação no curso.</p><br/>

      {btnArticle('editando-cursos#aba-módulos')}
    </div>
  )
}

export const lessons = () => {
  return (
    <div>
      <p>
        Na seção de Aulas ficarão listados todos os tipos de aula disponíveis, seja em vídeo gravado, 
        aula ao vivo, PDF, link do YouTube / Vimeo entre outros formatos.
      </p><br/>

      {btnArticle('editando-cursos#aba-aulas')}
    </div>
  )
}

export const questionBank = () => {
  return (
    <div>
      <p>
        É possível criar provas que permitem avaliar o conhecimento dos alunos, 
        gerando nota e outras informações. O primeiro passo para se criar uma prova 
        é antes criar todas as perguntas que serão usadas nela. Para isso serve
        o <b>Banco de Questões</b>.
      </p>

      <p>
        Cada curso possui seu <b>Banco de Questões</b>, e também é possível
        copiar as questões para outros cursos.
      </p><br/>

      {btnArticle('editando-cursos#provas-e-banco-de-questões')}
    </div>
  )
}

export const finalExam = () => {
  return (
    <div>
      <p>
        A <b>Prova Final</b> é exibida no fim do curso para os alunos. Geralmente
        os clientes cadastram ela para avaliar o conhecimento geral no curso e depois
        liberar a emissão do certificado.
      </p>
    </div>
  )
}

export const courseEnrolls = () => {
  return (
    <div>
      <p>
        A seção de <b>Matrículas</b> dentro do curso permite visualizar de forma prática 
        o progresso de todos os alunos do curso, além de exportar esses dados tanto em 
        planilha quanto PDF, e envio de comunicados.
      </p>
    </div>
  )
}