const order = (props, type) =>{

    let temp = props.funko.filter(item => item.anime === type );
    return temp;
}

export default order;