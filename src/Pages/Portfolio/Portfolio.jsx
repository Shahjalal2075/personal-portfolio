import { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {

    const [portfolios,setPortfolios]=useState([]);

    useEffect(() => {
        fetch('../../../public/portfolios.json')
            .then(res => res.json())
            .then(data => setPortfolios(data))
    }, []);


    return (
        <div>
            <h2 className="text-4xl text-center font-semibold my-16 text-[#FEC544]">Portfolios</h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mx-5">
                {
                    portfolios.map((portfolio,idx) => <PortfolioCard
                        key={idx}
                        portfolio={portfolio}
                        idx={idx}
                    ></PortfolioCard>)
                }
            </div>
        </div>
    );
};

export default Portfolio;