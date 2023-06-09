import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getClients() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17263',
      name: 'John Doe',
      address: '123 Main Street, London',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17264',
      name: 'Jane Doe',
      address: '456 Elm Street, London',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17265',
      name: 'Thomas Jefferson',
      address: 'Baker Street 12B, New York',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17266',
      name: 'Emily Smith',
      address: '789 Oak Avenue, Paris',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17267',
      name: 'Michael Johnson',
      address: '321 Pine Lane, Berlin',
    },
  ];
}

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      name: 'Canon EOS 50D',
      price: 2000,
      description: 'Cheap, ideal for beginners',
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      name: 'Canon EOS 5D',
      price: 5000,
      description: 'Professional camera, solid build',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      name: 'Canon R',
      price: 3000,
      description: 'Professional camera, new technology',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
      name: 'Nikon D50',
      price: 2000,
      description: 'Cheap, ideal for beginners',
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      name: 'Leica q2',
      price: 5000,
      description: 'Small, compact, innovative',
    },
  ];
}

function getOrders() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      clientId: 'fd105551-0f0d-4a9f-bc41-c559c8a17263',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      clientId: 'fd105551-0f0d-4a9f-bc41-c559c8a17264',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
      productId: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      clientId: 'fd105551-0f0d-4a9f-bc41-c559c8a17265',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17268',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      clientId: 'fd105551-0f0d-4a9f-bc41-c559c8a17266',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17269',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      clientId: 'fd105551-0f0d-4a9f-bc41-c559c8a17267',
    },
  ];
}

async function seed() {
  await Promise.all(
    getClients().map((client) => {
      return db.client.create({ data: client });
    }),
  );

  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );

  await Promise.all(
    getOrders().map(({ productId, clientId, ...orderData }) => {
      return db.order.create({
        data: {
          ...orderData,
          product: {
            connect: { id: productId },
          },
          client: {
            connect: { id: clientId },
          },
        },
      });
    }),
  );
}
seed();
