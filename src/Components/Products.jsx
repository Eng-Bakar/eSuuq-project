function Products (props){
    return <div>
        <div>
            <div className="border-2 mb-[30px] sm:mb-0 border-black w-[300px] h-[350px]">
                <img className="w-[90%] ml-[15px] mt-[15px] h-[200px]" src={props.image} alt="" />
                <h1 className="text-[30px] ml-[15px] font-bold mt-[10px] "> {props.prodName}</h1>
                <p className="ml-[15px] font-semibold mt-[30px] text-[25px]"> ${props.price} </p>
            </div>
            
            
        </div>
    </div>
}
export default Products