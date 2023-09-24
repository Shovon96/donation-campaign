import PropTypes from 'prop-types'

const DonationCard = ({ donationCard }) => {
    const { image, title, title_name, bg_color, text_color, bg_title } = donationCard

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

    return (
        <div>
            <div style={bgCard} className='border shadow-md rounded-md cursor-pointer'>
                <img className='h-52 mb-2 w-full' src={image} alt="" />
                <div className='p-4'>
                    <span style={bgTitle} className='px-2 py-1 rounded-lg text-sm font-medium'>{title}</span>
                    <h3 style={textColor} className='text-xl font-semibold mt-2'>{title_name}</h3>
                </div>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    donationCard: PropTypes.object.isRequired
}

export default DonationCard;