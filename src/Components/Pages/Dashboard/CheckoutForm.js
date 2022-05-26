import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({booking}) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [trangstionId, setTrangstionId] = useState('');
    console.log(booking);
    const { prices, userName, user } = booking;


    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        const url = "https://guarded-sea-37024.herokuapp.com/create"
        fetch(url , {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ prices })
        })
            .then((res) => {
                // console.log(res);
             return res.json()
            })
            .then((data) => {
                // console.log(data);
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            }

            );
    }, [clientSecret,user]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        setCardError(error?.message || "");
        setSuccess('');

        const { paymentIntent, error1 } = await stripe.confirmCardPayment(
            // console.log(clientSecret),
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: user
                    },
                },
            },
        );
        if (error1) {
            setCardError(error1?.message);


        }
        else {
            setCardError('');
            //   console.log(paymentIntent);
            setTrangstionId(paymentIntent.id);
            setSuccess("Congrats! your Payment is Complete");
        }

    }

    return (
        <div>
            <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sx btn-secondary mt-5' type="submit">
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500 '>{cardError}</p>
            }
            {
                success && <div className='text-green-500 '>
                    <p>{success}</p>
                    <p>TransectionId :<span className='text-orange'>{trangstionId}</span> </p>
                </div>
            }
        </>
        </div>
    );
};

export default CheckoutForm;