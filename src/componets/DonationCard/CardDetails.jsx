import { NavLink, useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {


    const donationCard = useLoaderData()
    const { id } = useParams()
    const intId = parseInt(id)
    const cards = donationCard.find(card => card.id === intId);
    const { image, price, title_name, description, text_color} = cards;

    const bgBtn = {
        backgroundColor: text_color
    }

    return (
        <div>
            <div>
                <img className="h-[70vh] w-full" src={image} alt="" />
            </div>
            <div className="absolute top-[457px] inset-0 bg-black opacity-50 h-36 w-[85%] mx-auto"></div>
            <div className="absolute bottom-44 ml-20">
                <NavLink>
                    <button className="btn text-white font-semibold border-none" style={bgBtn}>Donate {price}</button>
                </NavLink>
            </div>
            <div className="my-14">
                <h1 className="text-5xl font-bold my-5">{title_name}</h1>
                <p className="text-lg text-gray-500 font-medium">{description}</p>
            </div>
        </div>
    );
};

export default CardDetails;