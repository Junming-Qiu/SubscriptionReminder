import React, { ReactElement } from 'react';
import { gql, useApolloClient, useQuery } from '@apollo/client';
// import {GET_ALL_USERS} from '../queries/User';

const GET_ALL_USERS = gql`
 	query GET_ALL_USERS{
		all_users {
			firstName
		}
	}`

export const TestComp = ():ReactElement => {
	const apolloClient = useApolloClient()
	const [text, settext] = React.useState<string>("");
	const { loading, error, data } = useQuery(GET_ALL_USERS);

	
		
	const test = () => {
		apolloClient.query({
			query: GET_ALL_USERS
		})
		.then(result => console.log(result));

		console.log('IN test' )
		if(loading){
			console.log("loading")
		}else if (error) {
			console.log('Error')
		} else {
			console.log(data)
		}
	}


	return (
		<div>
			<input value={text} onChange={(e)=>{settext(e.target.value)}}></input>
			{/* <button onClick={()=>console.log("TESTTT")}>CliCK ME</button> */}
			<button onClick={()=>test()}>CliCK ME</button>
		</div>
	);
}

export default TestComp;

// To test Query in http://localhost:3001/graphql

// mutation{
// 	register(password: "passwordTest", email: "kevindsaq@test.com", lastName: "REEE", firstName: "Kevin")
// 	{
// 	  id
// 	  firstName
// 	  lastName
// 	  email
// 	  name
// 	}
//   }

// {
// 	all_users{
// 		firstName
// 		lastName
// 		name
// 	}
// }
