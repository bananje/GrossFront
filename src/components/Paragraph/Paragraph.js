import './Paragraph.css';
import {Link} from "react-router-dom";
const Paragraph = (props) => {
    return (

        <div className="row">
            <div className="services-header">
                <h1>{props.header}</h1>
                <Link to={props.path} style={{textDecoration: "none", marginLeft: "auto"}}>
                    <p>
                        {props.a}
                    </p>
                </Link>

            </div>
            <div className="line"/>
        </div>
    );
};
export default Paragraph;