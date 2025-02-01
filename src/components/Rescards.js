import PropTypes from 'prop-types';
import { CDN_URL } from "../utils/constants";

const Rescards = ({ resData }) => {
    const {
        name = "Unknown Restaurant",
        cloudinaryImageId = "",
        cuisines = [],
        avgRating = "N/A",
        deliveryTime = "N/A",
        areaName = "N/A"
    } = resData?.info || {};

    return (
        <div className="p-4 m-4 w-[250px] rounded-lg cursor-pointer bg-white shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:translate-x-2">
            <img 
                className="card1 w-full rounded-lg"
                src={CDN_URL + cloudinaryImageId}
                alt={`Image of ${name}`}
            />
            <h3 className="font-bold py-4 text-lg text-gray-800">{name}</h3>
            <h4 className="text-sm text-gray-600">{cuisines.join(", ")}</h4>
            <h4 className="text-sm text-gray-600">Rating: {avgRating}</h4>
            <h4 className="text-sm text-gray-600">Delivery Time: {deliveryTime} mins</h4>
            <h4 className="text-sm text-gray-600">Area: {areaName}</h4>
        </div>
    );
};

Rescards.propTypes = {
    resData: PropTypes.shape({
        info: PropTypes.shape({
            name: PropTypes.string,
            cloudinaryImageId: PropTypes.string,
            cuisines: PropTypes.arrayOf(PropTypes.string),
            avgRating: PropTypes.string,
            deliveryTime: PropTypes.string,
            areaName: PropTypes.string,
        }),
    }).isRequired,
};

export default Rescards;
