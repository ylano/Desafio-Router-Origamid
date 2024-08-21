import React from 'react';
import { useParams } from 'react-router-dom';
import Head from '../components/Head';

const Produto = () => {
  const { id } = useParams();
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);

        if (!response.ok) throw new Error('Network response was not ok');

        const json = await response.json();
        setProduto(json);

      } catch (err) {
        setError('Um erro ocorreu: ' + err.message);

      } finally {
        setLoading(false);
      }
    }

    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className='loading'>Carregando...</div>;
  if (error) return <p>{error}</p>;
  if (!produto) return <p>Produto não encontrado</p>;

  return (
    <section className=' flex flex-col md:flex-row items-start m-8 gap-4 animeLeft'>
      <Head 
        title={`Ranek | ${produto.nome}`} 
        description={`Ranek | Esse é um(a) ${produto.nome}`}
      />

      <div className=' flex flex-col gap-4 w-full md:w-1/2'>
        {produto.fotos.map(foto => (
          <img 
            key={foto.src} 
            src={foto.src} 
            alt={foto.titulo} 
            className='w-full h-auto object-cover'
          />
        ))}
      </div>

      {/* Descrição */}
      <div className='flex-1'>
        <h1 className='text-xl font-bold mb-2'>{produto.nome}</h1>
        <span className='block max-w-16 rounded text-md font-sans text-green-950 bg-green-500 mb-4'>
          R$ {produto.preco}
        </span>
        <p className='max-w-full md:max-w-md'>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
