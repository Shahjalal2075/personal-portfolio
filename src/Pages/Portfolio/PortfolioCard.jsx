import PropTypes from 'prop-types';

const PortfolioCard = ({ portfolio, idx }) => {

    return (
        <div>
            <button onClick={() => document.getElementById(`my_modal_${idx}`).showModal()}>
                <img src={portfolio.photo} alt="" />
            </button>
            <dialog id={`my_modal_${idx}`} className="modal">
                <div className="modal-box bg-[#7BE0FE]">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-[#0A101E] rounded-full bg-[#E23243]">✕</button>
                    </form>
                    <img src={portfolio.photo} alt="" />
                    <div className="flex justify-between mt-10">
                        <a className='px-6 py-3 bg-[#FEC544] rounded-3xl text-lg font-bold text-[#0A101E]' href="">Client Code</a>
                        <a className='px-6 py-3 bg-[#FEC544] rounded-3xl text-lg font-bold text-[#0A101E]' href="">Server Code</a>
                        <a className='px-6 py-3 bg-[#FEC544] rounded-3xl text-lg font-bold text-[#0A101E]' href="">Live Link</a>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default PortfolioCard;

PortfolioCard.propTypes = {
    portfolio: PropTypes.object,
    idx: PropTypes.id
}