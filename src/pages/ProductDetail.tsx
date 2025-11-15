import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/shopify";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ProductDetail() {
  const { handle } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore(state => state.addItem);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(50),
  });

  const product = products?.find(p => p.node.handle === handle);
  const selectedVariant = product?.node.variants.edges[selectedVariantIndex]?.node;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Button onClick={() => navigate('/')}>Return Home</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedVariant) return;

    const cartItem = {
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart", {
      description: product.node.title,
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Store
          </Button>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="aspect-square bg-secondary rounded-lg overflow-hidden">
                {product.node.images.edges[0]?.node.url ? (
                  <img
                    src={product.node.images.edges[0].node.url}
                    alt={product.node.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    No image
                  </div>
                )}
              </div>
              {product.node.images.edges.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.node.images.edges.slice(1, 5).map((image, index) => (
                    <div key={index} className="aspect-square bg-secondary rounded-lg overflow-hidden">
                      <img
                        src={image.node.url}
                        alt={`${product.node.title} ${index + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="font-serif text-4xl font-bold mb-4">{product.node.title}</h1>
                <p className="text-3xl font-bold">
                  {selectedVariant?.price.currencyCode} ${parseFloat(selectedVariant?.price.amount || '0').toFixed(2)}
                </p>
              </div>

              {product.node.variants.edges.length > 1 && (
                <div>
                  <h3 className="font-semibold mb-2">Select Variant</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.node.variants.edges.map((variant, index) => (
                      <Button
                        key={variant.node.id}
                        variant={selectedVariantIndex === index ? "default" : "outline"}
                        onClick={() => setSelectedVariantIndex(index)}
                      >
                        {variant.node.title}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <Button 
                size="lg" 
                className="w-full md:w-auto"
                onClick={handleAddToCart}
                disabled={!selectedVariant?.availableForSale}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                {selectedVariant?.availableForSale ? 'Add to Cart' : 'Out of Stock'}
              </Button>

              {product.node.description && (
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap">
                    {product.node.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
