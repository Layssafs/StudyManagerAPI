const userRepository = require("../repositories/userRepository");
const AppError = require("../utils/AppError");

async function create(data) {
  if (!data.name || !data.email) {
    throw new AppError("Name and email are required", 400);
  }

  const existingUser = await userRepository.findUserByEmail(data.email);

  if (existingUser) {
    throw new AppError("Email already exists", 409);
  }

  return userRepository.createUser(data);
}

async function list() {
  return userRepository.findAllUsers();
}

async function getById(id) {
  const user = await userRepository.findUserById(id);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
}

async function update(id, data) {
  const user = await userRepository.findUserById(id);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (data.email) {
    const existingUser = await userRepository.findUserByEmail(data.email);

    if (existingUser && existingUser.id !== Number(id)) {
      throw new AppError("Email already exists", 409);
    }
  }

  return userRepository.updateUser(id, data);
}

async function remove(id) {
  const user = await userRepository.findUserById(id);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return userRepository.deleteUser(id);
}

async function getUserCourses(id) {
  const user = await userRepository.findCoursesByUserId(id);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    created_at: user.created_at,
    courses: user.enrollments.map((enrollment) => enrollment.course),
  };
}

module.exports = { create, list, getById, update, remove, getUserCourses };