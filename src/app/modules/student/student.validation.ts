import { z } from 'zod';

// zod can infer type (it's a benefit)

const UserNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, { message: 'First name cannot be more than 20 characters' })
    .refine(
      (value) => value.charAt(0).toUpperCase() + value.slice(1) === value,
      { message: 'First name must be in capitalize format' },
    ),
  middleName: z.string().trim().optional(),
  lastName: z
    .string()
    .trim()
    .refine((value) => /^[a-zA-Z]+$/.test(value), {
      message: 'Last name is not valid',
    }),
});

const GuardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

const LocalGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

const StudentValidationSchema = z.object({
  id: z.string(),
  password: z.string().max(20),
  name: UserNameValidationSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string().optional(),
  email: z.string().email({ message: 'Email is not valid' }),
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  bloodGroup: z.enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-']),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: GuardianValidationSchema,
  localGuardian: LocalGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
  isDeleted: z.boolean().default(false),
});

export default StudentValidationSchema;
