import { connectToDatabase } from '../../../../util/mongodb';

export default async (req, res) => {
  const {
    query: { category },
    method,
  } = req;
  const { db } = await connectToDatabase();

  if (method === 'GET') {
    try {
      const products = await db
        .collection('products')
        .find({ category })
        .toArray();
      if (!products) {
        return res.status(400).json({ success: false });
      }
      res.status(200).json({ data: products, success: true });
    } catch (e) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(400).json({ success: false });
  }
};
