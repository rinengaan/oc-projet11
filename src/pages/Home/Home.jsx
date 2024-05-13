/** @format */
import React from 'react'
import Header from '../../components/Header.jsx'
import Banner from '../../components/Banner.jsx'
import Item from '../../components/Item.jsx'
import Footer from '../../components/Footer.jsx'
import iconChat from '../../assets/icons/icon-chat.webp'
import iconMoney from '../../assets/icons/icon-money.webp'
import iconSecurity from '../../assets/icons/icon-security.webp'
import FeatureItemsData from '../../data/FeatureItems.json'
import '../../sass/pages/_Home.scss'

function Home() {
    const imageData = {
        'icon-chat.webp': iconChat,
        'icon-money.webp': iconMoney,
        'icon-security.webp': iconSecurity,
    }

    return (
        <div className='homepage'>
            <Header />
            <main>
                <Banner />
                <section className='features'>
                    <h2 className='sr-only'>Features</h2>
                    {FeatureItemsData.map((data) => (
                        <Item
                            key={data.id}
                            image={imageData[data.image]}
                            descriptionImage={data.descriptionImage}
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Home
