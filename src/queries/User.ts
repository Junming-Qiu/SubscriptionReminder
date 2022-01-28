import gql from 'graphql-tag'

export const GET_ALL_USERS = gql`
    query GET_ALL_USERS{
        User {
            id
            name
            username
            password
        }
    }
`
