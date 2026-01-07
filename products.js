// Base de dados de produtos com 100 itens - IMAGENS CORRIGIDAS
const products = [
    // Eletrônicos (30 produtos)
    {
        id: 1,
        name: "Smartphone Samsung Galaxy S23",
        description: "Tela Dynamic AMOLED 2X de 6.1\", 256GB, câmera de 50MP, 5G",
        price: 4299.90,
        oldPrice: 5299.90,
        category: "eletronicos",
        rating: 4.8,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=300&fit=crop&auto=format",
        badge: "Mais Vendido",
        stock: 15
    },
    {
        id: 2,
        name: "Notebook Dell XPS 13",
        description: "Intel Core i7 12ª geração, 16GB RAM, 512GB SSD, tela InfinityEdge",
        price: 7999.90,
        oldPrice: 8999.90,
        category: "eletronicos",
        rating: 4.9,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format",
        badge: "Premium",
        stock: 8
    },
    {
        id: 3,
        name: "iPad Air 5ª Geração",
        description: "Tela Liquid Retina de 10.9\", chip M1, 64GB, Wi-Fi 6",
        price: 4999.90,
        oldPrice: 5799.90,
        category: "eletronicos",
        rating: 4.7,
        reviews: 198,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop&auto=format",
        badge: "-14%",
        stock: 12
    },
    {
        id: 4,
        name: "Câmera Canon EOS R50",
        description: "24.2MP, 4K 30fps, Wi-Fi, Bluetooth, kit com lente 18-45mm",
        price: 3499.90,
        oldPrice: 4199.90,
        category: "eletronicos",
        rating: 4.7,
        reviews: 78,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b242cc32?w=400&h=300&fit=crop&auto=format",
        badge: "Lançamento",
        stock: 6
    },
    {
        id: 5,
        name: "Smart TV LG 55\" OLED",
        description: "4K, HDR10, Dolby Vision, WebOS, Bluetooth, Wi-Fi",
        price: 3299.90,
        oldPrice: 3999.90,
        category: "eletronicos",
        rating: 4.6,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1598300042247-d088b8b9c4a2?w=400&h=300&fit=crop&auto=format",
        badge: "-18%",
        stock: 10
    },
    {
        id: 6,
        name: "Fone Sony WH-1000XM5",
        description: "Cancelamento de ruído líder de mercado, 30 horas de bateria",
        price: 1899.90,
        oldPrice: 2499.90,
        category: "acessorios",
        rating: 4.9,
        reviews: 412,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&auto=format",
        badge: "Best Seller",
        stock: 25
    },
    {
        id: 7,
        name: "Apple Watch Series 9",
        description: "Tela Always-On, GPS, resistência à água, monitoramento saúde",
        price: 3299.90,
        oldPrice: 3999.90,
        category: "acessorios",
        rating: 4.8,
        reviews: 523,
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=300&fit=crop&auto=format",
        badge: "Novo",
        stock: 18
    },
    {
        id: 8,
        name: "Camiseta Premium Cotton",
        description: "Algodão orgânico 100%, corte slim fit, disponível em 6 cores",
        price: 129.90,
        oldPrice: 179.90,
        category: "roupas",
        rating: 4.6,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop&auto=format",
        badge: "Eco",
        stock: 50
    },
    {
        id: 9,
        name: "Jeans Masculino Slim",
        description: "Corte moderno, tecido stretch, modelo skinny fit",
        price: 199.90,
        oldPrice: 279.90,
        category: "roupas",
        rating: 4.5,
        reviews: 67,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop&auto=format",
        badge: "-28%",
        stock: 35
    },
    {
        id: 10,
        name: "Tênis Nike Air Max",
        description: "Tecnologia Air Max, amortecimento superior, design moderno",
        price: 599.90,
        oldPrice: 799.90,
        category: "roupas",
        rating: 4.6,
        reviews: 145,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&auto=format",
        badge: "-25%",
        stock: 40
    },
    {
        id: 11,
        name: "Mochila Urbana Premium",
        description: "Material resistente, compartimento para laptop, design moderno",
        price: 249.90,
        oldPrice: 349.90,
        category: "acessorios",
        rating: 4.4,
        reviews: 92,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&auto=format",
        badge: "-29%",
        stock: 30
    },
    {
        id: 12,
        name: "iPhone 15 Pro",
        description: "Tela Super Retina XDR de 6.1\", chip A17 Pro, câmera tripla 48MP",
        price: 8499.90,
        oldPrice: 9299.90,
        category: "eletronicos",
        rating: 4.9,
        reviews: 287,
        image: "https://images.unsplash.com/photo-1592286115803-a1c3b552ee43?w=400&h=300&fit=crop&auto=format",
        badge: "Hot",
        stock: 20
    },
    {
        id: 13,
        name: "MacBook Air M2",
        description: "13.6\", chip M2, 8GB RAM, 256GB SSD, 18 horas de bateria",
        price: 7999.90,
        oldPrice: 8999.90,
        category: "eletronicos",
        rating: 4.8,
        reviews: 203,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop&auto=format",
        badge: "-11%",
        stock: 15
    },
    {
        id: 14,
        name: "Samsung Galaxy Watch 6",
        description: "Tela Always-On, GPS, resistência à água, monitoramento avançado",
        price: 1899.90,
        oldPrice: 2299.90,
        category: "acessorios",
        rating: 4.5,
        reviews: 167,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop&auto=format",
        badge: "-17%",
        stock: 22
    },
    {
        id: 15,
        name: "PlayStation 5",
        description: "Console de última geração, 825GB SSD, 4K 120fps, DualSense",
        price: 3999.90,
        oldPrice: 4499.90,
        category: "eletronicos",
        rating: 4.9,
        reviews: 534,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop&auto=format",
        badge: "Popular",
        stock: 8
    },
    {
        id: 16,
        name: "Xbox Series X",
        description: "12 TFLOPS, 1TB SSD, 4K 120fps, Quick Resume",
        price: 3499.90,
        oldPrice: 3999.90,
        category: "eletronicos",
        rating: 4.7,
        reviews: 298,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop&auto=format",
        badge: "-13%",
        stock: 12
    },
    {
        id: 17,
        name: "Nintendo Switch OLED",
        description: "Tela OLED de 7\", 64GB, modo tabletop e portátil",
        price: 2499.90,
        oldPrice: 2799.90,
        category: "eletronicos",
        rating: 4.6,
        reviews: 412,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop&auto=format",
        badge: "-11%",
        stock: 25
    },
    {
        id: 18,
        name: "GoPro Hero 12",
        description: "5.3K 60fps, HyperSmooth 6.0, resistência à água 10m",
        price: 2999.90,
        oldPrice: 3499.90,
        category: "eletronicos",
        rating: 4.5,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1591337646795-9c3b1e9da5c3?w=400&h=300&fit=crop&auto=format",
        badge: "Ação",
        stock: 18
    },
    {
        id: 19,
        name: "Drone DJI Mini 3",
        description: "4K HDR, 34min de voo, peso 249g, controle por app",
        price: 3299.90,
        oldPrice: 3799.90,
        category: "eletronicos",
        rating: 4.4,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1473968512647-3e447633d9c3?w=400&h=300&fit=crop&auto=format",
        badge: "-13%",
        stock: 10
    },
    {
        id: 20,
        name: "Kindle Paperwhite",
        description: "Tela 6.8\" 300ppi, resistência à água, 8GB, luz ajustável",
        price: 599.90,
        oldPrice: 699.90,
        category: "eletronicos",
        rating: 4.3,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop&auto=format",
        badge: "Leitura",
        stock: 40
    },
    {
        id: 21,
        name: "JBL Flip 6",
        description: "Bluetooth 5.1, 12 horas de bateria, resistência à água IP67",
        price: 799.90,
        oldPrice: 899.90,
        category: "acessorios",
        rating: 4.5,
        reviews: 178,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop&auto=format",
        badge: "Som",
        stock: 35
    },
    {
        id: 22,
        name: "Mouse Logitech MX Master 3",
        description: "Sem fio, 70 dias de bateria, sensor 4000 DPI",
        price: 499.90,
        oldPrice: 599.90,
        category: "acessorios",
        rating: 4.7,
        reviews: 267,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop&auto=format",
        badge: "Produtividade",
        stock: 28
    },
    {
        id: 23,
        name: "Teclado Mecânico Razer",
        description: "Switches verdes, RGB Chroma, teclado gaming",
        price: 699.90,
        oldPrice: 799.90,
        category: "acessorios",
        rating: 4.4,
        reviews: 145,
        image: "https://images.unsplash.com/photo-1587829741300-d2f943795036?w=400&h=300&fit=crop&auto=format",
        badge: "Gaming",
        stock: 20
    },
    {
        id: 24,
        name: "Monitor LG 27\" 4K",
        description: "IPS, 4K UHD, 60Hz, HDR10, USB-C",
        price: 1899.90,
        oldPrice: 2299.90,
        category: "eletronicos",
        rating: 4.3,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1527443224154-c4a59478c5c1?w=400&h=300&fit=crop&auto=format",
        badge: "-17%",
        stock: 15
    },
    {
        id: 25,
        name: "Webcam Logitech C920",
        description: "1080p 30fps, microfone stereo, correção de luz",
        price: 399.90,
        oldPrice: 499.90,
        category: "acessorios",
        rating: 4.2,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&auto=format",
        badge: "Home Office",
        stock: 45
    },
    {
        id: 26,
        name: "HD Externo 1TB",
        description: "USB 3.0, portátil, compatível Windows/Mac",
        price: 299.90,
        oldPrice: 399.90,
        category: "acessorios",
        rating: 4.1,
        reviews: 123,
        image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=400&h=300&fit=crop&auto=format",
        badge: "Armazenamento",
        stock: 60
    },
    {
        id: 27,
        name: "Carregador Portátil 20000mAh",
        description: "Fast charging, 2 portas USB, LED indicador",
        price: 149.90,
        oldPrice: 199.90,
        category: "acessorios",
        rating: 4.3,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1596468138965-1e9d9d2a7d5b?w=400&h=300&fit=crop&auto=format",
        badge: "-25%",
        stock: 80
    },
    {
        id: 28,
        name: "Cadeira Gamer",
        description: "Ergonômica, ajustável, material premium",
        price: 1299.90,
        oldPrice: 1599.90,
        category: "acessorios",
        rating: 4.5,
        reviews: 267,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&auto=format",
        badge: "Conforto",
        stock: 12
    },
    {
        id: 29,
        name: "Microfone Blue Yeti",
        description: "USB, padrão de estúdio, 4 padrões de captura",
        price: 899.90,
        oldPrice: 1099.90,
        category: "acessorios",
        rating: 4.6,
        reviews: 198,
        image: "https://images.unsplash.com/photo-1590602847861-56e34806cd46?w=400&h=300&fit=crop&auto=format",
        badge: "Áudio",
        stock: 18
    },
    {
        id: 30,
        name: "Tablet Samsung Galaxy Tab S9",
        description: "11\" AMOLED, Snapdragon 8 Gen 2, 128GB, S Pen",
        price: 3999.90,
        oldPrice: 4599.90,
        category: "eletronicos",
        rating: 4.4,
        reviews: 145,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop&auto=format",
        badge: "-13%",
        stock: 14
    }
];

// Gerar produtos restantes automaticamente
const categories = ['eletronicos', 'roupas', 'acessorios'];
const names = [
    'Smartphone Xiaomi Redmi', 'Notebook Lenovo IdeaPad', 'Fone JBL Tune', 'Camiseta Básica',
    'Tênis Adidas Ultraboost', 'Mochila Escolar', 'Tablet Multilaser', 'Smartwatch Garmin',
    'Câmera Sony Alpha', 'Caixa de Som Bluetooth', 'Calça Jeans Feminina', 'Blusa Feminina',
    'Mouse Gamer Redragon', 'Teclado Bluetooth', 'Monitor Samsung 24', 'HD SSD 500GB',
    'Carregador Turbo', 'Capa Smartphone', 'Película de Vidro', 'Suporte para Notebook',
    'Fone de Ouvido Sem Fio', 'Pulseira Fitness', 'Relógio Digital', 'Luminária LED',
    'Bolsa Feminina', 'Cinto Masculino', 'Óculos de Sol', 'Carteira de Couro',
    'Chaveiro Personalizado', 'Porta Copos Automotivo', 'Almofada Decorativa', 'Quadro Decorativo',
    'Vaso de Planta', 'Jogo de Copos', 'Conjunto de Panelas', 'Faqueiro de Cozinha',
    'Tabuleiro de Madeira', 'Relógio de Parede', 'Espelho Decorativo', 'Cesta Organizadora',
    'Lixeira de Cozinha', 'Espanador', 'Vassoura e Pá', 'Balde de Limpeza',
    'Luvas de Limpeza', 'Pano de Microfibra', 'Detergente Líquido', 'Sabão em Pó',
    'Amaciante de Roupas', 'Água Sanitária', 'Desinfetante', 'Limpa Vidros',
    'Cera para Pisos', 'Saponáceo', 'Álcool em Gel', 'Máscara de Proteção',
    'Luvas Descartáveis', 'Papel Higiênico', 'Sabonete Líquido', 'Shampoo',
    'Condicionador', 'Creme Dental', 'Escova de Dentes', 'Fio Dental',
    'Antitranspirante', 'Desodorante', 'Perfume Importado', 'Maquiagem Completa',
    'Base Liquida', 'Máscara de Cílios', 'Batom Vermelho', 'Sombra de Olhos',
    'Delineador', 'Rimel', 'Blush', 'Iluminador Facial',
    'Protetor Solar', 'Hidratante Facial', 'Sabonete Facial', 'Tônico Facial'
];

const descriptions = [
    'Alta qualidade, design moderno, durabilidade garantida',
    'Tecnologia avançada, performance superior, excelente custo-benefício',
    'Material premium, acabamento impecável, estilo único',
    'Inovação e design, conforto excepcional, versatilidade',
    'Qualidade profissional, resistência comprovada, design elegante'
];

const badges = ['Novo', 'Promoção', 'Premium', 'Best Seller', 'Eco', 'Popular', 'Lançamento'];

// Gerar produtos de 31 a 100
for (let i = 31; i <= 100; i++) {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
    const randomBadge = badges[Math.floor(Math.random() * badges.length)];
    const randomPrice = Math.floor(Math.random() * 2000) + 50;
    const randomOldPrice = randomPrice + Math.floor(Math.random() * 500) + 100;
    const randomRating = (Math.random() * 2 + 3).toFixed(1);
    const randomReviews = Math.floor(Math.random() * 500) + 10;
    const randomStock = Math.floor(Math.random() * 50) + 5;
    
    products.push({
        id: i,
        name: randomName + ' ' + i,
        description: randomDescription,
        price: randomPrice + 0.90,
        oldPrice: randomOldPrice + 0.90,
        category: randomCategory,
        rating: parseFloat(randomRating),
        reviews: randomReviews,
        image: `https://images.unsplash.com/photo-1511707171634-2f8e7293b3aa?w=400&h=300&fit=crop&auto=format&random=${i}`,
        badge: randomBadge,
        stock: randomStock
    });
}
