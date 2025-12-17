const Services = () => {
    return (
        <div className="mt-15  md:mt-20  text-center">
            <h3 className="text-text text-4xl font-bold">Services</h3>
            <h4 className="text-muted-text">Helping You Build Modern Web Solutions</h4>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 mx-1 md:mx-20 justify-items-center">
                <div className="bg-cards p-5 rounded-2xl text-center w-full max-w-xs">
                    <img
                        src="/Images/WebDesign.jpg"
                        alt="Web App Development"
                        className="w-full h-30 md:h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-button text-xl md:text-2xl font-bold mb-2">Web App Development</h3>
                    <p className="text-sm text-muted-text">
                        Full-stack web apps with reliability and fast functioning.
                    </p>
                </div>

                {/* 2. Frontend Development */}
                <div className="bg-cards p-5 rounded-2xl text-center w-full max-w-xs">
                    <img
                        src="/Images/LaptopMobile.jpg"
                        alt="Frontend Development"
                        className="w-full h-30 md:h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-button text-xl md:text-2xl font-bold mb-2">Frontend Development</h3>
                    <p className="text-sm text-muted-text">
                        Build responsive and interactive user interfaces using modern frameworks.
                    </p>
                </div>

                {/* 3. Backend Development */}
                <div className="bg-cards p-5 rounded-2xl text-center w-full max-w-xs">
                    <img
                        src="/Images/Backend.jpg"
                        alt="Backend Development"
                        className="w-full h-30 md:h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-button text-xl md:text-2xl font-bold mb-2">Backend Development</h3>
                    <p className="text-sm text-muted-text">
                        Server-side programming, database management, and API development.
                    </p>
                </div>

                <div className="bg-cards p-5 rounded-2xl text-center w-full max-w-xs">
                    <img
                        src="/Images/Ecommerce.png"
                        alt="E-commerce Solutions"
                        className="w-full h-30 md:h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-button text-xl md:text-2xl font-bold mb-2">E-commerce Solutions</h3>
                    <p className="text-sm text-muted-text">
                        Online stores with payment gateways, shopping carts, and product management.
                    </p>
                </div>

                <div className="bg-cards p-5 rounded-2xl text-center w-full max-w-xs">
                    <img
                        src="/Images/ApiIntegrations.jpg"
                        alt="API Integration"
                        className="w-full h-30 md:h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-button text-xl md:text-2xl font-bold mb-2">API Integration</h3>
                    <p className="text-sm text-muted-text">
                        Connect third-party APIs like payment, maps, social media, or analytics.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services
