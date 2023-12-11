import PropTypes from 'prop-types';

const PortfolioCard = ({ portfolio }) => {

    return (
        <div>
            <a href={portfolio.photo}>
                <img src={portfolio.photo} alt="" />
            </a>
        </div>
    );
};

export default PortfolioCard;

PortfolioCard.propTypes = {
    portfolio: PropTypes.object,
}