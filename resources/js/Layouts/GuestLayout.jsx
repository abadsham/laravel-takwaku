import React from "react";

export default function Guest({ children }) {
    return (
        <div className="h-screen flex">
            {children}
        </div>
    );
}
