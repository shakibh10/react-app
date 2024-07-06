import PropTypes from 'prop-types';
import { FaRegCheckCircle } from "react-icons/fa";

const Features = ({feature}) => {


    return (
        <div>
            <h3 className='flex items-center align-center'> <FaRegCheckCircle></FaRegCheckCircle>{feature}</h3>
        </div>
    );
};

Features.propTypes={
    feature:PropTypes.string
}
export default Features;