import Container from "./Container";

const PopularLocations = () => {
    const locations = ["Motijheel", "Lalbagh", "Mirpur", "Baridhara", "Banani", "Uttara", "Paltan", "Demra", "Kotwali", "Wari", "Ramna", "Gabtali", "Farmgate", "Tejgaon"];

    return (

        <div className="py-10 px-4 lg:px-0">
            <h2 className="text-3xl text-base-content font-bold text-center mb-8">
                Popular Locations
            </h2>

            <div className="flex flex-wrap justify-center gap-2 md:gap-6">
                {locations.map((city) => (
                    <span
                        key={city}
                        className="px-6 py-3 bg-secondary border rounded-full hover:bg-yellow-500 text-white transition cursor-pointer"
                    >
                        {city}
                    </span>
                ))}
            </div>
        </div>

    );
};

export default PopularLocations;
