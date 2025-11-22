type Product = {
  id: number;
  name: string;
  stock: number;
  price: number;
};

type ProductSummary = Pick<Product, "id" | "name">;
type ProductWithoutStcok = Omit<Product, "stock">;
type OptionalProduct = Partial<Product>;
type ReadonlyProduct = Readonly<Product>;
