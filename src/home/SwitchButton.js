import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

export default function SwitchButton({ label }) {
    return (
        <div className="container">
            {label}{" "}
            <div className="toggle-switch">
                <input
                    type="checkbox"
                    className="checkbox"
                    name={label}
                    id={label}
                />
                <label className="label" htmlFor={label}>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </div>
    );
}