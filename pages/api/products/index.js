import { connectToDatabase } from '../../../util/mongodb';

export default async (req, res) => {
  const { method } = req;
  const { db } = await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const products = await db.collection('products').find({}).toArray();

        res.status(200).json({ data: products, success: true });
      } catch (e) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const product = await db.collection('products').insertOne(req.body);

        res.status(201).json({ data: product, success: true });
      } catch (e) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
  }
};
