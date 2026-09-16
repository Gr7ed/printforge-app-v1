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

export type ModelCardProps = {
  model: Model,
  index: number
};

export type PillProps = {
  children: React.ReactNode,
  className?: string
};