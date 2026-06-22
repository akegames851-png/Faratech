import { createFileRoute, notFound } from "@tanstack/react-router";
import { CategoryPage } from "@/components/faratech/category-page";
import { getCategory } from "@/lib/products";
import type { Lang } from "@/lib/i18n";

export const Route = createFileRoute("/$lang/products/$category/")({
  loader: ({ params }) => {
    const cat = getCategory(params.category);
    if (!cat) throw notFound();
    return cat;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title.en ?? "Category"} — FARATECH` },
      { name: "description", content: loaderData?.blurb.en ?? "" },
    ],
  }),
  component: CategoryView,
});

function CategoryView() {
  const { lang } = Route.useParams();
  const category = Route.useLoaderData();
  return <CategoryPage lang={lang as Lang} category={category} />;
}
