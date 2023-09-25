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
            <div className="flex justify-center my-4">
                <button onClick={() => setIsShowAll(!isShowAll)} className="btn btn-success font-semibold text-white text-lg capitalize">
                    {isShowAll ? 'See Less' : 'See All'}
                    </button>
            </div>
        </div>
    );
};

export default Donation;