# Loja Virtual - Site de E-commerce

Um site simples e moderno de e-commerce construído com HTML, CSS e JavaScript puro.

## 🚀 Funcionalidades

### 📱 Interface Responsiva
- Design adaptável para desktop, tablet e mobile
- Navegação intuitiva e moderna
- Animações suaves e transições elegantes

### 🛍️ Gestão de Produtos
- Catálogo de produtos com categorias
- Sistema de busca em tempo real
- Filtros por categoria e ordenação
- Modal com detalhes do produto

### 🛒 Carrinho de Compras
- Adicionar/remover produtos
- Atualizar quantidades
- Cálculo automático do total
- Interface lateral deslizante

### 🎨 Design Moderno
- Paleta de cores profissional
- Ícones Font Awesome
- Cards com efeitos hover
- Notificações visuais

## 📁 Estrutura do Projeto

```
ecommerce-site/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
└── README.md           # Documentação
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com Flexbox e Grid
- **JavaScript ES6+**: Lógica interativa
- **Font Awesome**: Ícones vetoriais

## 🚀 Como Usar

1. **Clone ou baixe os arquivos**
2. **Abra o arquivo `index.html` no navegador**
3. **Comece a explorar a loja!**

## 📋 Funcionalidades Detalhadas

### Navegação
- Menu principal com links para seções
- Barra de busca expansível
- Contador de itens no carrinho

### Produtos
- 8 produtos de exemplo em 3 categorias
- Cards com imagem, nome, descrição e preço
- Botões para adicionar ao carrinho e ver detalhes
- Modal com informações completas do produto

### Carrinho
- Sidebar deslizante com itens do carrinho
- Controles de quantidade (+/-)
- Remover itens individualmente
- Cálculo automático do subtotal
- Botão de finalização de compra

### Filtros e Busca
- Busca por nome ou descrição
- Filtro por categoria (Eletrônicos, Roupas, Acessórios)
- Ordenação por nome e preço

## 🎯 Personalização

### Adicionar Novos Produtos
No arquivo `script.js`, adicione novos objetos ao array `products`:

```javascript
{
    id: 9,
    name: "Nome do Produto",
    description: "Descrição detalhada",
    price: 99.90,
    category: "categoria",
    image: "URL da imagem"
}
```

### Modificar Cores
No arquivo `styles.css`, altere as variáveis de cores principais:
- `#3498db` - Azul principal
- `#27ae60` - Verde (preços/sucesso)
- `#e74c3c` - Vermelho (erros/destaque)
- `#2c3e50` - Azul escuro (cabeçalho/footer)

### Adicionar Categorias
1. Adicione nova opção no `select` de categorias no `index.html`
2. Use o mesmo valor no campo `category` dos produtos

## 📱 Compatibilidade

- ✅ Chrome (versões recentes)
- ✅ Firefox (versões recentes)
- ✅ Safari (versões recentes)
- ✅ Edge (versões recentes)
- ✅ Navegadores mobile

## 🔧 Melhorias Futuras

- [ ] Sistema de autenticação de usuários
- [ ] Integração com gateway de pagamento
- [ ] Sistema de avaliação de produtos
- [ ] Página de checkout completa
- [ ] Painel administrativo
- [ ] API REST para produtos
- [ ] Sistema de favoritos
- [ ] Histórico de pedidos

## 📝 Licença

Este projeto é open source e pode ser utilizado para fins educacionais e comerciais.

## 👨‍💻 Desenvolvimento

Desenvolvido como um projeto de demonstração de e-commerce com tecnologias web fundamentais. Foco em usabilidade, design responsivo e experiência do usuário.

---

**Dica**: Para testar localmente, recomendamos usar o servidor Live Server do VS Code ou similar para melhor experiência de desenvolvimento.
