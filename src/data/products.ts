export interface Product {
  name: string
  origin: string
  roast: string
  notes: string[]
  description: string
  image: string
}

export const products: Product[] = [
  {
    name: 'Arabica Gayo',
    origin: 'Aceh',
    roast: 'Medium Roast',
    notes: ['Chocolate', 'Caramel', 'Citrus'],
    description:
      'Smooth and well-balanced with a hint of citrus brightness. Grown in the highlands of Aceh at 1,200-1,600m elevation.',
    image:
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80',
  },
  {
    name: 'Java Preanger',
    origin: 'West Java',
    roast: 'Medium Light',
    notes: ['Brown Sugar', 'Floral', 'Honey'],
    description:
      'Delicate and aromatic with a sweet, honey-like finish. Grown in the volcanic soils of West Java\'s Priangan highlands.',
    image:
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80',
  },
  {
    name: 'Toraja',
    origin: 'Sulawesi',
    roast: 'Dark Roast',
    notes: ['Dark Chocolate', 'Spices', 'Earthy'],
    description:
      'Full-bodied and bold with a complex spicy character. Grown in the highlands of Sulawesi at 1,500-1,800m elevation.',
    image:
      'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&q=80',
  },
]
