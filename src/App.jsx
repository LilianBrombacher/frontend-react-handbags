import './App.css'
import Button from './assets/constants/components/Button.jsx'
import bag_1 from './assets/bag_1.png'
import bag_2 from './assets/bag_2.png'
import bag_3 from './assets/bag_3.png'
import bag_4 from './assets/bag_4.png'
import Product from "./assets/constants/components/Product.jsx";
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';
import Tile from "./assets/constants/components/Tile.jsx";

function App() {
    return (
        <div>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button type="button"
                        onClick={() => console.log("to the collection")}>
                    to the collection
                </Button>
                <Button type="button"
                        onClick={() => console.log("shop all bags")}>
                    shop all bags
                </Button>
                <Button type="button" disabled
                        onClick={() => console.log("pre-orders")}>
                    pre-orders
                </Button>
            </nav>
            <main>
                <Product
                    imageSrc={bag_1}
                    altText="tas 1"
                    name="The handy bag"
                    price="€400,-"
                />
                <Product
                    imageSrc={bag_2}
                    altText="tas 2"
                    name="The stylish bag"
                    price="€250,-"
                />
                <Product
                    imageSrc={bag_3}
                    altText="tas 3"
                    name="The simple bag"
                    price="€300,-"
                />
                <Product
                    imageSrc={bag_4}
                    altText="tas 4"
                    name="The trendy bag"
                    price="€150,-"
                />
                <footer>
                    <Tile
                        title="The brand"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam at consequatur
                            debitis, dicta doloremque est fugiat harum, itaque laborum libero magnam minus mollitia
                            nobis obcaecati optio quae reprehenderit tenetur."
                    />
                    <Tile
                        imageSrc={brand} altText="brand-image"
                    />
                    <Tile
                        title="our story"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque culpa cupiditate
                            exercitationem id nam velit veniam voluptate. Atque cumque debitis dolores ducimus
                            exercitationem expedita hic impedit iste non odio."
                    />
                    <Tile
                        imageSrc={our_story} altText="our-story-image"
                    />
                </footer>
            </main>
        </div>

    );
}

export default App
