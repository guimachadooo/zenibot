export const allProducts = () => {
  return (
    <div>
      <p>
        A lista de produtos exibe todos os produtos que são vendidos
        e também os que ficam em rascunho para um novo lançamento.
        Também é possível criar novos produtos clicando no topo em <b>Novo</b>.
      </p>
    </div>
  )
}

export const allCoupons = () => {
  return (
    <div>
      <p>
        No módulo de produtos é possível visualizar todos os cupons ou
        ou filtrando pelo produto em seu cadastro. O cupom é um gatilho extra
        para usar na venda de um curso, oferecendo desconto ao aluno em valor ou percentual.
      </p>
    </div>
  )
}

export const orderBump = () => {
  return (
    <div>
      <p>
        É uma sugestão de compra que pode aparecer para o aluno na página de detalhes
        do produto ou no carrinho, pra oferecer uma outra opção e também ajudar a gerar
        mais receita para a escola. 
      </p>
      
      <p>
        É possível cadastrar um order bump para todos os tipos de produto.
      </p>
    </div>
  )
}

export const prodDetails = () => {
  return (
    <div>
      <p>
        Nessa área ficam todas as informações sobre um produto. Ele é, na prática,
        o curso que aparece no site para venda, e aqui ficam todos os dados sobre
        as condições de pagamento, descrições e valores desse produto.
      </p>

      <p>
        Enquanto o cadastro de curso mantém dados sobre o conteúdo, o cadastro de 
        produto serve para identificar como esse curso será vendido.
      </p>
    </div>
  )
}

export const prodCourses = () => {
  return (
    <div>
      <p>
        Nessa área são exibidos os cursos vinculados ao produto, ou seja, todos os cursos
        que serão liberados caso o aluno compre esse produto. Ao clicar sobre um deles,
        você será levado para o cadastro do curso, como um atalho.
      </p>
    </div>
  )
}

export const prodOffers = () => {
  return (
    <div>
      <p>
        Aqui serão listados todos os preços vinculados ao produto. O esquema de <b>Ofertas</b>
        permite criar várias condições e valores diferentes, e você pode deixar ofertas como 
        <b>Não Listadas</b> para enviá-las a pessoas específicas, ou utilizar em landing pages para
        promoções, sem que precisem comprar o produto pelo valor real.
      </p>
    </div>
  )
}

export const prodPages = () => {
  return (
    <div>
      <p>
        Essa seção contém as principais informações da página de detalhes do produto. Foi feita para 
        inserir informações de descrição, imagens do produto, vídeo promocional, quem é o 
        público alvo, e dados do certificado caso tenha.
      </p>
    </div>
  )
}

export const prodMarketing = () => {
  return (
    <div>
      <p>
        Nessa área o cliente pode definir um script de conversão para ser executado sempre 
        que acontecer alguma ação com o produto. É possível executar scripts de conversão de 3 formas:
      </p><br/>

      <ul>
        <li>Nativo: Verifica as integrações de Track na EAD Store;</li>
        <li>Global: Verifica scripts inseridos em Site {'>'} Snippets {'>'} Cód. de Conversão;</li>
        <li>Campo script personalizado: Executa o script inserido no produto.</li>
      </ul>
    </div>
  )
}

export const prodComissioned = () => {
  return (
    <div>
      <p>
        Essa seção é destinada ao cadastro de colaboradores que podem receber 
        uma comissão sempre que houver uma venda do produto em questão.
      </p>
    </div>
  )
}

export const prodFaq = () => {
  return (
    <div>
      <p>
        Essa área é destinada ao cadastro de perguntas e respostas rápidas que auxiliam
        os alunos a entender os principais detalhes do curso antes de realizar a compra.
      </p>
    </div>
  )
}

export const prodLists = () => {
  return (
    <div>
      <p>
        Nessa área são exibidos todos os alunos que:
      </p><br/>

      <ul>
        <li>Alunos que deixaram o curso no carrinho mas não finalizaram a compra;</li>
        <li>Alunos que marcaram o ❤️ para salvar nos Favoritos e comprar posteriormente;</li>
        <li>Alunos que se inscreveram na lista de espera de algum produto que ainda será lançado.</li>
      </ul>
    </div>
  )
}

export const prodContract = () => {
  return (
    <div>
      <p>
        Essa seção serve para inserir um contrato personalizado do produto, explicando todos os
        termos de uso aplicados junto a compra.
      </p>
    </div>
  )
}