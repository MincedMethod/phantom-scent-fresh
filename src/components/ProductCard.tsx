import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultVariant = product.node.variants.edges[0]?.node;
    
    if (!defaultVariant) {
      toast.error("This product is currently unavailable");
      return;
    }

    const cartItem = {
      product,
      variantId: defaultVariant.id,
      variantTitle: defaultVariant.title,
      price: defaultVariant.price,
      quantity: 1,
      selectedOptions: defaultVariant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart", {
      description: product.node.title,
    });
  };

  const handleCardClick = () => {
    navigate(`/product/${product.node.handle}`);
  };

  const price = parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2);
  const currencyCode = product.node.priceRange.minVariantPrice.currencyCode;
  const imageUrl = product.node.images.edges[0]?.node.url;

  return (
    <Card 
      className="overflow-hidden hover:shadow-elegant transition-all duration-300 cursor-pointer group"
      onClick={handleCardClick}
    >
      <div className="aspect-square bg-secondary overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={product.node.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No image
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-xl font-bold mb-2">{product.node.title}</h3>
        {product.node.description && (
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {product.node.description}
          </p>
        )}
        <p className="text-2xl font-bold">
          {currencyCode} ${price}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full" 
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
