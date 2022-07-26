import React from 'react';

import { SectionInfo } from '../../style/styled'

import WhatsApp from '../../icons/whatsapp.svg';
import burguer from '../../icons/burguer-info.svg';
import icon from '../../icons/especial-chef.svg';

function SectionInformative() {
  return (
    <div>
        <SectionInfo>
        <div className='contentInfo'>
            <h1>Não passe vontade, aproveite nossa semana de entrega grátispara todos os lugares</h1>
            <p>
            na compra de cinco hambugueres você ganha um especial do chef
            </p>

            <button><span><img src={WhatsApp}/></span>Fazer pedido direto</button>
        </div>

        <div className='contentImgburguer'>
            <div className='spanBack'>

            </div>
            
            <div>
            <img src={burguer}/>
            <span><img src={icon}/></span>
            </div>
        </div>
        </SectionInfo>
    </div>
  )
}

export default SectionInformative