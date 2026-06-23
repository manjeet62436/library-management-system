function Hero() {
  return (
    <section className="bg-blue-800 text-white text-center py-24">
      <h1 className="text-5xl font-bold mb-5">
        Discover, Read & Learn
      </h1>

      <p className="mb-6 text-lg">
        Access thousands of books anytime.
      </p>

      <input
        type="text"
        placeholder="Search Books..."
        className="w-96 p-3 rounded text-black"
      />

      <div className="mt-6">
        <button className="bg-yellow-400 px-6 py-3 rounded mr-3">
          Explore Books
        </button>

        <button className="bg-white text-blue-900 px-6 py-3 rounded">
          Join Now
        </button>
      </div>
    </section>
  );
}

export default Hero;