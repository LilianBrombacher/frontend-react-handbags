import './App.css'
import Button from './assets/constants/components/Button.jsx'
import bag_1 from './assets/bag_1.png'
import bag_2 from './assets/bag_2.png'
import bag_3 from './assets/bag_3.png'
import bag_4 from './assets/bag_4.png'

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
                      onClick={() => console.log("jij werkt niet!!!!")}>
                  pre-orders
              </Button>
          </nav>
            <main>
                <article>
                    <span>Best seller</span>
                    <img src={bag_1} alt="tas 1"/>
                    <p>The handy bag</p>
                    <h4>€400,-</h4>
                </article>
                <article>
                    <span>Best seller</span>
                    <img src={bag_2} alt="tas 2"/>
                    <p>The stylish bag</p>
                    <h4>€250,-</h4>
                </article>
                <article>
                    <span>Best seller</span>
                    <img src={bag_3} alt="tas 3"/>
                    <p>The simple bag</p>
                    <h4>€300,-</h4>
                </article>
                <article>
                    <span>Best seller</span>
                    <img src={bag_4} alt="tas 4"/>
                    <p>The trendy bag</p>
                    <h4>€150,-</h4>
                </article>
            </main>
        </div>

  );
}

export default App
