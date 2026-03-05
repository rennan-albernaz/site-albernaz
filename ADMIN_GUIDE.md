# Sistema de Administração - Albernaz Elétrica

## 🎯 Visão Geral
Sistema completo de gerenciamento de produtos com painel administrativo, permitindo adicionar, editar e deletar produtos sem precisar modificar o código.

## 🚀 Como Acessar

### 1. Acesso ao Painel Admin
- No canto superior direito do site (acima do vídeo principal), há um **botão verde com ícone de usuário**
- Clique no botão para acessar a página de login

### 2. Credenciais Padrão
```
Usuário: admin
Senha: albernaz2026
```

**⚠️ IMPORTANTE:** Você pode alterar essas credenciais editando o arquivo:
`src/pages/AdminLogin.tsx` nas linhas 14-15

## 📱 Funcionalidades do Painel Admin

### Dashboard Principal
- **Visão geral** com estatísticas de produtos e categorias
- **Busca** de produtos por nome ou categoria
- **Lista completa** de produtos cadastrados

### Adicionar Novo Produto
Clique em "Adicionar Novo Produto" e preencha:

1. **Nome do Produto** *(obrigatório)*
   - Nome completo do produto

2. **Categoria** *(obrigatório)*
   - Selecione uma categoria existente
   - OU clique em "+ Nova" para criar uma nova categoria

3. **Descrição** *(obrigatório)*
   - Texto descritivo do produto

4. **Campos Padrão** *(opcionais)*
   - **Dimensões**: Ex: "800 mm á 1200 mm"
   - **Peso**: Ex: "2.8 kg"
   - **Tensão**: Ex: "220/380V"
   - **Certificação**: Ex: "IEC 61439-1/2"

5. **Campos Adicionais** *(opcionais)*
   - Clique em "+ Adicionar Campo" para criar campos personalizados
   - Exemplo: Adicionar "Cor" com valor "Azul"
   - Estes campos aparecerão automaticamente no catálogo

6. **Imagens do Produto** *(opcionais)*
   - Selecione uma ou múltiplas imagens
   - A primeira imagem será a principal
   - Outras imagens ficam disponíveis para navegação no modal do produto
   - Formatos aceitos: JPG, PNG, GIF, etc.

### Editar Produto
- Clique no botão **"Editar"** ao lado de qualquer produto
- Todos os campos serão preenchidos automaticamente
- Modifique o que desejar e clique em "Atualizar Produto"

### Deletar Produto
- Clique no botão **"Deletar"** ao lado do produto
- Confirme a ação no alerta que aparecer

## 💾 Armazenamento de Dados

### Como Funciona
- Os produtos são salvos no **localStorage** do navegador
- Os dados persistem mesmo após fechar o navegador
- Cada navegador/computador tem seus próprios dados

### Migração de Produtos
Os produtos originais do arquivo `productsData.ts` são automaticamente carregados na primeira vez que você acessa o site. Depois disso, todas as modificações são salvas no localStorage.

### Backup Manual (Opcional)
Para fazer backup dos produtos:
1. Abra o Console do navegador (F12)
2. Digite: `localStorage.getItem('albernaz_products')`
3. Copie e salve o resultado
4. Para restaurar: `localStorage.setItem('albernaz_products', 'COLE_AQUI')`

### Resetar para Produtos Padrão
Se quiser voltar aos produtos originais:
1. Abra o Console (F12)
2. Digite: `localStorage.removeItem('albernaz_products')`
3. Atualize a página

## 🔒 Segurança

### Autenticação
- Login simples com credenciais
- Token salvo no localStorage
- Sessão expira ao fazer logout

### Alterar Credenciais
Edite o arquivo `src/pages/AdminLogin.tsx`:
```typescript
const ADMIN_USERNAME = 'seu_usuario';
const ADMIN_PASSWORD = 'sua_senha';
```

## 📋 Tecnologias Utilizadas
- **React + TypeScript**: Interface e lógica
- **Tailwind CSS**: Estilização
- **Framer Motion**: Animações
- **LocalStorage**: Armazenamento de dados
- **Base64**: Codificação de imagens

## 🎨 Características Especiais

### Múltiplas Imagens
- Upload de várias imagens por produto
- Navegação com setas no modal
- Indicadores de posição

### Campos Dinâmicos
- Crie campos personalizados para qualquer informação
- Aparecem automaticamente no catálogo
- Totalmente flexível

### Categorias Dinâmicas
- Adicione novas categorias sem editar código
- Filtros automáticos no catálogo
- Contagem de produtos por categoria

## 🛠️ Manutenção

### Adicionar Novos Campos Padrão
Para adicionar campos fixos ao formulário, edite:
`src/pages/AdminDashboard.tsx` na seção de campos do formulário

### Personalizar Layout
- **Admin**: `src/pages/AdminDashboard.tsx`
- **Login**: `src/pages/AdminLogin.tsx`
- **Catálogo**: `src/pages/Catalogo.tsx`
- **Card do Produto**: `src/components/ProductCard.tsx`

## 📞 Suporte
Para problemas ou dúvidas:
1. Verifique o Console do navegador (F12) para erros
2. Certifique-se de estar usando um navegador moderno
3. Limpe o cache se houver problemas de carregamento

---

**Desenvolvido para Albernaz Elétrica**  
Sistema de CMS sem necessidade de backend 🚀
