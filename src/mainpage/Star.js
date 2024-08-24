
import styles from "./Star.module.css";
import starImage from "../images/foursidestar.png";

const Star = () => {

    return (
        <div className={styles.starouterdiv}>
            <img className={styles.star} src={starImage}/>
            {/* <p></p> */}
        </div>
    );
}

export default Star;
