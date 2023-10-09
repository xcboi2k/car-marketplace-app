import React, { useState, useEffect } from 'react'

const useCalculateProfileInfo = (listingObjects, reviewObjects) => {
    const [averageRating, setAverageRating] = useState(0);
    const [numListings, setNumListings] = useState(0);

    useEffect(() => {
        if (reviewObjects && reviewObjects.length > 0) {
            let totalRating = 0;
            reviewObjects.forEach((obj) => {
                if (obj && obj.rating) {
                totalRating += obj.rating;
                }
            });

            const avgRating = totalRating / reviewObjects.length;
            setAverageRating(avgRating);
        } else {
            setAverageRating(0);
        }

        if (listingObjects) {
            setNumListings(listingObjects.length);
        } else {
            setNumListings(0);
        }
    }, [listingObjects, reviewObjects]);

    return { averageRating, numListings };
}

export default useCalculateProfileInfo