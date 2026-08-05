function Hero() {
  return (
    <section
      id="home"
      className="bg-blue-600 text-white min-h-[80vh] flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6">
          Grow Your Business with LeadDesk Mini
        </h1>

        <p className="text-xl mb-8">
          Capture leads, manage prospects, and streamline your customer
          communication with our simple CRM solution.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;