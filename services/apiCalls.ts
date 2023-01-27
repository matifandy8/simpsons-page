

export const baseUrl = "https://simpsons-page.vercel.app/api/";

export const fetchDataCharacters = async () => {
    const res = await fetch(
        `${baseUrl}/characters`
    );
    return await res.json();
};

export const fetchDataEpisodes = async () => {
    const res = await fetch(
        `${baseUrl}/episodes`
    );
    return await res.json();
};

export const fetchDataComments = async () => {
    const res = await fetch(
        `${baseUrl}/comments`
    );
    return await res.json();

};

export const fetchDataLocations = async () => {
    const res = await fetch(
        `${baseUrl}/locations`
    );
    return await res.json();
};