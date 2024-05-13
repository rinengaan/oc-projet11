import React from 'react'
import Header from '../../components/Header.jsx'
import Banner from '../../components/Banner.jsx'
import Item from '../../components/Item.jsx'
import Footer from '../../components/Footer.jsx'
import iconChat from '../../assets/images/icon-chat.png'
import iconMoney from '../../assets/images/icon-money.png'
import iconSecurity from '../../assets/images/icon-security.png'
import '../../sass/pages/_Home.scss'

function Home() {
    return (
        <div className='homepage'>
            <Header />
            <main>
                <Banner />
                <section className='features'>
                    <h2 className='sr-only'>Features</h2>
                    <Item
                        image={iconChat}
                        descriptionImage='Chat Icon'
                        title='You are our #1 priority'
                        description='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes. '
                    />
                    <Item
                        image={iconMoney}
                        descriptionImage='Money Icon'
                        title='More savings means higher rates'
                        description='The more you save with us, the higher your interest rate will be! '
                    />
                    <Item
                        image={iconSecurity}
                        descriptionImage='Security Icon'
                        title='Security you can trust'
                        description='We use top of the line encryption to make sure your data and money is always safe. '
                    />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Home
