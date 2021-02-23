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
            card {
                _id
                question
                answer
            }
        }
    }
}
`

export const QUERY_SET = gql`
    query getSets($setName: String!) {
        sets {
            _id
            setName
        }
    }
`;

// add set, currently getting error message 'expected iterable'
export const QUERY_CARD = gql`
    query getCards {
        cards {
            _id
            question
            answer
        }
    }
`;