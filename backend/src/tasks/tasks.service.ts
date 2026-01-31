import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskEntity } from './task.entity';
@Injectable()
export class TasksService {
  private tasks = new Map<string, TaskEntity>();

  findAll(): TaskEntity[] {
    return Array.from(this.tasks.values());
  }

  findOne(id: string): TaskEntity {
    const t = this.tasks.get(id);
    if (!t) throw new NotFoundException('Task not found');
    return t;
  }

  create(dto: CreateTaskDto): TaskEntity {
    const id = Date.now().toString();
    const task: TaskEntity = { id, title: dto.title, description: dto.description, done: false };
    this.tasks.set(id, task);
    return task;
  }

  update(id: string, dto: UpdateTaskDto): TaskEntity {
    const existing = this.tasks.get(id);
    if (!existing) throw new NotFoundException('Task not found');
    existing.title = dto.title ?? existing.title;
    existing.description = dto.description ?? existing.description;
    if (typeof dto.done === 'boolean') existing.done = dto.done;
    return existing;
  }

  remove(id: string) {
    const existed = this.tasks.delete(id);
    if (!existed) throw new NotFoundException('Task not found');
    return { deleted: true };
  }
}
