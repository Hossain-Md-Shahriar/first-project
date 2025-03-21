import express from 'express';
import { StudentControllers } from './student.controller';
import validateRequest from '../../middlewares/validateRequest';
import { StudentValidations } from './student.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', StudentControllers.getAllStudents);
router.get(
  '/:id',
  auth('faculty', 'admin'),
  StudentControllers.getSingleStudent,
);
router.patch(
  '/:id',
  validateRequest(StudentValidations.updateStudentValidationSchema),
  StudentControllers.updateStudent,
);
router.delete('/:id', StudentControllers.deleteStudent);

export const StudentRoutes = router;
