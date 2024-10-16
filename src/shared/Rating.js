import React, { useState } from "react";
import { Rating } from "primereact/rating";

export default function RatingComponent() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex justify-content-center bg-transparent">
        <Rating value={5} readOnly cancel={false} color="yellow" />
    </div>
    );
}