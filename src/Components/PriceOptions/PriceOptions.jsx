import Features from "../Features/Features";
import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions=[
        {
          "id": 1,
          "name": "Basic",
          "price": 20,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free Wi-Fi"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": 35,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free Wi-Fi",
            "Group fitness classes",
            "One personal training session per month"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": 50,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free Wi-Fi",
            "Group fitness classes",
            "Unlimited personal training sessions",
            "Access to sauna and steam room",
            "Guest passes"
          ]
        },
        {
          "id": 4,
          "name": "VIP",
          "price": 75,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free Wi-Fi",
            "Group fitness classes",
            "Unlimited personal training sessions",
            "Access to sauna and steam room",
            "Guest passes",
            "Monthly massage",
            "Nutrition counseling",
            "Priority class booking"
          ]
        }
      ]
      

    return (
        <div className="m-10 mt-20">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {
                priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption> )
            }

            </div>


        </div>
    );
};

export default PriceOptions;