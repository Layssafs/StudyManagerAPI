const userService = require("../services/userService");
const { ok } = require("../utils/apiResponse");

async function create(req, res, next) {
  try {
    const user = await userService.create(req.body);
    return ok(res, "User created", user, 201);
  } catch (err) {
    return next(err);
  }
}

async function list(req, res, next) {
  try {
    const users = await userService.list();
    return ok(res, "Users listed", users, 200);
  } catch (err) {
    return next(err);
  }
}

async function getUserCourses(req, res, next) {
  try {
    const courses = await userService.getUserCourses(req.params.id);
    return ok(res, "User courses listed", courses, 200);
  } catch (err) {
    return next(err);
  }
}

async function getById(req, res, next) {
  try {
    const user = await userService.getById(req.params.id);
    return ok(res, "User found", user, 200);
  } catch (err) {
    return next(err);
  }
}

async function update(req, res, next) {
  try {
    const user = await userService.update(req.params.id, req.body);
    return ok(res, "User updated", user, 200);
  } catch (err) {
    return next(err);
  }
}

async function remove(req, res, next) {
  try {
    await userService.remove(req.params.id);
    return ok(res, "User deleted", null, 200);
  } catch (err) {
    return next(err);
  }
}

module.exports = { create, list, getById, getUserCourses, update, remove };