// 動的なルーティングを利用して、APIのエンドポイントを作成
const handler = (req, res) => {
  res.status(200).json({ text: "Hello" });
};

export default handler;
