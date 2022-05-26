import React from 'react';

const AddReview = () => {
    return (
        <div>
            <h1>Add Review</h1>
            <input type="text" placeholder="Title" class="input input-bordered input-success w-full max-w-xs" />
            <textarea class="textarea py-5 pr-40 mt-10 textarea-success" placeholder="Comment "></textarea>
        </div>
    );
};

export default AddReview;