function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive websites built with the latest technologies."
    },
    {
      title: "Full Stack Solutions",
      description: "Complete frontend and backend development for your business."
    },
    {
      title: "API Development",
      description: "Secure and scalable REST APIs using Node.js and Express."
    },
    {
      title: "Database Design",
      description: "Efficient MongoDB and SQL database solutions."
    },
    {
      title: "Cloud Deployment",
      description: "Deploy applications on Vercel, Render, and AWS."
    },
    {
      title: "Maintenance",
      description: "Continuous support and updates to keep your application running."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold mb-3 text-blue-600">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;