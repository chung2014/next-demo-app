import React from "react";
import planStyles from "../styles/Plan.module.css";
import PlanItem from "./PlanItem";

export const PlanList = ({ plans }) => {
  return (
    <div className={planStyles.grid}>
      {plans.map((p) => (
        <PlanItem key={p.title} plan={p} />
      ))}
    </div>
  );
};

export default PlanList;
