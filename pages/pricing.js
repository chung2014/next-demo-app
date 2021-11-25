import PlanList from "../components/PlanList";
import { server } from "../config";

const Pricing = ({ plans }) => {
  return (
    <div>
      <PlanList plans={plans} />
    </div>
  );
};

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/plans`);
//   const plans = await res.json();

//   return {
//     props: { plans }
//   };
// };

export const getServerSideProps = async (context) => {
  console.log("getServerSideProps Pricing");
  const res = await fetch(`${server}/api/plans`);

  const plans = await res.json();

  return {
    props: { plans }
  };
};

export default Pricing;
