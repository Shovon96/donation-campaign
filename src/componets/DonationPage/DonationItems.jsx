import PropTypes from 'prop-types'

const DonationItems = ({ donationItem }) => {
    const { image, title, price, title_name, bg_color, text_color, bg_title } = donationItem

    // Styles
    const bgTitle = {
        backgroundColor: bg_title,
        color: text_color
    }
    const bgCard = {
        backgroundColor: bg_color
    }
    const textColor = {
        color: text_color
    }
    const bgBtn = {
        backgroundColor: text_color
    }

    return (
        <div style={bgCard} className='flex items-center shadow-md rounded-md'>
            <div>
                <img className='h-52 w-60' src={image} alt="" />
            </div>
            <div className='p-4'>
                <span style={bgTitle} className='px-2 py-1 rounded-lg text-sm font-medium'>{title}</span>
                <h3 className='text-2xl text-black font-semibold mt-2'>{title_name}</h3>
                <h4 style={textColor} className='text-lg font-bold mb-2'>{price}</h4>
                <button style={bgBtn} className='btn text-white font-semibold'>View Details</button>
            </div>
        </div>
    );
};

DonationItems.propTypes = {
    donationItem: PropTypes.object.isRequired
}

export default DonationItems;