/* eslint-disable react/prop-types */
import './Newsitem.css'

const Newsitem = ({title, source, year, src, url}) => {
    
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "345px"}}>
    <img src={src} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <div className="card-footer">
        Ano de publicacao: {year.slice(0, 4)}
      </div>
      <p className="card-text">{source}</p>
      <a href={url} className="btn btn-primary">Leia mais aqui</a>
    </div>
  </div>
  )
}
export default Newsitem