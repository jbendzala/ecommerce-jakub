import prisma from '../db';

export const getProduct = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.params.id,
    },
  });
  res.json({ data: product });
};

export const getAllProducts = async (req, res) => {
  const business = await prisma.business.findFirst({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      products: true,
    },
  });

  const products = business.products.map((allProducts) => allProducts);
  res.json({ data: products });
};

// export const getProducts = async (req, res) => {
//   const products = await prisma.product.findMany({
//     where: {
//       belongsToId: req.user.id,
//     },
//   });
//   res.json({ data: products });
// };

export const createProduct = async (req, res) => {
  console.log('ahoj');
  const business = await prisma.business.findUnique({
    where: {
      id: req.body.businessId,
    },
  });

  if (!business) {
    return res.json({ message: 'nope' });
  }
  console.log('tu');

  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      description: req.body.description,
      images: req.body.images,
      business: { connect: { id: business.id } },
    },
  });
  res.json({ data: product });
};

export const updateProduct = async (req, res) => {
  const business = await prisma.business.findFirst({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      products: true,
    },
  });

  const products = business.products.map((allProducts) => allProducts);

  const product = products.find((product) => product.id === req.params.id);

  if (!product) {
    return res.json({ message: 'nevyslo' });
  }

  const updated = await prisma.product.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });

  res.json({ data: updated });
};

export const deleteProduct = async (req, res) => {
  const business = await prisma.business.findFirst({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      products: true,
    },
  });
  console.log('sem');

  const products = business.products.map((allProducts) => allProducts);

  const product = products.find((product) => product.id === req.params.id);
  console.log(product);
  console.log(products);
  if (!product) {
    return res.json({ message: 'not deleted' });
  }

  const deleted = await prisma.product.delete({
    where: {
      id: req.params.id,
    },
  });

  res.json({ data: deleted });
};
