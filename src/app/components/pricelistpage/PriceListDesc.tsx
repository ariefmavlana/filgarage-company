"use client";

export default function PriceListDesc() {
  // DATA: Card Intro Price List
  const introCards = [
    {
      name: "Small Motor",
      range: "(100 - 250CC)",
      price: "Rp. 2.000.000",
    },
    {
      name: "Medium Motor",
      range: "(250CC - 600CC)",
      price: "Rp. 2.500.000",
    },
    {
      name: "Large Motor",
      range: "(600CC+)",
      price: "Rp. 3.500.000",
    },
    {
      name: "PPF Motor",
      range: "-",
      price: "Rp. 5.000.000",
    },
  ];

  // DATA: Core Table Price List
  const nanoCoatingCategories = [
    {
      name: "Small",
      prices: [
        { type: "Paint Protection", price: "Rp. 1.200.000" },
        { type: "Sound Proof", price: "Rp. 5.000.000" },
        { type: "Rust Protection", price: "Rp. 2.300.000" },
        { type: "Nano Coating Reguler", price: "Rp. 3.500.000" },
        { type: "Nano Coating Premium", price: "Rp. 4.500.000" },
        { type: "Nano Coating Luxury", price: "Rp. 5.500.000" },
        { type: "PPF 7.5 mil", price: "Rp. 30.000.000" },
        { type: "PPF 8.5 mil", price: "Rp. 35.000.000" },
      ],
    },
    {
      name: "Medium",
      prices: [
        { type: "Paint Protection", price: "Rp. 1.300.000" },
        { type: "Sound Proof", price: "Rp. 5.000.000" },
        { type: "Rust Protection", price: "Rp. 2.400.000" },
        { type: "Nano Coating Reguler", price: "Rp. 4.000.000" },
        { type: "Nano Coating Premium", price: "Rp. 5.000.000" },
        { type: "Nano Coating Luxury", price: "Rp. 6.000.000" },
        { type: "PPF 7.5 mil", price: "Rp. 30.000.000" },
        { type: "PPF 8.5 mil", price: "Rp. 35.000.000" },
      ],
    },
    {
      name: "Large",
      prices: [
        { type: "Paint Protection", price: "Rp. 1.400.000" },
        { type: "Sound Proof", price: "Rp. 5.000.000" },
        { type: "Rust Protection", price: "Rp. 2.500.000" },
        { type: "Nano Coating Reguler", price: "Rp. 4.500.000" },
        { type: "Nano Coating Premium", price: "Rp. 5.500.000" },
        { type: "Nano Coating Luxury", price: "Rp. 6.500.000" },
        { type: "PPF 7.5 mil", price: "Rp. 35.000.000" },
        { type: "PPF 8.5 mil", price: "Rp. 40.000.000" },
      ],
    },
    {
      name: "Extra Large",
      prices: [
        { type: "Paint Protection", price: "Rp. 1.500.000" },
        { type: "Sound Proof", price: "Rp. 6.000.000" },
        { type: "Rust Protection", price: "Rp. 2.600.000" },
        { type: "Nano Coating Reguler", price: "Rp. 5.000.000" },
        { type: "Nano Coating Premium", price: "Rp. 6.000.000" },
        { type: "Nano Coating Luxury", price: "Rp. 7.000.000" },
        { type: "PPF 7.5 mil", price: "Rp. 40.000.000" },
        { type: "PPF 8.5 mil", price: "Rp. 45.000.000" },
      ],
    },
  ];

  return (
    <section className="w-full px-4 sm:px-10 lg:px-32 py-16 bg-white text-black">
      {/* Enhanced Title with geometric accent */}
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <h2 className="text-3xl md:text-5xl font-bold uppercase font-bebas text-white bg-primary px-12 py-6">
            Nano Coating Ceramic Price List
          </h2>
          {/* Geometric accent borders */}
          <div className="absolute -top-3 -left-3 w-full h-full border-4 border-primary"></div>
          <div className="absolute -bottom-3 -right-3 w-full h-full border-4 border-primary"></div>
        </div>
      </div>

      {/* Enhanced Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
        {introCards.map((card) => (
          <div
            key={card.name}
            className="relative group hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-white border-4 border-primary p-8 text-center relative z-10">
              <h3 className="text-xl font-bebas uppercase text-primary mb-3 border-b-2 border-primary pb-2">
                {card.name}
              </h3>
              {card.range && (
                <p className="text-sm mb-4 text-gray-600 bg-gray-100 py-2 px-4">
                  {card.range}
                </p>
              )}
              <p className="text-2xl font-bold bg-primary text-white py-3 px-4">
                {card.price}
              </p>
            </div>
            {/* Card accent shadow */}
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-primary/20 -z-10"></div>
          </div>
        ))}
      </div>

      {/* Enhanced Intro Desc */}
      <div className="text-start mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-12">
          {/* Point 1 */}
          <div className="flex-1 relative">
            <div className="border-l-6 border-primary pl-8 py-6 bg-gray-50">
              <h3 className="text-2xl font-bebas uppercase text-primary mb-4 bg-white px-4 py-2 inline-block border-2 border-primary">
                Professional Detailer
              </h3>
              <p className="text-lg text-gray-700 text-justify leading-relaxed">
                Detailer profesional kami memiliki sertifikasi dari lembaga
                detailing terkemuka dan menggunakan produk premium untuk
                memastikan setiap bagian kendaraan Anda berkilau dan terlindungi
                dengan sempurna.
              </p>
            </div>
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-3 h-full bg-primary"></div>
          </div>

          {/* Point 2 */}
          <div className="flex-1 relative">
            <div className="border-l-6 border-primary pl-8 py-6 bg-gray-50">
              <h3 className="text-2xl font-bebas uppercase text-primary mb-4 bg-white px-4 py-2 inline-block border-2 border-primary">
                Technology 4.0
              </h3>
              <p className="text-lg text-gray-700 text-justify leading-relaxed">
                Dengan penerapan nano coating berbasis teknologi terkini,
                kendaraan Anda akan mendapatkan kilau yang lebih dalam dan
                perlindungan jangka panjang hingga 5 tahun.
              </p>
            </div>
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-3 h-full bg-primary"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Core Price List */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {nanoCoatingCategories.map((cat) => (
          <div key={cat.name} className="relative group">
            <div className="border-4 border-primary bg-white">
              {/* Header with enhanced styling */}
              <div className="relative">
                <h3 className="bg-primary text-white px-6 py-4 text-md lg:text-xl uppercase font-bold">
                  {cat.name}
                </h3>
                {/* Header accent */}
                <div className="absolute -top-1 -right-1 w-8 h-full bg-white border-2 border-primary"></div>
              </div>

              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b-2 border-primary">
                    <th className="px-6 py-4 text-left text-md lg:text-lg uppercase text-primary">
                      Jenis Coating
                    </th>
                    <th className="px-6 py-4 text-left text-md lg:text-lg uppercase text-primary">
                      Harga
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cat.prices.map((p, index) => (
                    <tr
                      key={p.type}
                      className={`border-b transition-colors duration-200 hover:bg-gray-50 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <td className="px-6 py-4 text-xs lg:text-sm uppercase font-medium">
                        {p.type}
                      </td>
                      <td className="px-6 py-4 text-xs lg:text-sm font-bold text-primary">
                        {p.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Table shadow accent */}
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-primary/15 -z-10"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
