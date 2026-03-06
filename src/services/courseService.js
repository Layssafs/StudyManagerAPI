const courseRepository = require("../repositories/courseRepository");
const AppError = require("../utils/AppError");

async function create(data) {
  if (!data.title || !data.description || data.workload === undefined) {
    throw new AppError("Title, description and workload are required", 400);
  }

  if (Number.isNaN(Number(data.workload))) {
    throw new AppError("Workload must be a number", 400);
  }

  return courseRepository.create({
    ...data,
    workload: Number(data.workload),
  });
}

async function list() {
  return courseRepository.findMany();
}

async function getById(id) {
  const course = await courseRepository.findById(Number(id));

  if (!course) {
    throw new AppError("Course not found", 404);
  }

  return course;
}

async function update(id, data) {
  const course = await courseRepository.findById(Number(id));

  if (!course) {
    throw new AppError("Course not found", 404);
  }

  if (data.workload !== undefined && Number.isNaN(Number(data.workload))) {
    throw new AppError("Workload must be a number", 400);
  }

  return courseRepository.update(Number(id), {
    ...data,
    workload: data.workload !== undefined ? Number(data.workload) : undefined,
  });
}

async function remove(id) {
  const course = await courseRepository.findById(Number(id));

  if (!course) {
    throw new AppError("Course not found", 404);
  }

  return courseRepository.remove(Number(id));
}

module.exports = { create, list, getById, update, remove };