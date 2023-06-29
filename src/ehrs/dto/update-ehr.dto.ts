import { PartialType } from '@nestjs/mapped-types';
import { CreateEHRDto } from './create-ehr.dto';

export class UpdateEHRDto extends PartialType(CreateEHRDto) {}
