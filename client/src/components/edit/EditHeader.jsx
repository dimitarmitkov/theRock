import React from "react";

const EditHeader = () => {
    return (
        <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
                <button className="ql-link" aria-label="Insert Link"></button>
                <button className="ql-code-block" aria-label="Insert Code Block"></button>
                <button className="ql-background ql-picker ql-color-picker ql-expanded"
                        aria-label="Insert Color"></button>
                <button className="ql-clean" aria-label="Remove Styles"></button>
                <button className="ql-list" value="bullet" aria-label="Unordered List"></button>
                <button className="ql-list ql-active" value="ordered" aria-label="Ordered List"></button>
            </span>
    );
}

export default EditHeader;
