const plans = [
  {
    title: "Standard",
    price: "0",
    details: [
      ["general", true],
      ["specialist", false],
      ["physiotherapy", false]
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined"
  },
  {
    title: "Premium",
    price: "388",
    details: [
      ["general", true],
      ["specialist", true],
      ["physiotherapy", true]
    ],
    buttonText: "Get started",
    buttonVariant: "contained"
  }
];

export default function handler(req, res) {
  res.status(200).json(plans);
}
