import vasoRosa from "@/assets/products/vaso-rosa.jpg";
import vasoRoxo from "@/assets/products/vaso-roxo.jpg";
import vasoCastanho from "@/assets/products/vaso-castanho.jpg";
import vasoGirassol from "@/assets/products/vaso-girassol.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  shortDescription: string;
  fullDescription: string;
  materials: string[];
  dimensions?: string;
  colors?: string[];
  image: string;
  category: "bouquets" | "singles" | "arrangements" | "special";
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "vaso-rosa",
    name: "Vaso Rosa",
    price: 8,
    shortDescription: "O best-seller que alegra qualquer casa.",
    fullDescription:
      "Um ramo encantador que combina a alegria dos girassóis com a delicadeza das margaridas. Feito à mão com amor e atenção aos detalhes, este arranjo traz a energia positiva do sol para qualquer ambiente. Perfeito para presentear ou decorar a sua casa.",
    materials: ["Papel crepom italiano", "Arame florístico", "Fita de cetim"],
    dimensions: "Altura: 35-40cm",
    colors: ["Amarelo", "Branco", "Verde"],
    image: vasoRosa,
    category: "singles",
    featured: true,
  },
  {
    id: "vaso-roxo",
    name: "Vaso Roxo",
    price: 8,
    shortDescription: "Elegância clássica que dura para sempre.",
    fullDescription:
      "Um trio de rosas feitas à mão que capturam a beleza eterna desta flor tão especial. Cada pétala é cuidadosamente moldada para criar um resultado realista e encantador. Disponível em várias cores para combinar com qualquer decoração.",
    materials: ["Papel crepom alemão", "Arame revestido", "Fita floral"],
    dimensions: "Altura: 30cm",
    colors: ["Rosa claro", "Vermelho", "Branco", "Pêssego"],
    image: vasoRoxo,
    category: "singles",
    featured: true,
  },
  {
    id: "vaso-castanho",
    name: "Vaso Castanho",
    price: 8,
    shortDescription: "O aroma da Provence na sua casa.",
    fullDescription:
      "Inspirado nos campos de lavanda da Provence, este bouquet traz a serenidade e elegância desta flor mediterrânica. Perfeito para quem aprecia um estilo mais rústico e romântico. Ideal para decorar quartos e escritórios.",
    materials: ["Papel crepom", "Arame fino", "Ráfia natural"],
    dimensions: "Altura: 25-30cm",
    colors: ["Lilás", "Roxo"],
    image: vasoCastanho,
    category: "singles",
  },
  {
    id: "vaso-girassol",
    name: "Vaso Girassol",
    price: 8,
    shortDescription: "A rainha das flores em papel.",
    fullDescription:
      "A peónia é conhecida pela sua beleza exuberante e romantismo. Esta versão em papel captura toda a sua magnificência com camadas e camadas de pétalas delicadas. Uma verdadeira obra de arte para os amantes de flores.",
    materials: [
      "Papel crepom italiano premium",
      "Arame florístico",
      "Fita de seda",
    ],
    dimensions: "Diâmetro: 15cm",
    colors: ["Rosa", "Coral", "Branco"],
    image: vasoGirassol,
    category: "singles",
    featured: true,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

export const getProductsByCategory = (
  category: Product["category"]
): Product[] => {
  return products.filter((product) => product.category === category);
};
