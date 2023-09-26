import { btnArticle } from "../general";

export const checkoutTaxes = () => {

  return (
    <div>
      <p>As taxas do EAD Checkout são:</p>
      <p>
        Cartão à vista - 4.29% + R$ 0,10 centavos; <br />

        Cartão parcelado - 4.99% + R$ 0,10 centavos; <br />

        Boleto - 3.79% + R$ 1,85 reais por boleto pago; <br />

        PIX - 1.89% + R$ 0,00.
      </p>

      <p>
        A taxa para conta grátis é um taxa padrão de 8.90% para vendas 
        no cartão a vista e parcelado, pix e boleto + tarifas.
      </p>

      <p>
        A taxa de <b>Antecipação</b> é de 1.97%. E a de <b>Saque</b> é de R$ 2,80.
      </p><br/>

      {btnArticle('https://docs.google.com/spreadsheets/d/1hId0ORngAWGt22kvF0lBpa2enB9nBhMf/edit?usp=sharing&ouid=106826115339743935237&rtpof=true&sd=true', 'Simular taxas', true)}
    </div>
  );
}

export const rateComparison = () => {

  return (
    <div>
      <div className="img-answer">
        <img src="https://i.imgur.com/JigRSN6.png" alt="comparativo de taxas" />
      </div><br/>

      {btnArticle('comparativo-de-taxas', 'Ver Infográfico completo')}
    </div>
    
  )
}

export const refund = () => {

  return (
    <div>
      <p>
        O reembolso de vendas na plataforma deve ser feito através da área de
        <b> Transações</b> dentro do painel <b>Administrar</b>.
      </p>

      <p>
        Ao realizar um estorno integral, as taxas não serão cobradas. Porém se o estorno 
        for parcial, também será cobrado de forma proporcional as taxas de intermediação.
      </p>

      <p>
        Todos os reembolsos no cartão de crédito serão estornados para a fatura do 
        aluno automaticamente. Esse crédito pode levar até 2 faturas para aparecer na 
        listagem de volta. Já no caso do reembolso no boleto, será exibido os campos de 
        conta e agência bancária para preencher as informações do aluno. Será feito um TED 
        para a conta bancária dele e o valor pode levar até 72 horas para ser transferido.
      </p>
    </div>
  )
}

export const anticipation = () => {

  return (
    <div>
      {btnArticle('o-que-é-a-antecipação')}
    </div>
  )
}

export const chargeback = () => {

  return (
    <div>
      {btnArticle('o-que-é-um-chargeback')}
    </div>
  )
}

export const charges = () => {

  return (
    <div>
      <p>
        Essa seção tem o intuito de criar cobranças manuais para os alunos, onde você define 
        o preço da cobrança e qual a validade. Nesse formato, o aluno não precisa passar pelo 
        carrinho de compras, você vai gerar uma cobrança que será disparada para o e-mail dele.
      </p>

      <p>
        Porém mesmo que não passe pelo carrinho de compras, esse método também irá cobrar a taxa 
        de intermediação na cobrança, visto que é um processo que passa pela gateway de pagamentos.
      </p><br/>

      {btnArticle('cobrancas')}
    </div>
  )
}

export const transactions = () => {

  return (
    <div>
      <p>
        Nessa seção ficam listadas todas as compras feitas pelos alunos. A Transação é um pouco 
        diferente da Venda pois ela agrupa todos os itens comprados naquele momento, mas as duas 
        seções são similares. A aba de <b>Vendas</b> vai listar cada item vendido de cada transação.
      </p><br/>

      {btnArticle('transacoes')}
    </div>
  )
}

export const sales = () => {

  return (
    <div>
      <p>
        Em <b>Vendas</b> ficam listados todos os cursos ou planos vendidos. A Venda é um pouco 
        diferente da Transação pois ela lista cada item vendido de cada transação. Já a transação 
        agrupa todos os itens comprados naquele momento e cria um único registro.
      </p><br/>

      {btnArticle('vendas')}
    </div>
  )
}

export const signatures = () => {

  return (
    <div>
      <p>
        Os planos de assinatura são uma ótima forma de vender cursos pois trabalham com recorrência.
      </p>

      <p>
        Sua função é similar ao Netflix, Spotify, e outros meios de pagamento recorrente, onde o 
        aluno paga uma cobrança e tem acesso a diversos conteúdos, definidos por você no momento 
        da criação do plano.
      </p><br/>

      {btnArticle('assinaturas')}
    </div>
  )
}

export const receivers = () => {

  return (
    <div>
      <p>
        Um recebedor é simplesmente uma conta bancária que fica registrada na plataforma para 
        receber os valores das vendas, e todo o valor que for exibido no box Saldo Disponível 
        já pode ser sacado para sua conta bancária real. 
      </p><br/>

      {btnArticle('recebedores')}
    </div>
  )
}

export const calculator = () => {

  return (
    <div>
      {btnArticle('https://eadplataforma.com/calculadora', 'Usar Calculadora', true)}
    </div>
  )
}

export const settings = () => {

  return (
    <div>
      <p>
        Nessa seção ficam algumas configurações relacionadas a parte financeira da escola, 
        desde formas de pagamento até emissão de notas e notificações.
      </p>

      <p>As principais são:</p>

      <ul>
        <li>Definir quais formas de pagamento irão aparecer de forma global na plataforma;</li>
        <li>Obrigar preenchimento do endereço no checkout;</li>
        <li>Solicitar dados de faturamento no checkout;</li>
        <li>Ativar notificações sobre vendas para os alunos;</li>
        <li>Configurações sobre emissão de nota fiscal.</li>
      </ul>

      {btnArticle('configuracoes-financeiro')}
    </div>
  )
}

