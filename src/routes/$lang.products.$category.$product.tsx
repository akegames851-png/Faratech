import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProductPage } from "@/components/faratech/product-page";
import { getCategory, getProduct } from "@/lib/products";
import type { Lang } from "@/lib/i18n";

export const Route = createFileRoute("/$lang/products/$category/$product")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    const product = getProduct(params.category, params.product);
    if (!category || !product) throw notFound();
    return { category, product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name ?? "Product"} — FARATECH` },
      { name: "description", content: `${loaderData?.product.name} — engineered by FARATECH.` },
    ],
  }),
  component: ProductView,
});

function ProductView() {
  const { lang } = Route.useParams();
  const { category, product } = Route.useLoaderData();
  return <ProductPage lang={lang as Lang} category={category} product={product} />;
}
