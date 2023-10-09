import React, { useState, useEffect } from 'react'

const useCalculateReviews = (objects) => {
    const [averageRating, setAverageRating] = useState(0);
    const [numObjects, setNumObjects] = useState(0);

    useEffect(() => {
        if (objects && objects.length > 0) {
            let totalRating = 0;
            objects.forEach((obj) => {
                if (obj && obj.rating) {
                totalRating += obj.rating;
                }
            });

            const avgRating = totalRating / objects.length;
            setAverageRating(avgRating);
            setNumObjects(objects.length);
        } else {
            setAverageRating(0);
            setNumObjects(0);
        }
    }, [objects]);

    return { averageRating, numObjects };
}

export default useCalculateReviews