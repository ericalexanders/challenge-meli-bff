# Mercado Libre Challenge (BFF)

### Node + Express + Typescript + Nodemon + Jest

Se usa Biomejs para el linter y el formateo del código.
Asi también vitest para los test unitarios.

Copmandos:

Modo desarrollo: `npm run dev`

Correr tests: `npm run test`

## Endpoints

> ### Obtener items

- **URL:** `/api/items`
- **Método:** `GET`
- **Descripción:** Obtiene una lista de items de Mercado Libre.
- **Parámetros de consulta:** Los parámetros de consulta se pasan directamente a la API de Mercado Libre.
- **Respuesta exitosa:**
  ```json
  {
    "author": {
      "name": "Eric",
      "lastname": "Saucedo"
    },
    "categories": ["category1", "category2"],
    "items": [
      {
        "id": "item_id",
        "title": "item_title",
        "price": {
          "currency": "currency_id",
          "amount": 100,
          "decimals": 0
        },
        "picture": "thumbnail_url",
        "condition": "new",
        "free_shipping": true
      }
    ]
  }

> ### Obtener detalles de un item
- **URL:** `/api/items/:id`
- **Método:** `GET`
- **Descripción:** Obtiene los detalles de un item específico de Mercado Libre.
- **Parámetros de ruta:**
  - id (string): El ID del item.
- **Respuesta exitosa:**

  ```json
  {
    "author": {
      "name": "Eric",
      "lastname": "Saucedo"
    },
    "item": {
      "id": "item_id",
      "title": "item_title",
      "price": {
        "currency": "currency_id",
        "amount": 100,
        "decimals": 0
      },
      "pictures": [
        {
          "secure_url": "picture_url"
        }
      ],
      "condition": "new",
      "free_shipping": true,
      "sold_quantity": 10,
      "description": "item_description"
    }
  }
  ```
