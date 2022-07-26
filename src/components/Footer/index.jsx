import React from 'react';

import { FooterSection } from '../../style/styled'

import instagram from '../../icons/instagram.svg';
import whatsapp from '../../icons/whatsapp.svg';
import facebook from '../../icons/facebook.svg';

function Footer() {
  return (
      <div>

    <FooterSection>
        <div className='column1'>
            <h1>
                AMburguer
            </h1>
            <p>
            Hamburgaria da familiar da familia Ambrósio, Hamburgueres gourmet.
            </p>
            <ol>
                <li>
                    <img src={whatsapp}/>
                </li>
                <li>
                    <img src={instagram}/>
                </li>
                <li>
                    <img src={facebook}/>
                </li>
            </ol>
        </div>

        <div className='column2'>
            <ol>
                <li>Home</li>
                <li>Mais vendidos</li>
                <li>Combos</li>
                <li>Cardápio</li>
                <li>Entrega</li>
            </ol>
        </div>

        <div className='column3'>
            <address>
                <p>(00) 00000000</p>
                <p>Avenida São João das festas - ponto comercialn°00</p>
            </address>
        </div>

        <p className='copy'>&copy; 2022 AMburguer</p>
    </FooterSection>
      </div>
  )
}

export default Footer