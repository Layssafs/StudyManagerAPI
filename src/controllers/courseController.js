const courseService = require("../services/courseService");
const { ok } = require("../utils/apiResponse");

async function create(req, res, next) {
  try {
    const course = await courseService.create(req.body);
    return ok(res, "Course created", course, 201);
  } catch (err) {
    return next(err);
  }
}

async function list(req, res, next) {
  try {
    const courses = await courseService.list();
    return ok(res, "Courses listed", courses, 200);
  } catch (err) {
    return next(err);
  }
}

async function getById(req, res, next) {
  try {
    const course = await courseService.getById(req.params.id);
    return ok(res, "Course found", course, 200);
  } catch (err) {
    return next(err);
  }
}

async function update(req, res, next) {
  try {
    const course = await courseService.update(req.params.id, req.body);
    return ok(res, "Course updated", course, 200);
  } catch (err) {
    return next(err);
  }
}

async function remove(req, res, next) {
  try {
    await courseService.remove(req.params.id);
    return ok(res, "Course deleted", null, 200);
  } catch (err) {
    return next(err);
  }
}

module.exports = { create, list, getById, update, remove };