import { useCallback, useMemo, useState } from 'react'
import { PRODUCTS } from './data'
import Header from './components/Header'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import Categories from './components/Categories'
import Products from './components/Products'
import HowItWorks from './components/HowItWorks'
import Trust from './components/Trust'
import SupplierCTA from './components/SupplierCTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ProductModal from './components/ProductModal'
import SupplierModal from './components/SupplierModal'

export default function App() {
  const [filters, setFilters] = useState({ type: 'all', city: 'all' })
  const [preview, setPreview] = useState(null)
  const [supplierOpen, setSupplierOpen] = useState(false)

  const products = useMemo(
    () =>
      PRODUCTS.filter(
        (p) => (filters.type === 'all' || p.category === filters.type) && (filters.city === 'all' || p.cities.includes(filters.city)),
      ),
    [filters],
  )

  const openSupplier = useCallback(() => setSupplierOpen(true), [])
  const closeSupplier = useCallback(() => setSupplierOpen(false), [])
  const closePreview = useCallback(() => setPreview(null), [])

  const pickCategory = (type) => {
    setFilters((f) => ({ ...f, type }))
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <a href="#products" className="sr-only top-2 right-2 focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[60] focus:rounded-full focus:bg-sand-300 focus:px-4 focus:py-2 focus:font-bold">
        تخطَّ إلى المنتجات
      </a>
      <Header onBecomeSupplier={openSupplier} />
      <main>
        <Hero onBecomeSupplier={openSupplier} />
        <SearchBar filters={filters} setFilters={setFilters} />
        <Categories activeType={filters.type} onSelect={pickCategory} />
        <Products products={products} filters={filters} setFilters={setFilters} onOpen={setPreview} />
        <HowItWorks />
        <Trust />
        <SupplierCTA onBecomeSupplier={openSupplier} />
        <FAQ />
      </main>
      <Footer onBecomeSupplier={openSupplier} onPickCategory={pickCategory} />
      <ProductModal product={preview} onClose={closePreview} />
      <SupplierModal open={supplierOpen} onClose={closeSupplier} />
    </>
  )
}
