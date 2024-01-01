import { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {

    const [portfolios,setPortfolios]=useState([]);

    useEffect(() => {
        fetch('portfolios.json')
            .then(res => res.json())
            .then(data => setPortfolios(data))
    }, []);
console.log(portfolios);

    return (
        <div>
            <h2 className="text-4xl text-center font-semibold my-16 text-[#FEC544]">Portfolios</h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mx-5">
                {
                    portfolios.map((portfolio) => <PortfolioCard
                        key={portfolio.id}
                        portfolio={portfolio}
                    ></PortfolioCard>)
                }
            </div>
        </div>
    );
};

export default Portfolio;