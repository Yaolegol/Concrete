// @flow
import { ADMIN_ACTION_TYPES } from "modules/Admin/constants";
import { adminCreateProduct, adminGetPurchases } from "modules/Admin/service";

const {
    CREATE_PRODUCT_FAIL,
    CREATE_PRODUCT_START,
    CREATE_PRODUCT_SUCCESS,
    GET_PURCHASES_FAIL,
    GET_PURCHASES_START,
    GET_PURCHASES_SUCCESS,
} = ADMIN_ACTION_TYPES;

const actionAdminCreateProductFail = (errors) => (dispatch) => {
    dispatch({ data: errors, type: CREATE_PRODUCT_FAIL });
};
const actionAdminCreateProductStart = () => (dispatch) => {
    dispatch({ type: CREATE_PRODUCT_START });
};
const actionAdminCreateProductSuccess = (data) => (dispatch) => {
    dispatch({ data, type: CREATE_PRODUCT_SUCCESS });
};

export const actionAdminCreateProduct = ({ productData }: any): any => async (
    dispatch,
    getState
) => {
    dispatch(actionAdminCreateProductStart());

    try {
        const { data, errors } = await adminCreateProduct({
            productData,
        });

        if (!errors) {
            dispatch(actionAdminCreateProductSuccess(data));
        } else {
            dispatch(actionAdminCreateProductFail({ errors }));
        }

        return { data, errors };
    } catch (error) {
        dispatch(actionAdminCreateProductFail({ errors: error.message }));

        return { errors: [error.message] };
    }
};

const actionGetPurchasesFail = (errors) => (dispatch) => {
    dispatch({ data: errors, type: GET_PURCHASES_FAIL });
};
const actionGetPurchasesStart = () => (dispatch) => {
    dispatch({ type: GET_PURCHASES_START });
};
const actionGetPurchasesSuccess = (data) => (dispatch) => {
    dispatch({ data, type: GET_PURCHASES_SUCCESS });
};

export const actionGetPurchases = (): any => async (dispatch, getState) => {
    dispatch(actionGetPurchasesStart());

    try {
        const { data, errors } = await adminGetPurchases();

        if (!errors) {
            dispatch(actionGetPurchasesSuccess(data.purchases));
        } else {
            dispatch(actionGetPurchasesFail({ errors }));
        }

        return { data, errors };
    } catch (error) {
        dispatch(actionGetPurchasesFail({ errors: error.message }));

        return { errors: [error.message] };
    }
};
