export const calculateDistance = (
    lat1,
    lon1,
    lat2,
    lon2
) => {

    const R = 6371;

    const dLat = degreeToRadian(lat2 - lat1);

    const dLon = degreeToRadian(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +

        Math.cos(degreeToRadian(lat1)) *
        Math.cos(degreeToRadian(lat2)) *

        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c =
        2 *
        Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );

    return R * c;
};

const degreeToRadian = (degree) => {
    return degree * (Math.PI / 180);
};