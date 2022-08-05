import {useNavigate} from "react-router-dom";
import "./singleThreadCardStyle.css";
import {valuesLinks} from "../../enumerators/links";
import {useEffect, useState} from "react";
import CreateThread from "./CreateThread";
import SingleThreadElement from "./SingleThreadElement";
import axiosFunctions from "../../functions/axiosFunctions";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const SingleThreadForList = () => {
    const navigate = useNavigate();

    const [threadData, setThreadData] = useState([]);

    const getData = async () => {

        const axiosUrl = SERVER_URL + valuesLinks.Threads;
        axiosFunctions(axiosUrl, null, "get", setThreadData);
    }

    useEffect(() => {
        getData();
    }, []);

    const clickHandler = (e, id) => {
        const data = e.target.innerText ? e.target.innerText : e.target.className;

        if (data.toLowerCase().indexOf("comments") !== -1) {
            navigate(valuesLinks.EditTask + ":" + id);
        }
    }

    const element = threadData.map((thread, i) => {
        return (
            <SingleThreadElement thread = {thread} key = {i} />
        )
    })

    return (
        <>
            <CreateThread/>
            {element}
        </>
    )
}

export default SingleThreadForList;
