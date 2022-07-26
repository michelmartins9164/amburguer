import React from 'react';
import { Link } from 'react-router-dom';
import CarShop from '../../icons/CarShop.svg';
import User from '../../icons/UserCircle.svg';
import { ContainerSpan } from '../../style/styled'

function NavBar() {
  return (
        <nav>
            <ol>
                <li><Link to="/">Mais vendidos</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Combos</Link></li>
                <li><Link to="/">Cardápio</Link></li>
                <li><Link to="/">Entrega</Link></li>
            </ol>

            <ContainerSpan>
                <span><Link to="/" ><img src={CarShop} alt="Ícone do carrinho de shopping"/></Link></span>
                <span><Link to="/" ><img src={User} alt="Ícone de usuário"/></Link></span>
            </ContainerSpan>
        </nav>
  )
}

export default NavBar