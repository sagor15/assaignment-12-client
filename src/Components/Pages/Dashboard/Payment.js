import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements} from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';
// import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51L1cZhFr9j1t9xXWJif6fe3mx8GslEwMzyIidHYa6gc233UPz3sa2m8UFDlGAnPFQr7hus8VoUUCiqm9k5OpkEw200THtdfGjr');
const Payment = () => {
    const {id} = useParams();
    // const url =` https://guarded-sea-37024.herokuapp.com/booking/${id}`;
    const {data:booking,isLoading} = useQuery(['booking',id], () => fetch( ` https://guarded-sea-37024.herokuapp.com/booking/${id}` ,{
        method:'GET',
    }).then(res=>res.json()));


    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
        <div class="card m-auto w-96 bg-base-100 shadow-xl mb-5 ">
            <div class="card-body">
                <p className='text-success text-xl text-center'>{booking?.user}</p>
                <h2 class="card-title">Please Pay For{booking?.product
                }</h2>
                <p>we will see on <span className='text-secondary'>{booking?.userName} </span> </p>
                <p>Please Pay : ${booking?.prices}</p>
            </div>
        </div>
        <div>
            <div class="card m-auto w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm booking={booking} />
                    </Elements>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Payment;