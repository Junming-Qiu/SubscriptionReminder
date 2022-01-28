import {
    Resolver,
    Query,
    Mutation,
    Arg,
    FieldResolver,
    Root
} from "type-graphql";
import * as bcrypt from "bcryptjs";

import { User } from "../../entity/User";

@Resolver(User)
export class RegisterResolver {
    @Query(() => String!)
    async hello() {
      return "Hello World!";
    }


    @Query(() => [User!]!)
    async all_users() {
      console.log('HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE')
      return User.find()
      .then(users => {
        return users
      })
      .catch(err => {
        throw err;
      });
    }


    // @Query(() => [User!]!)
    // async all_users(
    //   @Arg("firstName") firstName: string,
    //   @Arg("lastName") lastName: string,
    //   @Arg("name") name: string,
    //   @Arg("email") email: string,
    //   @Arg("password") password: string
    // ) {
    //   console.log({
    //     firstName,lastName,name,email,password
    //   })
    //   return User.find({lastName: "Wu"})
    //   .then(users => {
    //     return users
    //   })
    //   .catch(err => {
    //     throw err;
    //   });
    // }
    
    @FieldResolver()
    async name(@Root() parent: User) {
      return `${parent.firstName} ${parent.lastName}`;
    }
  
    @Mutation(() => User)
    async register(
      @Arg("firstName") firstName: string,
      @Arg("lastName") lastName: string,
      @Arg("email") email: string,
      @Arg("password") password: string
    ): Promise<User> {
      const hashedPassword = await bcrypt.hash(password, 12);
      console.log("In mutation: ", {
        firstName,
        lastName,
        email,
        password: hashedPassword
      })
  
      const user = await User.create({
        firstName,
        lastName,
        name: firstName+lastName,
        email,
        password: hashedPassword

      }).save();

      return user;
    }

    
}