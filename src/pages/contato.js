import React from 'react'
import foto from '../img/contato.jpg'
import Head from '../components/Head'

const Contato = () => {
  return (
  <section className='h-screen animeLeft flex items-start gap-4'>
  <Head title='Ranek | Contato' description='Entre em contato'/>
      <img className='max-w-xs mr-4' src={foto} alt='Máquina de escrever' />
      <div>
       <h2 className='font-semibold py-2 text-2xl'>Entre em contato.</h2>
        <ul className='justify-start'>
          <li>franciscoylano@gmail.com</li>
          <br/>
          <li>(99)-99999-9999</li>
          <br/>
          <li>Rua ali, Perto de Lá, 5555</li>
        </ul>
    </div>
  </section>  
  )
}

export default Contato
