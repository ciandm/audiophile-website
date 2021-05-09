import { connectToDatabase } from '../../../util/mongodb';

export default async (req, res) => {
  const {
    query: { slug },
    method,
  } = req;
  const { db } = await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const product = await db.collection('products').findOne({ slug });
        if (!product) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ data: product, success: true });
      } catch (e) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
  }
};
