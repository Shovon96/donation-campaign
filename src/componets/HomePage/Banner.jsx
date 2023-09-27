import PropTypes from 'prop-types'

const Banner = ({ handleSearch, searchItem, setSearchItem }) => {

    return (
        <div className="hero h-[70vh] relative" style={{ backgroundImage: 'url(https://i.ibb.co/42k6Zzb/Clothing.png)' }}>
            <div className="absolute inset-0 bg-white opacity-90 h-full w-full"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" text-center mx-auto w-full">
                    <h1 className="text-4xl md:text-6xl font-bold text-black">I Grow By Helping People In Need</h1>
                    <div className=" my-8">
                        <input onChange={(e) => setSearchItem(e.target.value)} value={searchItem}  type="text" placeholder="Type here" className="py-3 px-4 rounded-tl-lg text-black rounded-bl-lg input-bordered w-60 md:w-full max-w-xs" />
                        <button onClick={handleSearch} data-ripple-light="true" className="px-8 py-3 rounded-tr-lg rounded-br-lg btn-error text-white font-semibold">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    handleSearch: PropTypes.object.isRequired,
    searchItem: PropTypes.object.isRequired,
    setSearchItem: PropTypes.object.isRequired
}

export default Banner;