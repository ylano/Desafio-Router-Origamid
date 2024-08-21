import React from 'react'
import Head from '../components/Head'
import { Link } from 'react-router-dom';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
    .then(r => r.json())
    .then(json => setProdutos(json));
  },[])
  console.log(produtos);
  if (produtos === null) return null;

  return (
    <section className='grid grid-cols-3 items-start m-8 gap-4 animeLeft'>{produtos.map(produto => (
      <Link to={`produto/${produto.id}`} key={produto.id}>
      <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
      <Head title='Ranek' description='Produtos'/>
        <h2 className=' text-xl font-bold'>{produto.nome}</h2>
      </Link>
    ))}</section>
  )
}

export default Produtos
