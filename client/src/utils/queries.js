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

export const QUERY_SET = gql`
    query getOneSet($_id: ID!) {
        set(_id: $_id) {
            _id
            setName
            cards {
                _id
                question
                answer
            }
        }
    }
`;

export const QUERY_SEED_SET = gql`
    query getSeededSets {
        seededSets {
            _id
            setName
            cards {
                _id
                question
                answer
            }
        }
    }
`;
