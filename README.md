
# API: produtos e categorias

API REST desenvolvida utilizando:
-  Node Express
- SQL (relacionamento 1:N) 
- Docker
- Testes automatizados (jest + supertest)


## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  yarn test
```


## Documentação da API

### End-point: categories


#### Cria uma categoria

```http
  POST /categories
```


#### Retorna todas as categorias

```http
  GET /categories
```

#### Retorna uma categoria

```http
  GET /categories/:id
```

#### Altera uma categoria (parcialmente ou não)
 
```http
  PATCH /categories/:id
```

#### Deleta uma categoria

```http
  DELETE /categories/:id
```

### End-point: categories


#### Cria um produto

```http
  POST /products
```
#### Retorna todos os produtos

```http
  GET /products
```

#### Retorna um produto

```http
  GET /products/:id
```

#### Altera um produto (parcialmente ou não)
 
```http
  PATCH /products/:id
```

#### Deleta uma produto

```http
  DELETE /products/:id
```
#### Lista todos os produtos de uma categoria

```http
  GET /products/categories/:category_id
```
