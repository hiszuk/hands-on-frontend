import Image from 'next/image'

export type BasicCardProps = {
  category?: string | undefined
  name?: string | undefined
  description?: string | undefined
  imageSrc?: string | undefined
}

export const BasicCard = ({
  category = 'NO CATEGORY',
  name = 'NO NAME',
  description = 'There are no descriptions...',
  imageSrc = '/noimage.png',
}: BasicCardProps) => {
  return (
    <div className="xl:w-1/4 md:w-1/3 p-4 h-88">
      <div className="bg-gray-200 p-4 rounded-lg h-full overflow-scroll">
        <Image
          className="h-40 rounded w-full object-cover object-center mb-6"
          src={imageSrc}
          alt={name}
          width={400}
          height={400}
          style={{ objectFit: 'contain', border: '1px dashed gray' }}
        />
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          {category}
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-1">
          {name}
        </h2>
        <p className="leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  )
}
