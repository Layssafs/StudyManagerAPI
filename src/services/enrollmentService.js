const enrollmentRepository = require("../repositories/enrollmentRepository");
const userRepository = require("../repositories/userRepository");
const courseRepository = require("../repositories/courseRepository");
const AppError = require("../utils/AppError");

async function create(data) {
  const user_id = Number(data.user_id);
  const course_id = Number(data.course_id);

  if (Number.isNaN(user_id) || Number.isNaN(course_id)) {
    throw new AppError("user_id and course_id are required and must be numbers", 400);
  }

  const user = await userRepository.findUserById(user_id);
  if (!user) {
    throw new AppError("User not found", 404);
  }

  const course = await courseRepository.findById(course_id);
  if (!course) {
    throw new AppError("Course not found", 404);
  }

  const existingEnrollment = await enrollmentRepository.findByUserAndCourse(user_id, course_id);
  if (existingEnrollment) {
    throw new AppError("Enrollment already exists", 409);
  }

  return enrollmentRepository.create({ user_id, course_id });
}

async function list() {
  return enrollmentRepository.findMany();
}

async function getById(id) {
  const enrollment = await enrollmentRepository.findById(Number(id));

  if (!enrollment) {
    throw new AppError("Enrollment not found", 404);
  }

  return enrollment;
}

async function remove(id) {
  const enrollment = await enrollmentRepository.findById(Number(id));

  if (!enrollment) {
    throw new AppError("Enrollment not found", 404);
  }

  return enrollmentRepository.remove(Number(id));
}

module.exports = { create, list, getById, remove };