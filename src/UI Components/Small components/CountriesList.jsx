import React from "react";

export default function CountriesList() {
    const countries = [
        { name: "Afghanistan", flag: "./assets/images/flags/afg.png" },
        { name: "Albania", flag: "./assets/images/flags/albn.png" },
        { name: "Algeria", flag: "./assets/images/flags/alg.png" },
        { name: "Andorra", flag: "./assets/images/flags/and.png" },
        { name: "Angola", flag: "./assets/images/flags/ang.png" },
        { name: "Argentina", flag: "./assets/images/flags/argn.png" },
        { name: "Armenia", flag: "./assets/images/flags/arm.png" },
        { name: "Australia", flag: "./assets/images/flags/aus.png" }
    ];

    return (
        <div className="countries-list mt-3 pt-2">
            {countries.map((country, index) => (
                <div key={index} className="list-item d-flex align-items-center mb-2">
                    <img src={country.flag} alt="" />
                    <p className="ps-3 mb-0">{country.name}</p>
                </div>
            ))}
        </div>
    );
}