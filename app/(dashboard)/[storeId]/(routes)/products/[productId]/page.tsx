import prismadb from "@/lib/prismadb";
import { ProductForm } from "./components/product-form";

const ProductPage = async ({
  params,
}: {
  params: {
    storeId: string;
    productId: string;
  };
}) => {
  const product = await prismadb.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      // since we need to fetch the images for the product we have to include
      images: true,
    },
  });

  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const colours = await prismadb.colour.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm
          initialData={product}
          categories={categories}
          sizes={sizes}
          colours={colours}
        />
      </div>
    </div>
  );
};

export default ProductPage;
