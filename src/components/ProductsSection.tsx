import { Card, CardContent } from "@/components/ui/card";
import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";

const products = [
  {
    id: 1,
    name: "Midnight Elegance",
    description: "A sophisticated blend of sandalwood and vanilla with hints of bergamot.",
    price: "$180",
    image: perfume1,
  },
  {
    id: 2,
    name: "Golden Aura",
    description: "Luxurious amber and jasmine create an enchanting evening fragrance.",
    price: "$220",
    image: perfume2,
  },
  {
    id: 3,
    name: "Crystal Dreams",
    description: "Fresh citrus and white florals for the modern, confident individual.",
    price: "$195",
    image: perfume3,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 lg:py-32 bg-luxury-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-luxury-black mb-6">
            Our Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each fragrance is meticulously crafted to tell a unique story of luxury and sophistication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-card hover:shadow-luxury transition-luxury bg-card"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-luxury"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-luxury"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-luxury-black mb-2 group-hover:text-luxury-gold transition-smooth">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-luxury-gold">
                    {product.price}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-luxury-gold/20 group-hover:bg-luxury-gold group-hover:scale-110 transition-luxury flex items-center justify-center">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;