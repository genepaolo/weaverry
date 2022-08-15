import {ReactComponent as Weaverry} from "../../resources/header/weaverry.svg";

function HeaderBody(){
    return(
        <div className="header__body">
            <div className="header__body__container">
                <Weaverry className="animate__animated animate__fadeInLeft"></Weaverry>
                <br></br>
                <br></br>
                <p className="header__body__container__slogan animate__animated animate__fadeInLeftBig"><i>slogan slogan slogan Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, placeat numquam</i></p>
            </div>
        </div>
    );
}

export default HeaderBody;