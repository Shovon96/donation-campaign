import { useLoaderData } from "react-router-dom";
import DonationCards from "../DonationCard/DonationCards";
import Banner from "./Banner";
import { useState } from "react";


const HomePage = () => {
    const data = useLoaderData();
    const [results, setResults] = useState(data);
    const [searchItem, setSearchItem] = useState();
    const handleSearch = () => {

        const filteredResults = data.filter((item) =>
        item.title.includes(searchItem)
        );
        setResults(filteredResults);
    };


    return (
        <div>
            <Banner
                handleSearch={handleSearch}
                searchItem={searchItem}
                setSearchItem={setSearchItem}
            ></Banner>
            <DonationCards results={results}></DonationCards>
        </div>
    );
};

export default HomePage;