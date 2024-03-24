import { gql, useQuery, useMutation } from '@apollo/client';

export const listParking = gql`
query {
    parkingData {
    name
    value
  }
}`

export const updateListData = gql`
 mutation UpdateParkingField( $name: String!, $value: Boolean! ){
    updateParkingData(name: $name , value:$value) {
        name,
        value
 }
}`