// @flow
import { Button } from "common/components/Button";
import { selectProducts } from "modules/Shop/selectors";
import React, { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./index.less";

type TProps = {
    onClick: () => void,
    products: any,
};

const LoadMore = ({ onClick, products }: TProps): React$Node => {
    return useMemo(() => {
        const isShow = products.list.length < products.count;
        return isShow ? (
            <Button onClick={onClick} theme="white">
                <FormattedMessage id="common.showMore" />
            </Button>
        ) : null;
    }, [onClick, products.count, products.list.length]);
};

export default connect<TProps, void, _, _, _, _>((state) => ({
    products: selectProducts(state),
}))(LoadMore);
