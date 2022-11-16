import dbConnect from "../../../db/dbConnect";
import User from '../../../models/User';

export default async function loginHandler(req, res) {
    await dbConnect();
    console.log("--------------------------------------------------");
    const id = req.url.split("=")[1];
    console.log(id);
    // const user = await User.find({id: 8002000});
    // console.log("kaki");
    // console.log(user);
    // console.log(user.id);
    console.log("--------------------------------------------------");
    res.status(200).json(id);
    //res.status(200).json({ name: 'Jdohn Doe' })
}
  
// const handler = async (req, res) => {

//     res.status(200).json({ name: 'John Doe' })
//     // console.log("Yanir")
//     // console.log(req);
//     // console.log(res);
//     // await dbConnect();

//     // const user = await User.find({id: req.params.id});
//     // console.log(user)
// };

// export default handler;