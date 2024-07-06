import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li 
        className="mr-10 hover:bg-sky-300">
        <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.protoTypes={
    route: PropTypes.object
}

export default Link;