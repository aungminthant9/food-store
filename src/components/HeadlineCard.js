const HeadlineCard = () => {
    return ( 
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
            {/* Card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                  <p className="font-bold text-2xl px-2 pt-4">Sun's Out,BOGO's Out</p>
                  <p className="px-2">Through 8/26</p>
                  <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                 src="https://media.istockphoto.com/id/1413442770/photo/spicy-vermicelli-salad-with-shrimp.webp?b=1&s=170667a&w=0&k=20&c=-DwUJZDhrobU2heho9B8vrHpvZMCogqa7oVu_p47PgM="
                 alt="/"
                />
            </div>

            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                  <p className="font-bold text-2xl px-2 pt-4">New Restaurant</p>
                  <p className="px-2">Add Daily</p>
                  <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                 src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2RzfGVufDB8fDB8fHww"
                 alt="/"
                />
            </div>

            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                  <p className="font-bold text-2xl px-2 pt-4">We Deliver Desserts</p> 
                  <p className="px-2">Tasty Treats</p>
                  <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                 src="https://media.istockphoto.com/id/478461614/photo/sponge-cake-with-cream-and-strawberries.webp?b=1&s=170667a&w=0&k=20&c=qqISyyZoWEZnVBcI9Xf5pqMgAMLhx52Brd-Il12fFJk="
                 alt="/"
                />
            </div>
        </div>
     );
}
 
export default HeadlineCard;