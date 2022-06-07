import "../Styles/MainComponentAbout.css"
function MainComponentAbout (){
    return(
        <div className="maincomponentabout">
            <div className="container-main-about">
            Somos un equipo altamente colaborativo y de apoyo,
            que se une en cada proyecto para garantizar que nuestros clientes obtengan el mejor resultado.
            </div>
            <div className="container-photo">
                <img src={require('../img/cabra.jpeg')} alt="cabra" />
            </div>
            <div className="container-about">
                <div className="container-mision">
                    <h5>Nuestra mision</h5>
                    <div>
                    Construir el mejor producto que cree el mayor valor para nuestros clientes, 
                    utilizar el negocio para inspirar e implementar soluciones respetuosas con el medio ambiente.
                    </div>
                </div>
                <div className="container-valores">
                    <h5>Nuestros valores</h5>
                        <div>
                        Nos esforzamos por ir más allá para nuestros clientes sin importar el desafío. 
                        Nuestro objetivo es ofrecer nuestro mejor trabajo todos los días a través de nuestros servicios.
                        </div>
                </div>
            </div>
        </div>
    )
}
export default MainComponentAbout;