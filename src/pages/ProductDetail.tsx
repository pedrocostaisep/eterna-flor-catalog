import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Instagram, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProductById } from '@/data/products';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return <Navigate to="/catalogo" replace />;
  }

  // Generate Instagram DM link with pre-filled message
  const instagramMessage = encodeURIComponent(
    `Olá! 👋 Gostava de encomendar: ${product.name} (${product.price}€). Podem ajudar-me?`
  );
  const instagramDMLink = `https://ig.me/m/eternaflor.pt`;
  const instagramProfileLink = `https://instagram.com/eternaflor.pt`;

  return (
    <>
      <Helmet>
        <title>{product.name} | Eterna Flor</title>
        <meta 
          name="description" 
          content={`${product.name} - ${product.shortDescription} ${product.price}€. Encomende já!`} 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Back Button */}
        <div className="container pt-6">
          <Link 
            to="/catalogo" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao Catálogo
          </Link>
        </div>

        {/* Product Content */}
        <section className="container py-8 px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-secondary/30 border border-border/50 shadow-soft">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Category Badge */}
              <div className="inline-flex px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground uppercase tracking-wide">
                {product.category === 'bouquets' && 'Ramo'}
                {product.category === 'singles' && 'Flor Individual'}
                {product.category === 'arrangements' && 'Arranjo'}
                {product.category === 'special' && 'Especial'}
              </div>

              {/* Title & Price */}
              <div className="space-y-2">
                <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                  {product.name}
                </h1>
                <p className="font-display text-3xl font-semibold text-primary">
                  {product.price}€
                </p>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Details */}
              <div className="space-y-4 py-4 border-y border-border/50">
                {product.dimensions && (
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Dimensões:</span>
                      <span className="text-muted-foreground ml-2">{product.dimensions}</span>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">Materiais:</span>
                    <span className="text-muted-foreground ml-2">{product.materials.join(', ')}</span>
                  </div>
                </div>

                {product.colors && product.colors.length > 0 && (
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Cores disponíveis:</span>
                      <span className="text-muted-foreground ml-2">{product.colors.join(', ')}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4 pt-2">
                <Button 
                  variant="instagram" 
                  size="lg" 
                  className="w-full text-sm sm:text-base px-4" 
                  asChild
                >
                  <a
                    href={instagramDMLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Instagram className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                    <span className="text-center leading-tight">Enviar Mensagem (Comprar ou Personalizar)</span>
                  </a>
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  Ao clicar, será redirecionado para o Instagram para conversar connosco.
                </p>
              </div>

              {/* Delivery Info */}
              <div className="bg-secondary/50 rounded-xl p-4 flex items-start gap-3">
                <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-sm">
                  <p className="font-medium text-foreground">Entrega em mãos</p>
                  <p className="text-muted-foreground">Gondomar e Ermesinde</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetail;
