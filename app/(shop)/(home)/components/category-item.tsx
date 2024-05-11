import {
  KeyboardIcon,
  MonitorIcon,
  HeadphonesIcon,
  SquareIcon,
  SpeakerIcon,
  MouseIcon,
} from 'lucide-react'

import { Category } from '@prisma/client'

interface CategoryItemProps {
  category: Category
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const categoryIcon = {
    keyboards: <KeyboardIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    headphones: <HeadphonesIcon size={16} />,
    mousepads: <SquareIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
    mouses: <MouseIcon size={16} />,
  }

  return (
    <div className="flex items-center justify-center gap-2 rounded-lg py-3 px-5 border-2 border-muted">
      {categoryIcon[category.slug as keyof typeof categoryIcon]}
      <span className="text-xs font-bold">{category.name}</span>
    </div>
  )
}

export default CategoryItem
