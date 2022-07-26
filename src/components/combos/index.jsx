import React, { useState, useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { ArticleCombo, ContainerCombo } from '../../style/styled';


export default function Combos() {
    const [combos, setCombos] = useState([]);
    
    useEffect(() => {
        const SnackCombos = [
            {
                id: 1,
                name: 'Brazuca',
                items: 'Buguer Picanha + latinha de guaraná antartica + porção grande de batata',
                price: '20,00',
                image: 'https://save-images.vercel.app/icons/amburguer/combos/image%2039.svg'
            },
            {
                id: 2,
                name: 'Big Family',
                items: '4 Monster chicken + batata recheada+ calabresa + anéis  de cebola frita + nuggets',
                price: '119,50',
                image: 'https://save-images.vercel.app/icons/amburguer/combos/image%2041.svg'
            },
            {
                id: 3,
                name: 'X-Picante',
                items: 'Double burguer Malagueta na brasa + copo coca cola grande + porção batata pequena',
                price: '26,50',
                image: 'https://save-images.vercel.app/icons/amburguer/combos/image%2042.svg'
            },
            {
                id: 4,
                name: 'Big Burger Brasil',
                items: 'Double burguer na brasa + coca cola + porção batata pequena',
                price: '25,30',
                image: 'https://save-images.vercel.app/icons/amburguer/combos/image%2043.svg'
            }
    
        ];
        setCombos(SnackCombos);
    }, [])

    return (
    <ContainerCombo>
        <h1>Sozinho ou acompanhado, aproveite os nossos combos</h1>
        <Carousel>
        {combos.map((item) => {
            const { id, name, items, price, image } = item
            return(
                <ArticleCombo key={id}>
                    <h2>{name}</h2>
                    <p>{items}</p>
                    <p>{price}</p>
                    <div>
                        <img src={image} alt="image"/>
                    </div>
                </ArticleCombo>
            )
        })}
        </Carousel>
    </ContainerCombo>
  )
}