import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

const DonationCard = ({ donationCard }) => {
    const { id, image, category, title, bg_color, text_color, bg_category } = donationCard

    // Styles
    const bgTitle = {
        backgroundColor: bg_category,
        color: text_color
    }
    const bgCard = {
        backgroundColor: bg_color
    }
    const textColor = {
        color: text_color
    }

    return (
        <div>
            <NavLink to={`/cardDetails/${id}`}>
                <div style={bgCard} className='border shadow-md rounded-md cursor-pointer'>
                    <img className='h-52 mb-2 w-full' src={image} alt="" />
                    <div className='p-4'>
                        <span style={bgTitle} className='px-2 py-1 rounded-lg text-sm font-medium'>{category}</span>
                        <h3 style={textColor} className='text-xl font-semibold mt-2'>{title}</h3>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

DonationCard.propTypes = {
    donationCard: PropTypes.object.isRequired
}

export default DonationCard;