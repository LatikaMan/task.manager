export class CreateTaskDto {
  // Required for creating/updating a task. Use definite assignment assertion
  // because Nest/validation is applied at runtime or by class-validator if added.
  title!: string;
  description?: string;
}
