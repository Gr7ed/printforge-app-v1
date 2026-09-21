import type { CategoryPageProps, Model } from '@/app/types'
import { getModels } from '@/app/lib/models'
import ModelsGrid from '@/app/components/ModelsGrid'

export default async function CategoryPage({ params }: CategoryPageProps) {
     const { slug } = await params
    const models: Model[]  = await getModels({category: slug})

    return (<ModelsGrid models={models}/>)
    
}