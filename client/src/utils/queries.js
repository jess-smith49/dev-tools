import gql from 'graphql-tag'

export const QUERY_ME = gql`
{
    me {
        _id
        username
        email
        sets {
            _id
            setName
            cards {
                _id
                question
                answer
            }
        }
    }
}
`
// export const QUERY_SET = gql`
//     query getSets($id: ID!) {
//         set(_id: $id){
//             _id
//             setName
//         }
//     }
// `;


export const QUERY_CARD = gql`
    query getCards {
        cards {
            _id
            
            question
            answer
        }
    }
`;

export const QUERY_ALL = gql`
{
    set {
        _id
        setName
        cards {
            _id
            question
            answer
        }
    }
}

`