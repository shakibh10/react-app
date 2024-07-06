import PropTypes from 'prop-types';
import Features from '../Features/Features';
import { CgDollar } from "react-icons/cg";

const PriceOption = ({option}) => {
    const{name,price,features}=option;
    return (
        <div className='bg-yellow-400 rounded-lg p-4 flex flex-col' >
            <h2 className='text-center  '>
                <span className='text-5xl font-bold flex items-center'>{price}<CgDollar></CgDollar></span>
                <span className='text-4xl'>/mon</span>
            </h2>
            <h3 className='text-3xl text-center font-bold'>{name}</h3>

            <div className="flex-grow">
            {
                features.map((feature,index)=><Features key={index} feature={feature}></Features>)
            }

            </div>
           
           <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-red-600 hover:bg-green-300 ">Buy Now</button>
           
        </div>
    );
};


PriceOption.propTypes={
    option:PropTypes.object
}

export default PriceOption;