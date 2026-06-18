function Dashboard() {
  const cards = [
    { title: "Total Orders", value: "24" },
    { title: "Wishlist", value: "12" },
    { title: "Cart Items", value: "5" },
    { title: "Profile", value: "90%" },
  ];

  return (
    <div className="min-h-screen bg-[#FBF7F2] p-8">

      <h1 className="heading-font text-5xl text-[#8B3A2A] mb-3">
        Welcome Pavan 👋
      </h1>

      <p className="text-gray-600 mb-10">
        Customer Dashboard
      </p>

      <div className="grid md:grid-cols-4 gap-6">

        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 shadow-lg"
          >
            <h3 className="text-gray-500">
              {card.title}
            </h3>

            <h2 className="text-4xl font-bold text-[#8B3A2A] mt-3">
              {card.value}
            </h2>
          </div>
        ))}

      </div>

      <div className="bg-white mt-10 rounded-3xl p-8 shadow-lg">

        <h2 className="text-2xl font-semibold text-[#8B3A2A] mb-6">
          Recent Orders
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Order ID</th>
              <th className="text-left py-3">Product</th>
              <th className="text-left py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="py-4">#1001</td>
              <td>Tussar Silk Saree</td>
              <td className="text-green-600">Delivered</td>
            </tr>

            <tr>
              <td className="py-4">#1002</td>
              <td>Dokra Art</td>
              <td className="text-yellow-600">Processing</td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default Dashboard;