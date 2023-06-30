import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

/*
### EHR

* id
* patient_name
* description

### Conditions

* id
* diagnostic_code
* description

### EHR Diagnosis Labels

* id
* ehr_id
* doctor_id
* condition_id
*/

@Entity()
export class EHR {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'patient_name' })
  patientName: string;

  @Column()
  description: string;
}

@Entity()
export class Conditions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'diagnostic_code' })
  diagnosticCode: string;

  @Column()
  description: string;
}

@Entity()
export class EHRDiagnosisLabels {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => EHR)
  @JoinColumn({ name: 'ehr_id' })
  ehr: EHR;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'doctor_id' })
  doctor: User;

  @ManyToOne(() => Conditions)
  @JoinColumn({ name: 'condition_id' })
  condition: Conditions;
}
