import { useState } from 'react'
import Icon from './Icon'

// Product photo with a plain placeholder if the image fails to load.
export function ProductImage({ product, className = '', eager = false }) {
  const [failed, setFailed] = useState(false)
  if (!product.image || failed) {
    return (
      <div role="img" aria-label={product.name} className={`grid place-items-center bg-sand-100 text-sand-400 ${className}`}>
        <Icon name="flame" className="size-10" />
      </div>
    )
  }
  return (
    <img
      src={product.image}
      alt={product.name}
      loading={eager || product.image.startsWith('data:') ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
      className={`bg-sand-200 object-cover ${className}`}
    />
  )
}
