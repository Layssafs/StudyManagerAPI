const { prisma } = require("../config/prismaClient");

async function create(data) {
  return prisma.enrollment.create({
    data: {
      user_id: Number(data.user_id),
      course_id: Number(data.course_id)
    },
    include: {
      user: true,
      course: true
    }
  });
}

async function findMany() {
  return prisma.enrollment.findMany({
    include: {
      user: true,
      course: true
    },
    orderBy: {
      id: "desc"
    }
  });
}

async function findById(id) {
  return prisma.enrollment.findUnique({
    where: {
      id: Number(id)
    },
    include: {
      user: true,
      course: true
    }
  });
}

async function findByUserAndCourse(user_id, course_id) {
  return prisma.enrollment.findFirst({
    where: {
      user_id: Number(user_id),
      course_id: Number(course_id)
    }
  });
}

async function remove(id) {
  return prisma.enrollment.delete({
    where: {
      id: Number(id)
    }
  });
}

module.exports = { create, findMany, findById, findByUserAndCourse, remove };