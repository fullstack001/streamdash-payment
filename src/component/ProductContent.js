import React from "react";

const ProductContent = () => {
  const stats = [
    { title: "Destinations", value: "30+ platforms" },
    { title: "Users", value: "8 million" },
    { title: "Viewers reached", value: "60 billion" },
  ];
  return (
    <section className="bg-white py-10 px-4 lg:px-20">
      <div className="text-center">
        <h2 className="text-blue-300 text-lg font-semibold">Multistreaming</h2>
        <h1 className="text-3xl md:text-5xl text-blue-600    font-bold mt-2">
          Be seen, everywhere
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-lg">
          Live stream on multiple platforms to reach more viewers faster.
        </p>
      </div>

      {/* Image and Platforms */}
      <div className="relative flex items-center justify-center mt-10">
        {/* Background/Main Image */}
        <div className="w-full flex justify-center">
          <img
            src="/image/product/main.png" // Replace with the path to your image
            alt="Live Stream"
            className="w-[80%] max-w-5xl"
          />
        </div>

        {/* Overlay Image */}
        <div className="absolute top-1/2 left-3/4  -translate-y-1/2 mr-4 md:mr-8 lg:mr-10 xl:mr-20">
          <img
            src="/image/product/over.png" // Replace with the path to your image
            alt="Platforms"
            className="w-3/4  md:w-3/4 xl:w-full max-w-md"
          />
        </div>
      </div>

      {/* Stats Section */}
      <section className="flex flex-col md:flex-row justify-center gap-8 mt-10 py-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex-col w-full md:w-1/3 items-center text-center border-r last:border-none px-4 md:px-8"
          >
            <h4 className="text-blue-500 text-sm font-medium">{stat.title}</h4>

            <p className="text-2xl md:text-4xl mt-4 font-semibold text-gray-800">
              {stat.value}
            </p>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <div className="mt-10">
        <p className="text-start text-lg md:text-xl text-blue-400">
          Your unfair advantage
        </p>
        <h2 className="text-start text-3xl md:text-5xl mt-3 font-bold text-blue-600">
          One live stream. 30+ destinations.
        </h2>
        <p className="text-start text-lg md:text-xl text-gray-600 mt-4">
          Live stream to your own social platforms, guest channels, websites,
          and private pages at the same time.
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-32 mt-10">
          {[
            {
              image: "/image/product/item1.png",
              title: "30+ platforms",
              description:
                "Get discovered on YouTube while finding leads on LinkedIn and use each platform’s best features with a single live stream.",
            },
            {
              image: "/image/product/item2.png",
              title: "Multiple pages on one platform",
              description:
                "Build an audience on a single platform by streaming to your Facebook profile, page, and relevant groups.",
            },
            {
              image: "/image/product/item3.png",
              title: "Partner channels",
              description:
                "Collaborate by letting partners rebroadcast your videos to their channels for more exposure of host secure channel followers.",
            },
            {
              image: "/image/product/item4.png",
              title: "Custom pages",
              description:
                "Own your content, avoid social media limitations, and guide viewers to pay for streams or buy your services.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-64 text-start"
            >
              <img src={feature.image} alt={feature.title} width={60} />
              <h3 className="text-lg font-semibold mb-2 text-blue-400">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10 text-center bg-blue-100 py-8 px-4 rounded-lg">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-600">
          Get started today.
        </h2>
        <p className="text-2xl md:text-3xl font-semibold text-blue-400 mt-2">
          It feels good to reach more viewers.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4">
          Try it for free
        </button>
      </div>
    </section>
  );
};

export default ProductContent;
