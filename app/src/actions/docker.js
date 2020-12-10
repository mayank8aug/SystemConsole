export const types = {
    GET_IMAGES: 'GET_IMAGES',
    GET_IMAGES_SUCCESS: 'GET_IMAGES_SUCCESS',
    GET_IMAGES_FAIL: 'GET_IMAGES_FAIL'
};

export function getImages() {
    return {
        type: types.GET_IMAGES
    };
}
