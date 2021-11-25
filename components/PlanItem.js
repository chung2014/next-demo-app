import React from "react";
import planStyles from "../styles/Plan.module.css";

const TickIcon = () => (
  <span style={{ color: "green", width: "16px" }}>&#10003;</span>
);

const CrossIcon = () => (
  <span style={{ color: "black", width: "16px" }}>&#65794;</span>
);

export default function PlanItem({ plan }) {
  const handleClicked = (title) => {
    alert("clicked " + title);
  };

  return (
    <div className={planStyles.card}>
      <div className={planStyles["card-header"]}>
        <span>{plan.title}</span>
      </div>
      <div className={planStyles["card-content"]}>
        <div className={planStyles["card-content__price-section"]}>
          <span className={planStyles["card-content__price-amount"]}>
            ${plan.price}
          </span>
          <span className={planStyles["card-content__per-month"]}>/month</span>
        </div>
        <div className="plan-details">
          <ul className="card-content__plan-list">
            {plan.details.map((item) => (
              <li key={item[0]} style={{ display: "flex" }}>
                {item[1] ? <TickIcon /> : <CrossIcon />}

                <span className={planStyles["card-content__item-desc"]}>
                  {item[0]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={planStyles["card-footer"]}>
        <button
          className={planStyles["card-footer__action-button"]}
          onClick={() => handleClicked(plan.title)}
        >
          {plan.buttonText}
        </button>
      </div>
    </div>
  );
}
