const Banner = () => {
    return (
        <div className="hero h-[70vh] bg-base-200" style={{ backgroundImage: 'url(https://i.ibb.co/42k6Zzb/Clothing.png)' }}>
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" text-center mx-auto w-full">
                    <h1 className="text-4xl md:text-6xl font-bold">I Grow By Helping People In Need</h1>
                    <div className=" my-8">
                        <input type="text" placeholder="Type here" className="py-3 px-4 rounded-tl-lg rounded-bl-lg input-bordered w-60 md:w-full max-w-xs" />
                        <button className="px-8 py-3 rounded-tr-lg rounded-br-lg btn-error text-white font-semibold">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;