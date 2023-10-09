import { gql } from "../__generated__";


export const GET_EPISODES = gql(`
query episodes{
    episodes{
      results{
        id
        name
        episode
        air_date
        characters{
          name
          image
        }
        }
    }
    }
`);