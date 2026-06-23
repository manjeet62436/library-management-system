function Categories() {
  const categories = [
    "Programming",
    "Web Development",
    "Database",
    "AI & ML",
    "Science",
    "Novels",
  ];

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Popular Categories
      </h2>

      <div className="grid grid-cols-3 gap-5">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded shadow text-center"
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;