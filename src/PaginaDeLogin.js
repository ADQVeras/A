//CSS da PaginaDeLogin
import './PaginaDeLogin.css'

//componentes

import { Botao } from './componentes/Botao'
import { TextoH1 } from './componentes/Texto'
import { TextoH2 } from './componentes/Texto'

const PaginaDeLogin = () => {
  return (
    <div>
        <div className='primeira-coluna'>
            <TextoH1 />
              <h1 className='Impulsione'>Impulsione</h1>
              <h1 className='byCrefisa'>by Crefisa</h1>

            <TextoH2/>
              <h2 className='Desenvolver_pessoas'>   Desenvolver pessoas
                <br/>Impulsionar negócios
                <br/>Conectar e criar soluções
              </h2>
            
            <Botao/>
              <div className='grupo-botao'>
                <button className='btn-entrarNaMinhaConta'>ENTRAR NA MINHA CONTA</button>
                <button className='btn-meCadastrarComoPf'>ME CADASTRAR COMO PF</button>
                <button className='btn-cadastrarMeuNegocio'>CADASTRAR MEU NEGÓCIO</button>
              </div>
        </div>

        <div className='segunda-coluna'>
            
        </div>
    </div>
  )
}

export default PaginaDeLogin