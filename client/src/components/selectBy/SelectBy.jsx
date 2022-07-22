import "./selectByStyle.css";

const SelectBy = ()=>{

    return(
        <div className={"sort-selector"}>
            Sort By: Best <span className={"select-by-down-arrow"}><i className="pi pi-sort-down"></i></span>
            <hr/>
        </div>
    )
}

export default SelectBy;
