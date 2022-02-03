import styleModule from './styleRegister.module.css'
import Header from '../components/Header.png'
import Rectangle3 from '../components/Rectangle 3.png'
import Rectangle4 from '../components/Rectangle 4.jpg'
import Rectangle5 from '../components/Rectangle 4(0).png'
import Rectangle6 from '../components/Rectangle 4 (1).png'
import Rectangle7 from '../components/Rectangle 4 (2).png'

function Home() {
  return (
    <div>
  <html>
    <head>
        <title>landing</title>
    </head>
    <body>
        <nav className={styleModule.container}>
            <div className={styleModule.left}>
                <img src={Header} alt=""/>
            </div>
            <div className={styleModule.right}t>
                <button className={styleModule.btnLogin}>Login</button>
                <button className={styleModule.btnRegister}>Register</button>
            </div>
        </nav>
<hr/>
        <div className={styleModule.mainLanding}>
            <div className={styleModule.banner}>
                <div className={styleModule.banner}>
                    <div className={styleModule.content}>
                        <div className={styleModule.descript}>
                        <p className={styleModule.title}>WAYSBUCK</p>
                        <p>Things are changing, but we're still here for you</p>
                        <p>We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. <span style={
                          {fontWeight: "bold"}}>Waysbucks</span> Drivers is also available</p>
                        <p>Let's Order...</p>
                        </div>
                    </div>
                    <img style={{height: "300px", marginTop: "50px", marginLeft: "-250px"}} src={Rectangle3} alt=""/>
                </div>
            </div>

            <p className={styleModule.titleOrder}>Let's Order</p>
            <div className={styleModule.contentOrder}>
                <div className={styleModule.order1}>
                    <img src={Rectangle4} alt=""/>
                    <div className={styleModule.descriptOrder1}>
                        <p style={{fontWeight: "bold", marginBottom: "5px"}}>Ice Coffee Palm Sugar</p>
                        <p>Rp.27.000</p>
                    </div>
                </div>
                <div className={styleModule.order2}>
                    <img src={Rectangle5} alt=""/>
                    <div className={styleModule.descriptOrder2}>
                        <p style={{fontWeight: "bold", marginBottom: "5px"}}>Ice Coffee Green Tea</p>
                        <p>Rp.31.000</p>
                    </div>
                </div>
                <div className={styleModule.order3}>
                    <img src={Rectangle6} alt=""/>
                    <div className={styleModule.descriptOrder3}>
                        <p style={{fontWeight: "bold", marginBottom: "5px"}}>Hanami Latte</p>
                        <p>Rp.29.000</p>
                    </div>
                </div>
                <div className={styleModule.order4}>
                    <img src={Rectangle7} alt=""/>
                    <div className={styleModule.descriptOrder4}>
                        <p style={{fontWeight: "bold", marginBottom: "5px"}}>Clepon Coffee</p>
                        <p>Rp.28.000</p>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
    </div>
  );
}

export default Home;

