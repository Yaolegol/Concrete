const initialState = {
    test: 'test value'
}

export const layoutReducer = (state = initialState, action) => {
    const { data, type } = action

    switch (type) {
    case 'test':
        return {
            ...state,
            ...data
        }
    default:
        return { ...state }
    }
}
