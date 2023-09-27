import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const CardDetails = () => {

    const { id } = useParams();

    const [cards, setCards] = useState({});
    const donatinCards = useLoaderData();

    useEffect(() => {
      const findCard = donatinCards?.find((card) => card.id == id);
      setCards(findCard);
    }, [id, donatinCards]);
    const { image, price, title, description, text_color } = cards;

    const bgBtn = {
        backgroundColor: text_color
    }

    const addDonationItem = [];
    const handleDonateCategories = () => {
      const addDonationList = JSON.parse(localStorage.getItem("add-donations"));
      if (!addDonationList) {
        addDonationItem.push(cards);
        localStorage.setItem("add-donations", JSON.stringify(addDonationItem));
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your Donation added',
            showConfirmButton: false,
            timer: 1000
        })
      } else {
        const isExist = addDonationList.find((item) => item.id == id);
        if (!isExist) {
          addDonationItem.push(...addDonationList, cards);
          localStorage.setItem("add-donations", JSON.stringify(addDonationItem));
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your Donation added',
            showConfirmButton: false,
            timer: 1000
        })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You already donate this',
            })
        }
      }
    };


    return (
        <div className="w-full">
            <div>
                <img className="h-[70vh] w-full" src={image} alt="" />
            </div>
            <div className="absolute top-[445px] md:top-[377px] lg:top-[407px] inset-0 bg-black opacity-50  max-w-7xl h-36 w-full  mx-auto"></div>
            <div className="absolute bottom-24 ml-14 md:bottom-36 lg:bottom-44 lg:ml-20">
                <NavLink>
                    <button onClick={handleDonateCategories} className="btn text-white font-semibold border-none" style={bgBtn}>Donate {price}</button>
                </NavLink>
            </div>
            <div className="my-14 px-5 lg:px-0">
                <h1 className="text-5xl font-bold my-5">{title}</h1>
                <p className="text-lg text-gray-500 font-medium">{description}</p>
            </div>
        </div>
    );
};

export default CardDetails;