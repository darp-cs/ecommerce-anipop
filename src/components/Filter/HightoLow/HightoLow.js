const order = (props) =>{

    props.funko.sort(function(a, b){
        if(parseInt(a.price) < parseInt(b.price)){
            return 1
        }
        if(parseInt(a.price) > parseInt(b.price)){
            return -1
        }
        return 0;
    })

}

export default order;