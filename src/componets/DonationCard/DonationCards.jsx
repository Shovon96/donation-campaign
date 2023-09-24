import { useLoaderData } from "react-router-dom";
import DonationCard from "./DonationCard";

const DonationCards = () => {

    const donationCards = useLoaderData()
    console.log(donationCards);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
                {
                    donationCards.map(card => 
                    <DonationCard key={card.id} donationCard={card}>

                    </DonationCard>)
                }
            </div>
        </div>
    );
};

export default DonationCards;