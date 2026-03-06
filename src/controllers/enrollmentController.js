const enrollmentService = require("../services/enrollmentService");
const { ok } = require("../utils/apiResponse");

async function create(req, res, next) {
  try {
    const enrollment = await enrollmentService.create(req.body);
    return ok(res, "Enrollment created", enrollment, 201);
  } catch (err) {
    return next(err);
  }
}

async function list(req, res, next) {
  try {
    const enrollments = await enrollmentService.list();
    return ok(res, "Enrollments listed", enrollments, 200);
  } catch (err) {
    return next(err);
  }
}

async function getById(req, res, next) {
  try {
    const enrollment = await enrollmentService.getById(req.params.id);
    return ok(res, "Enrollment found", enrollment, 200);
  } catch (err) {
    return next(err);
  }
}

async function remove(req, res, next) {
  try {
    await enrollmentService.remove(req.params.id);
    return ok(res, "Enrollment deleted", null, 200);
  } catch (err) {
    return next(err);
  }
}

module.exports = { create, list, getById, remove };