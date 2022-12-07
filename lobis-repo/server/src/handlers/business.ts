import { nextTick } from 'process';
import prisma from '../db';

export const getBusiness = async (req, res) => {
  const id = req.params.id;
  const business = await prisma.business.findUnique({
    where: {
      id,
      belongsToId: req.user.id,
    },
  });
  res.json({ data: business });
};

export const createBusiness = async (req, res, next) => {
  try {
    const business = await prisma.business.create({
      data: {
        name: req.body.name,
        description: req.body.description,
        images: req.body.images,
        belongsToId: req.user.id,
      },
    });

    res.json({ data: business });
  } catch (e) {
    next(e);
  }
};

export const updateBusiness = async (req, res) => {
  const updated = await prisma.business.update({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
    data: {
      name: req.body.name,
      description: req.body.description,
    },
  });

  res.json({ data: updated });
};

export const deleteBusiness = async (req, res) => {
  const deleted = await prisma.business.delete({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: deleted });
};
