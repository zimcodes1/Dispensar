function RecentSalesTableItem(){
    return(
        <div className="flex items-center justify-between w-full h-8 border-b border-gray-200 cursor-pointer pt-4 mt-1 hover:bg-gray-200 transition duration-300 bg-gray-50">
            <div className="flex text-gray-700 justify-start items-center w-[15%] h-full text-center text-xs pb-1"><p>12:00 AM</p></div>
            <div className="flex text-gray-700 justify-center items-center w-[30%] h-full text-center text-xs pb-1"><p>12/03/2025</p></div>
            <div className="flex text-gray-700 justify-center items-center w-[30%] h-full text-center text-xs pb-1">Arthmeta & Lumefantrine</div>
            <div className="flex text-gray-700 justify-end items-center w-[15%] h-full text-center text-xs pb-1">$250.00</div>
        </div>
    )
}


function RecentSales(){
    return(
        <div className="bg-white flex flex-col w-full h-[95%] px-5 border border-gray-200 rounded-2xl shadow">
            <div className="w-full h-10 border-b border-gray-300 flex justify-between items-center">
                <h1 className="text-xs text-gray-900"><i className="bx bx-timer"></i> Recent Sales Activity</h1>
                <i className="bx bx-refresh text-xl text-gray-900 p-1 cursor-pointer"></i>
            </div>
            <div className="flex flex-col justify-start items-start overflow-scroll hide-scrollbar h-[80%] rounded-b-lg">
                <div className="text-xs text-gray-900 font-semibold w-full h-10 border-b border-gray-200 sticky top-0 bg-gray-50 flex justify-between items-center py-2">
                    <p>Time</p>
                    <p>Date</p>
                    <p>Drug Name</p>
                    <p>Price</p>
                </div>
                <RecentSalesTableItem></RecentSalesTableItem>
                <RecentSalesTableItem></RecentSalesTableItem>
                <RecentSalesTableItem></RecentSalesTableItem>
                <RecentSalesTableItem></RecentSalesTableItem>
                <RecentSalesTableItem></RecentSalesTableItem>
                <RecentSalesTableItem></RecentSalesTableItem>
                <RecentSalesTableItem></RecentSalesTableItem>
                <RecentSalesTableItem></RecentSalesTableItem>
                <RecentSalesTableItem></RecentSalesTableItem>
                <RecentSalesTableItem></RecentSalesTableItem>
                <RecentSalesTableItem></RecentSalesTableItem>
                <RecentSalesTableItem></RecentSalesTableItem>
                <RecentSalesTableItem></RecentSalesTableItem>
                <RecentSalesTableItem></RecentSalesTableItem>
            </div>
        </div>
    )
}


export default RecentSales