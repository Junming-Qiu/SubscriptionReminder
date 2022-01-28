import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  firstName!: string;

  @Field()
  @Column()
  lastName!: string;

  @Field()
  @Column({ type: 'varchar', nullable: true, unique: true, length: 254 })
  email!: string;

  @Field()
  name!: string;

  @Column()
  password!: string;
}

// import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// @Entity()
// export class Users extends BaseEntity {

//     @PrimaryGeneratedColumn()
//     id!: number;

//     @Column()
//     email!: string;

//     @Column()
//     password!: string;

//     @Column()
//     first_name!: string;

//     @Column()
//     last_name!: string;

//     @Column()
//     gender!: string;

//     @Column({type: 'datetime'})
//     reg_date!: string;

//     @Column({type: 'date'})
//     dob!: Date;

//     @Column()
//     avatar!: number;

//     @Column()
//     light_dark!: boolean;

//     @Column()
//     data_permisssion!: boolean;

// }