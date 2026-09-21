export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export type Model = {
  id: number
  name: string
  description: string
  likes: number
  image: string
  category: string
  dateAdded: string
};

export type ModelPageProps = {
  params : Promise<{
    id: string
  }>
};
export type CategoryPageProps = {
  params : Promise<{
    slug: string
  }>
};

export type ModelCardProps = {
  model: Model,
  index: number
};

export type PillProps = {
  children: React.ReactNode,
  className?: string
};

export type ModelsGridProps = {
  models: Model[]
};

export type Category = {
      displayName: string,
      slug: string
}
export type CategoriesData = {
  categories: Category[]
};

export type GetModelsParams = {
  category?: string
};