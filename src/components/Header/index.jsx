import React from 'react';
import NavBar from '../NavBar';
import { 
    Header, 
    FireLeft, 
    FireRight,
    TextPrice,
    Amburguer,
    Lancamento, 
    ContainerNav,
    Presentation,
    EfeitoFumaça,
    ContainerHamburguerHeader, 
    ContainerDescriptionAmburguer, 
    BlurLeft
} from '../../style/styled';
import fireborder from '../../icons/fireborder.svg';
import amburguerHeader from '../../icons/amburguerHeader.svg'
import coolicon from '../../icons/coolicon.svg';
import iconLancamento from '../../icons/iconLançamento.svg';
import path4 from '../../icons/path4.svg';
import Vector from'../../icons/Vector.svg';
import fumaça from '../../icons/fumaça.svg'

function ContainerHeader() {
    return (
        <Header>
            <ContainerNav>
            <FireLeft>
                <img src={fireborder} alt="image de chama top" />
            </FireLeft>
                <div>
                    <h1>AMburguer</h1>
                </div>
                <NavBar/>
            </ContainerNav>
        <Presentation>
            <ContainerDescriptionAmburguer>
                    <span></span>
                <h2>
                Carnes artesanais
                </h2>
                <p>Selecionadas e preparadas na brasa, acompanhando de molho especial da casa</p>
                <button>
                Conferir cardápio
                </button>
            </ContainerDescriptionAmburguer>

            <ContainerHamburguerHeader>
                <div>
                <TextPrice>19,99 R$</TextPrice>
                <EfeitoFumaça src={fumaça} alt="efeito" />
                <Amburguer src={amburguerHeader} alt='Imagem de um amburguer'/>
                <Lancamento src={iconLancamento} alt="Lançamento"/>
                <p>Monster Supreme</p>
                </div>

                <div>
                <ol>
                    <li><img src={path4} alt="Iocn whatsapp" /></li>
                    <li><img src={coolicon} alt="Icon instagram" /></li>
                    <li><img src={Vector} alt="Icon facebook" /></li>
                </ol>
                </div>
            </ContainerHamburguerHeader>
            <FireRight>
                <img src={fireborder} alt="chama right" />
            </FireRight>
        </Presentation>
        <BlurLeft/>
        </Header>
    )
}

export default ContainerHeader;