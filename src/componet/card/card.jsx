import React from 'react'
import kolbasaBest from '../../assets/kolbasaBest.png'
import kolbasaLazzatli from '../../assets/kolbasaLazzatli.png'
import kolbasaLazzet from '../../assets/kolbasaLazzet.png'
import sirKottaSharqoniy from '../../assets/sirKottaSharqoniy.png'
import kolbasaSafia from '../../assets/sirSafia.png'
import sirSharqoniy from '../../assets/sirSharqoniy.png'
import './card.css'
import Cards from './cards/cards'

const products = [
    {
        id: 1,
        title: 'Kolbasa Best',
        category: 'Go‘sht mahsuloti',
        weight: '450 g',
        image: kolbasaBest
    },
    {
        id: 2,
        title: 'Kolbasa Lazzet',
        category: 'Go‘sht mahsuloti',
        weight: '500 g',
        image: kolbasaLazzet
    },
    {
        id: 3,
        title: 'Kolbasa Lazzatli',
        category: 'Go‘sht mahsuloti',
        weight: '400 g',
        image: kolbasaLazzatli
    },
    {
        id: 4,
        title: 'Safia Suti',
        category: 'Sut mahsuloti',
        weight: '1 L',
        image: kolbasaSafia
    },
    {
        id: 5,
        title: 'Sharqoniy Kotta',
        category: 'Sut mahsuloti',
        weight: '900 g',
        image: sirKottaSharqoniy
    },
    {
        id: 6,
        title: 'Sharqoniy Sir',
        category: 'Sut mahsuloti',
        weight: '750 g',
        image: sirSharqoniy
    }
]

const Card = () => {
    return (
        <>
            <section className='cardSection'>
                <Cards />
                <div className="cardSection__content">
                    <p>
                        Bizning kasbiy mas&apos;uliyatimiz, ishlab chiqarish sifatini doimiy nazorat qilish,
                        sanitariya me&apos;yorlari va ishlab chiqarish texnologiyasiga qat&apos;iy rioya qilib,
                        yuqori sifatli va raqobatbardosh mahsulot ishlab chiqarish.
                    </p>
                    <button>BUYURTMA</button>
                </div>
            </section>

            <section className="productGridSection">
                <div className="productGrid">
                    {products.map((product) => (
                        <article className="productCard" key={product.id}>
                            <div className="productCard__image">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="productCard__body">
                                <p className="productCard__category">{product.category}</p>
                                <h3>{product.title}</h3>
                                <span>{product.weight}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Card