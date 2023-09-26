import { useEffect, useState } from "react";
import DonationItems from "./DonationItems";

const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [noDataFoundText, setNoDataFoundText] = useState(false)
    const [isShowAll, setIsShowAll] = useState(false)

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem("add-donations"))
        if (donationItems) {
            setDonation(donationItems)
        } else {
            setNoDataFoundText('No Data Found!!!')
        }
    }, [])

    return (
        <div className="">
            {noDataFoundText ?
                <p className="text-2xl font-semibold h-[80vh] flex justify-center items-center">{noDataFoundText}</p> :
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-12">
                    {isShowAll ?
                        donation.map(donationItem => <DonationItems key={donationItem.id} donationItem={donationItem}></DonationItems>)
                        :
                        donation.slice(0, 4).map(donationItem => <DonationItems key={donationItem.id} donationItem={donationItem}></DonationItems>)
                    }
                </div>
            }
            {donation.length > 4 && (
                <button
                    onClick={() => setIsShowAll(!isShowAll)}
                    className="my-10 px-5 py-2 rounded-lg bg-red-400 text-white font-semibold block mx-auto"
                >
                    {isShowAll ? "Show Less" : "Show More"}
                </button>
            )}
        </div>
    );
};

export default Donation;