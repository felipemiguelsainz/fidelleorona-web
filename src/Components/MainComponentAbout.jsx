import "../Styles/MainComponentAbout.css"

function MainComponentAbout (){
    return(
        <div className="maincomponentabout">
            <div className="container-main-about">
            <p>Somos un equipo altamente colaborativo y de apoyo,
            que se une en cada proyecto para garantizar que nuestros clientes obtengan el mejor resultado.</p>
            </div>
            <div className="container-about card-hover">
                <div className="container-mision">
                    <div className="image-container">
                        <img src={require("../img/caro.jpg")} alt="" />
                    </div>
                    <div className="card-text-about">
                        <h5>Nuestra mision</h5>
                        <div>
                        Construir el mejor producto que cree el mayor valor para nuestros clientes, 
                        utilizar el negocio para inspirar e implementar soluciones respetuosas con el medio ambiente.
                        </div>
                    </div>
                </div>
                <div className="container-valores card-hover">
                    <div className="image-container">
                        <img src={require("../img/caro.jpg")} alt="" />
                    </div>
                    <div className="card-text-about">
                        <h5>Nuestros valores</h5>
                        <div>
                        Nos esforzamos por ir más allá para nuestros clientes sin importar el desafío. 
                        Nuestro objetivo es ofrecer nuestro mejor trabajo todos los días a través de nuestros servicios.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainComponentAbout;