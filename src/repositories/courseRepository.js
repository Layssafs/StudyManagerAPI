const { prisma } = require("../config/prismaClient");

async function create(data) {
  return prisma.course.create({
    data: {
      title: data.title,
      description: data.description,
      workload: Number(data.workload)
    }
  });
}

async function findMany() {
  return prisma.course.findMany({
    orderBy: { id: "desc" }
  });
}

async function findById(id) {
  return prisma.course.findUnique({
    where: { id: Number(id) }
  });
}

async function update(id, data) {
  return prisma.course.update({
    where: { id: Number(id) },
    data: {
      title: data.title,
      description: data.description,
      workload: data.workload !== undefined ? Number(data.workload) : undefined
    }
  });
}

async function remove(id) {
  return prisma.course.delete({
    where: { id: Number(id) }
  });
}

module.exports = { create, findMany, findById, update, remove };