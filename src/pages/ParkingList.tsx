import React, { useState } from 'react';
import CenteredLayout from '@/component/centeredLayout';
import { Toggle } from '@/component/toggle';
import { Header } from '@/component/Header';
import { useQuery, useMutation } from '@apollo/client';
import { listParking, updateListData } from '@/graphqlSchema/graphql';

const Title = 'Parking'

interface IItem {
    name: string;
    value: boolean
}

const ParkingList: React.FC = () => {

    const { loading, error, data } = useQuery(listParking);
    const [updateParkingData] = useMutation(updateListData);

    const parkingData = data?.parkingData;

    const setToggle = (item: any) => {
        updateParkingData({ variables: 
            { name: item.name, value: !item.value },
            refetchQueries:[{ query : listParking }]
         });
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    return (
        <div>
            <Header title={Title} />
            {parkingData.map((item: IItem, index: number) =>
                <>
                    <CenteredLayout key={item?.name}>
                        <p>{item?.name}</p>
                        <p>{item?.value ? 'Full' : 'Free'} </p>
                        <Toggle toggle={item?.value} onClick={() => setToggle(item)} />
                    </CenteredLayout>
                </>
            )}
        </div>
    );
}

export default ParkingList;