/** @format */

export const solvTypes = [
  {
    title: "Rewards Immediately",
    text: "SPs realize the future unlocking rewards immediately (no need to wait 180 days)",
    key: "rewards",
  },
  {
    title: "Aonymity of Transaction",
    text: "Anti-censorship of SPs ownership transfer via the anonymity of transaction",
    key: "aonymity",
  },
  {
    title: "Special IDs",
    text: "SPs realize the monetary value of special IDs or the IDs with historical reputation",
    key: "special",
  },
  {
    title: "Better Utilization",
    text: "Better utilization of SP resources lightens the network burden caused by the over-use of ID numbers, effectively recycling the already existing ones; also provides the marketplace when later the network could charge a fee for node creation to increase revenue (an FIP required)",
    key: "better",
  },
];

export const worksList: any = [
  {
    key: "step1",
    text: (
      <div>
        <div>Sellers change the Owner Address to the SPex smart contract</div>
        <div>Set prices and place sell orders</div>
      </div>
    ),
  },
  {
    key: "step2",
    text: (
      <div>
        Buyers request to purchase and send funds to SPex smart contract
      </div>
    ),
  },
  {
    key: "step3",
    text: <div>Send payment to Seller after minus the transaction fees</div>,
  },
  {
    key: "step4",
    text: <div>SPex smart contract transfers the ownership to buyer</div>,
  },
];

export const linkList = [
  {
    key: "twitter",
    link: "",
  },
  {
    key: "m",
    link: "",
  },
  {
    key: "githup",
    link: "",
  },
];

export const px2vw = (px: number): string =>
  `${(window.screen.width / 1440) * px}vw`;
