import axios from "axios";

/* GET PASSES DATA */

async function sendID(id) {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/?uid=${id}`);
    return res.data;
}

export default { sendID };