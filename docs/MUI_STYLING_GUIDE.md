# Керівництво по стилізації в Material-UI

## Зміст
1. [Базова конфігурація теми](#базова-конфігурація-теми)
2. [Типографія](#типографія)
3. [Відступи та розміри](#відступи-та-розміри)
4. [Компоненти](#компоненти)
5. [Кастомізація](#кастомізація)

## Базова конфігурація теми

Основна конфігурація теми знаходиться в файлі `src/theme.ts`. Тут ми налаштовуємо:

```typescript
const theme = createTheme({
  // Брейкпоінти для респонсивності
  breakpoints: {
    values: {
      xs: 0,    // Мобільні
      sm: 640,  // Планшети
      md: 900,  // Не використовується
      lg: 1200, // Десктоп
      xl: 1536  // Не використовується
    },
  },
  // Кольорова палітра
  palette: {
    primary: {
      main: '#216CFF',
      light: '#005BFF',
      dark: '#0049D9',
    },
    // ...інші кольори
  },
  // Налаштування типографії
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    // ...варіанти тексту
  }
});
```

## Типографія

### Варіанти тексту
У нас є наступні варіанти тексту:

```typescript
typography: {
  h1: {
    fontSize: '24px',
    fontWeight: 800,
    lineHeight: '32px',
  },
  h2: {
    fontSize: '22px',
    fontWeight: 800,
    lineHeight: '24px',
  },
  h3: {
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '21px',
  },
  subtitle1: {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '21px',
  },
  body1: {
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '15px',
  }
}
```

### Як використовувати

```tsx
// Базове використання
<Typography variant="h2">Заголовок</Typography>

// З додатковими стилями
<Typography 
  variant="h2" 
  sx={{ 
    fontSize: '22px',
    fontWeight: 800,
    lineHeight: '31px',
  }}
>
  Заголовок
</Typography>
```

## Відступи та розміри

Material-UI використовує систему spacing, де 1 unit = 8px.

```tsx
// Приклади відступів
sx={{ 
  mb: 6,  // margin-bottom: 48px (6 * 8px)
  mt: 2,  // margin-top: 16px (2 * 8px)
  px: 3,  // padding-left і padding-right: 24px (3 * 8px)
  py: 4,  // padding-top і padding-bottom: 32px (4 * 8px)
}}
```

### Сітка (Grid)

```tsx
<Grid container spacing={2}> // відступ між елементами 16px
  <Grid item xs={12} sm={6} md={4} lg={3}> // респонсивні колонки
    {/* контент */}
  </Grid>
</Grid>
```

## Компоненти

### Container
Обмежує ширину контенту:
```tsx
<Container>
  {/* максимальна ширина 1136px з padding: 0 16px */}
</Container>
```

### Box
Універсальний компонент для створення блоків з відступами:
```tsx
<Box sx={{ mb: 6, p: 2 }}>
  {/* контент */}
</Box>
```

## Кастомізація

### Глобальна кастомізація
Для зміни стилів компонентів глобально використовуйте `components` в темі:

```typescript
components: {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
        textTransform: 'none',
      }
    }
  }
}
```

### Локальна кастомізація
Для окремих компонентів використовуйте `styled` або `sx`:

```tsx
// Використання styled
const StyledCard = styled(Card)({
  width: '272px',
  padding: '32px',
});

// Використання sx
<Card 
  sx={{ 
    width: '272px',
    padding: '32px',
  }}
>
```

## Де змінювати розміри

1. **Глобальні зміни**:
   - Файл `src/theme.ts` - для зміни базових розмірів, кольорів, відступів
   - Секція `typography` - для зміни розмірів шрифтів
   - Секція `components` - для зміни стилів компонентів

2. **Локальні зміни**:
   - В компонентах через `sx` prop
   - Через `styled` компоненти

## Приклади використання

### Заголовки сторінок
```tsx
<Typography 
  variant="h2" 
  sx={{ 
    mb: 3,
    fontSize: '22px',
    fontWeight: 800,
    lineHeight: '31px',
  }}
>
  Заголовок
</Typography>
```

### Картки продуктів
```tsx
const StyledCard = styled(Card)({
  width: '272px',
  padding: '32px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});
```

### Відступи між секціями
```tsx
<Box sx={{ mb: 6 }}>
  <SwiperPhone />
</Box>
``` 