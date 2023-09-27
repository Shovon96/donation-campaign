import { useLoaderData } from "react-router-dom";
import DonationCard from "./DonationCard";
import PropTypes from 'prop-types'

const DonationCards = ( {results}) => {

    const donationCards = useLoaderData()
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
                {
                    results.map(card => 
                    <DonationCard key={card.id} donationCard={card}>

                    </DonationCard>)
                }
            </div>
        </div>
    );
};

DonationCards.propTypes = {
    results: PropTypes.array.isRequired
}

export default DonationCards;