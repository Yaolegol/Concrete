// @flow
import React from "react";
import "./index.less";

export const FileInput = (props: any): React$Node => {
    return (
        <div className="file-input">
            <label className="file-input__label">
                <input className="file-input__input" multiple type="file" />
                <span>Выберите файлы</span>
            </label>
        </div>
    );
};
