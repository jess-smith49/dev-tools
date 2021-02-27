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
// export const QUERY_SETSEED = gql`
//     query getSeededSets {
//         set {
//             _id
//             setName
//             cards {
//                 _id
//                 question
//                 answer
//             }
//         }
//     }
// `;

// export const QUERY_CARD = gql`
//     query getCards {
//         cards {
//             _id
//             question
//             answer
//         }
//     }
// `;

// export const QUERY_CARDSEED = gql`
//     query getSeededCards {
//         cards {
//             _id
//             question
//             answer
//         }
//     }
// `;

// export const QUERY_ALL = gql`
// {
//     set {
//         _id
//         setName
//         cards {
//             _id
//             question
//             answer
//         }
//     }
// }

// `

export const QUERY_SET = gql`
    query getOneSet($setName: String!) {
        set(setName: $setName) {
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
