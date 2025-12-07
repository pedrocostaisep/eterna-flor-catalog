import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="group bg-card rounded-xl overflow-hidden shadow-card card-hover border border-border/50">
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-secondary/30">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="font-display text-lg font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-2">
          <span className="font-display text-lg sm:text-xl font-semibold text-primary">
            {product.price}€
          </span>
          <Button variant="catalog" size="sm" className="w-full sm:w-auto" asChild>
            <Link to={`/produto/${product.id}`}>
              Ver Detalhes
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
