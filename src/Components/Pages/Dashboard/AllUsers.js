import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UserCard from './UserCard';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>sl</th>
                        <th>email</th>

                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {
                        users?.map((user, index) => <UserCard
                            index={index}
                            refetch={refetch}
                            isLoading={isLoading}
                            key={user._id}
                            user={user}
                        ></UserCard>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;