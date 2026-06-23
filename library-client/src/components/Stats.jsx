function Stats() {
  const data = [
    { number: "10,000+", title: "Books" },
    { number: "5,000+", title: "Students" },
    { number: "50+", title: "Categories" },
    { number: "1,000+", title: "Daily Users" },
  ];

  return (
    <section className="grid grid-cols-4 gap-5 p-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-lg p-6 rounded text-center"
        >
          <h2 className="text-3xl font-bold">{item.number}</h2>
          <p>{item.title}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;