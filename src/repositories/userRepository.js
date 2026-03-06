const { prisma } = require("../config/prismaClient");

async function createUser(data) {
  return prisma.user.create({ data });
}

async function findAllUsers() {
  return prisma.user.findMany({
    orderBy: { id: "asc" }
  });
}

async function findUserById(id) {
  return prisma.user.findUnique({
    where: { id: Number(id) }
  });
}

async function updateUser(id, data) {
  return prisma.user.update({
    where: { id: Number(id) },
    data
  });
}

async function findCoursesByUserId(id) {
  return prisma.user.findUnique({
    where: { id: Number(id) },
    include: {
      enrollments: {
        include: {
          course: true
        }
      }
    }
  });
}

async function findUserByEmail(email) {
  return prisma.user.findUnique({
    where: { email }
  });
}

async function deleteUser(id) {
  return prisma.user.delete({
    where: { id: Number(id) }
  });
}

module.exports = {
  createUser,
  findAllUsers,
  findUserById,
  updateUser,
  deleteUser,
  findCoursesByUserId,
  findUserByEmail
};