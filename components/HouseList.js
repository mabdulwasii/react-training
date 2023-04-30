import HouseRow from "@/components/HouseRow";
import {useEffect, useState} from "react";
import {log} from "next/dist/server/typescript/utils";

const houseArray = [
    {
        id: 1,
        address: "7 Oloje estate",
        country: "Nigeria",
        price: 9000000
    },
    {
        id: 2,
        address: "12 Adewole estate",
        country: "Nigeria",
        price: 500000
    }
]
const HouseList = () => {
    const [houses, setHouses] = useState(houseArray);

    // const [counter, setCounter] =useState(0);
    // setCounter(current => counter + 1);

    useEffect(() => {
        const fetchHouses = async () => {
            const response = fetch("/api/houses");
            const houses = (await response).json();
            setHouses(houses);
        }
        fetchHouses()
            .catch(reason => log(reason))
    });

    const addHouses = () => {
        setHouses([
            ...houses,
            {
                id: 1,
                address: "Plot 9 Harmony estate",
                country: "Nigeria",
                price: 450000
            }
        ])
    }
    return (<>
        <div className="row mb-2">
            <h5 className="themeFontColor text-center">
                Houses currently on the market
            </h5>
        </div>
        <table className="table table-hover">
            <thead>
            <tr>
                <th>Address</th>
                <th>Country</th>
                <th>Asking Price</th>
            </tr>
            </thead>
            <tbody>
            {houses.map(h => (
                <HouseRow key={h.id} house={h}/>
            ))}
            </tbody>
        </table>

        <button className="btn btn-primary px-5" onClick={addHouses}>Add</button>
    </>);
};

export default HouseList;