import axios from "axios";

const axiosFunctions = async (url, query, action, setter) => {

    if (action === "post") {
        axios.post(url, query)
            .then(response => {
                setter(response.data);
            })
            .catch(error => console.log(error));
    } else if (action === "get") {
        axios.get(url)
            .then(response => {
                setter(response.data);
            })
            .catch(error => console.log(error));
    }

}

export default axiosFunctions;
