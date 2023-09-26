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
        item.category.includes(searchItem)
        );
        setResults(filteredResults);
    };



    return (
        <div>
            <Banner
                handleSearch={handleSearch}
                query={searchItem}
                setQuery={setSearchItem}
            ></Banner>
            <DonationCards></DonationCards>
        </div>
    );
};

export default HomePage;