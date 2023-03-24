export default function handler(req, res) {
  res.status(200).json({
    income: { week: "25658.00", today: "9460.00", yesterday: "9940.00" },
    expences: { week: "22658.00", today: "5660.00", yesterday: "5240.00" },
    hireStatistic: {
      today: { hired: 54, canceled: 20, pending: 26 },
      yesterday: { hired: 50, canceled: 25, pending: 25 },
    },
  });
}
