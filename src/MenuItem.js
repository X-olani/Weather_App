import React from "react";

export const MenuItem = ({ province, gettingProvince }) => (
  <div onClick={() => gettingProvince(province)} className="Provinces">
    {province}
  </div>
);
