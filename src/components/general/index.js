import "../style.css";

export const btnDocs = (link) => {

  const goDocs = (link) => {
    window.open(`https://docs.eadplataforma.com/docs/${link}`, '_blank');
  }

  return (
    <button className="btn-docs" onClick={() => goDocs(link)}>
      Ver artigo
    </button>
  )
}