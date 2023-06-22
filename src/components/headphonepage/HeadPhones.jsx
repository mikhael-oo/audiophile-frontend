import Banner from "../banner/Banner"
import Audio from "../homepage/Audio"
import Products from "./Products"
import ProductLinks from "../homepage/ProductLinks"
import Footer from "../footer/Footer"

export default function HeadPhones() {
    return (
        <main>
            <Banner title="Headphones" />
            <Products />
            <ProductLinks />
            <Audio />
            <Footer />
        </main>
    )
}