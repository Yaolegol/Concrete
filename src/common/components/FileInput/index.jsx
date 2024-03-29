// @flow
import React, { useCallback, useMemo, useState } from "react";
import "./index.less";

type TProps = {
    onChange: (any) => void,
    title: any,
    value: string,
};

export const FileInput = ({
    onChange,
    title,
    value,
    ...rest
}: TProps): React$Node => {
    const [previewUrlList, setPreviewUrlList] = useState([]);

    const handleChange = useCallback(
        (e) => {
            const urls = [];
            [...e.target.files].forEach((file) => {
                const { name } = file;
                const url = URL.createObjectURL(file);
                urls.push({ name, url });
            });
            setPreviewUrlList(urls);
            onChange(e);
        },
        [onChange]
    );

    const preview = useMemo(() => {
        if (!value) {
            return null;
        }

        return previewUrlList.map(({ name, url }) => {
            return (
                <div className="file-input__preview-card" key={url}>
                    <img
                        alt={name}
                        className="file-input__preview-img"
                        src={url}
                    />
                    <div className="file-input__preview-description">
                        {name}
                    </div>
                </div>
            );
        });
    }, [previewUrlList, value]);

    return (
        <div className="file-input">
            <label className="file-input__label">
                <input
                    {...rest}
                    className="file-input__input"
                    multiple
                    onChange={handleChange}
                    type="file"
                    value={value}
                />
                <span>{title}</span>
            </label>
            <div className="file-input__preview-section">{preview}</div>
        </div>
    );
};
