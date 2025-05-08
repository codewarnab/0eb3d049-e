// Mock product data for the online store
const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 89.99,
    description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and comfortable over-ear design.",
    image: "https://images.unsplash.com/photo-1650954316166-c3361fefcc87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxXaXJlbGVzcyUyQmJsYWNrJTJCaGVhZHBob25lcyUyQndpdGglMkJzaWx2ZXIlMkJhY2NlbnRzfGVufDB8fHx8MTc0NTg0NjIyM3ww&ixlib=rb-4.0.3&q=80&w=1080",
    category: "electronics",
    inStock: true,
    rating: 4.5,
    featured: true
  },
  {
    id: 2,
    name: "Smartphone Stand & Wireless Charger",
    price: 34.99,
    description: "Adjustable smartphone stand with built-in fast wireless charging capability, compatible with all Qi-enabled devices.",
    image: "https://images.unsplash.com/photo-1650954316166-c3361fefcc87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxCbGFjayUyQnNtYXJ0cGhvbmUlMkJzdGFuZCUyQndpdGglMkJ3aXJlbGVzcyUyQmNoYXJnaW5nJTJCcGFkfGVufDB8fHx8MTc0NTg0NjIyNnww&ixlib=rb-4.0.3&q=80&w=1080",
    category: "electronics",
    inStock: true,
    rating: 4.2,
    featured: false
  },
  {
    id: 3,
    name: "Ultra HD Smart TV - 55\"",
    price: 499.99,
    description: "55-inch Ultra HD smart TV with HDR, built-in streaming apps, and voice control remote.",
    image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxUaGluJTJCYmV6ZWwlMkJzbWFydCUyQlRWJTJCZGlzcGxheWluZyUyQmNvbG9yZnVsJTJCc2NyZWVufGVufDB8fHx8MTc0NTg0NjIyOHww&ixlib=rb-4.0.3&q=80&w=1080",
    category: "electronics",
    inStock: false,
    rating: 4.7,
    featured: true
  },
  {
    id: 4,
    name: "Cotton Casual T-Shirt",
    price: 19.99,
    description: "Soft, breathable 100% cotton t-shirt with a comfortable fit, available in multiple colors.",
    image: "https://images.unsplash.com/photo-1559919304-00f415bab202?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxQbGFpbiUyQmJsdWUlMkJjb3R0b24lMkJ0LXNoaXJ0fGVufDB8fHx8MTc0NTg0NjIzMnww&ixlib=rb-4.0.3&q=80&w=1080",
    category: "clothing",
    inStock: true,
    rating: 4.0,
    featured: false
  },
  {
    id: 5,
    name: "Slim Fit Denim Jeans",
    price: 59.99,
    description: "Classic slim fit jeans made from premium stretch denim for maximum comfort and style.",
    image: "https://images.unsplash.com/photo-1559919304-00f415bab202?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxEYXJrJTJCYmx1ZSUyQnNsaW0lMkJmaXQlMkJqZWFuc3xlbnwwfHx8fDE3NDU4NDYyMzN8MA&ixlib=rb-4.0.3&q=80&w=1080",
    category: "clothing",
    inStock: true,
    rating: 4.3,
    featured: true
  },
  {
    id: 6,
    name: "Women's Running Shoes",
    price: 79.99,
    description: "Lightweight, breathable running shoes with responsive cushioning and supportive fit.",
    image: "https://images.unsplash.com/photo-1564352969906-8b7f46ba4b8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxUZWFsJTJCYW5kJTJCd2hpdGUlMkJ3b21lbiUyNTI3cyUyQnJ1bm5pbmclMkJzaG9lc3xlbnwwfHx8fDE3NDU4NDYyMzZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    category: "clothing",
    inStock: true,
    rating: 4.6,
    featured: false
  },
  {
    id: 7,
    name: "Bestselling Novel - 'The Silent Echo'",
    price: 14.99,
    description: "Award-winning thriller that follows a detective searching for the truth behind mysterious disappearances in a small town.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxIYXJkY292ZXIlMkJib29rJTJCd2l0aCUyQmRhcmslMkJteXN0ZXJpb3VzJTJCY292ZXJ8ZW58MHx8fHwxNzQ1ODQ2MjM4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    category: "books",
    inStock: true,
    rating: 4.8,
    featured: true
  },
  {
    id: 8,
    name: "Cookbook - 'Global Kitchen'",
    price: 29.99,
    description: "Collection of 100+ recipes from around the world, with step-by-step instructions and beautiful photography.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxDb2xvcmZ1bCUyQmNvb2tib29rJTJCd2l0aCUyQmZvb2QlMkJwaG90b2dyYXBoeSUyQm9uJTJCY292ZXJ8ZW58MHx8fHwxNzQ1ODQ2MjQyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    category: "books",
    inStock: true,
    rating: 4.4,
    featured: false
  },
  {
    id: 9,
    name: "Smart Home Security Camera",
    price: 129.99,
    description: "HD security camera with night vision, two-way audio, motion detection, and smartphone alerts.",
    image: "https://images.unsplash.com/photo-1596275281743-e7399c7bdfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxTbWFsbCUyQndoaXRlJTJCc2VjdXJpdHklMkJjYW1lcmF8ZW58MHx8fHwxNzQ1ODQ2MjQzfDA&ixlib=rb-4.0.3&q=80&w=1080",
    category: "electronics",
    inStock: true,
    rating: 4.3,
    featured: true
  },
  {
    id: 10,
    name: "Ceramic Coffee Mug Set",
    price: 24.99,
    description: "Set of 4 handcrafted ceramic coffee mugs in assorted colors, microwave and dishwasher safe.",
    image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxTZXQlMkJvZiUyQmZvdXIlMkJjb2xvcmZ1bCUyQmNlcmFtaWMlMkJtdWdzfGVufDB8fHx8MTc0NTg0NjI0NXww&ixlib=rb-4.0.3&q=80&w=1080",
    category: "home",
    inStock: true,
    rating: 4.1,
    featured: false
  },
  {
    id: 11,
    name: "Stainless Steel Cookware Set",
    price: 199.99,
    description: "10-piece professional-grade stainless steel cookware set with heat-resistant handles and tempered glass lids.",
    image: "https://images.unsplash.com/photo-1604762433261-a046add6fc11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxTaGlueSUyQnN0YWlubGVzcyUyQnN0ZWVsJTJCcG90cyUyQmFuZCUyQnBhbnMlMkJzZXR8ZW58MHx8fHwxNzQ1ODQ2MjQ4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    category: "home",
    inStock: false,
    rating: 4.9,
    featured: true
  },
  {
    id: 12,
    name: "Luxury Scented Candle",
    price: 29.99,
    description: "Hand-poured soy wax candle with notes of sandalwood and vanilla, 50+ hour burn time.",
    image: "https://images.unsplash.com/photo-1524638088-758d9961fc6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxHbGFzcyUyQmphciUyQmNhbmRsZSUyQndpdGglMkJlbGVnYW50JTJCcGFja2FnaW5nfGVufDB8fHx8MTc0NTg0NjI1MHww&ixlib=rb-4.0.3&q=80&w=1080",
    category: "home",
    inStock: true,
    rating: 4.2,
    featured: false
  },
  {
    id: 13,
    name: "Natural Face Moisturizer",
    price: 24.99,
    description: "Hydrating face cream with natural ingredients, suitable for all skin types and free from parabens.",
    image: "https://images.unsplash.com/photo-1596275281743-e7399c7bdfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxXaGl0ZSUyQmphciUyQm9mJTJCZmFjZSUyQmNyZWFtJTJCd2l0aCUyQm1pbmltYWxpc3QlMkJkZXNpZ258ZW58MHx8fHwxNzQ1ODQ2MjUzfDA&ixlib=rb-4.0.3&q=80&w=1080",
    category: "beauty",
    inStock: true,
    rating: 4.5,
    featured: true
  },
  {
    id: 14,
    name: "Premium Hair Care Set",
    price: 39.99,
    description: "Salon-quality shampoo, conditioner, and hair mask for damaged hair repair and restoration.",
    image: "https://images.unsplash.com/photo-1472747624745-ce92d32d3c24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxTZXQlMkJvZiUyQnRocmVlJTJCaGFpciUyQnByb2R1Y3QlMkJib3R0bGVzfGVufDB8fHx8MTc0NTg0NjI1NXww&ixlib=rb-4.0.3&q=80&w=1080",
    category: "beauty",
    inStock: true,
    rating: 4.4,
    featured: false
  },
  {
    id: 15,
    name: "Fitness Tracker Watch",
    price: 69.99,
    description: "Water-resistant fitness watch with heart rate monitor, sleep tracking, and smartphone notifications.",
    image: "https://images.unsplash.com/photo-1650954316166-c3361fefcc87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxCbGFjayUyQmZpdG5lc3MlMkJ0cmFja2VyJTJCd2F0Y2glMkJ3aXRoJTJCZGlnaXRhbCUyQmRpc3BsYXl8ZW58MHx8fHwxNzQ1ODQ2MjU4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    category: "electronics",
    inStock: true,
    rating: 4.1,
    featured: true
  },
  {
    id: 16,
    name: "Artificial Plant in Ceramic Pot",
    price: 19.99,
    description: "Lifelike artificial potted plant, perfect for home or office decoration with zero maintenance.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxTbWFsbCUyQnBvdHRlZCUyQnN1Y2N1bGVudCUyQnBsYW50fGVufDB8fHx8MTc0NTg0NjI2MHww&ixlib=rb-4.0.3&q=80&w=1080",
    category: "home",
    inStock: true,
    rating: 3.9,
    featured: false
  },
  {
    id: 17,
    name: "Memory Foam Pillow",
    price: 49.99,
    description: "Ergonomic memory foam pillow that contours to your neck and head for optimal support and comfort.",
    image: "https://images.unsplash.com/photo-1596275281743-e7399c7bdfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxXaGl0ZSUyQm1lbW9yeSUyQmZvYW0lMkJwaWxsb3d8ZW58MHx8fHwxNzQ1ODQ2MjYyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    category: "home",
    inStock: true,
    rating: 4.7,
    featured: false
  },
  {
    id: 18,
    name: "Portable Bluetooth Speaker",
    price: 45.99,
    description: "Compact, waterproof Bluetooth speaker with 12-hour battery life and rich, immersive sound.",
    image: "https://images.unsplash.com/photo-1559919304-00f415bab202?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxTbWFsbCUyQnJvdW5kJTJCcG9ydGFibGUlMkJzcGVha2VyJTJCaW4lMkJibHVlJTJCY29sb3J8ZW58MHx8fHwxNzQ1ODQ2MjY0fDA&ixlib=rb-4.0.3&q=80&w=1080",
    category: "electronics",
    inStock: true,
    rating: 4.3,
    featured: true
  }
];

export default products;