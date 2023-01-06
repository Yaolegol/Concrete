// @flow
import { Button } from "common/components/Button";
import { selectProducts } from "modules/Shop/selectors";
import React, { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";

type TProps = {
    onClick: () => void,
};

export const LoadMore = ({ onClick }: TProps): React$Node => {
    const products = useSelector(selectProducts);

    return useMemo(() => {
        const isShow = products.list.length < products.count;
        return isShow ? (
            <Button onClick={onClick} theme="white">
                <FormattedMessage id="common.showMore" />
            </Button>
        ) : null;
    }, [onClick, products.count, products.list.length]);
};
