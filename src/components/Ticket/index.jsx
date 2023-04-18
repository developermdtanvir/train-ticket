import ticket1 from '../../assets/images/ticket-1.png'
import ticket2 from '../../assets/images/ticket-2.png'
import ticket3 from '../../assets/images/ticket-3.png'
import ticket4 from '../../assets/images/ticket-4.png'

function Ticket() {

    const handleTicketClick = () => {
        console.log("Hello World")
    }

    return (
        <div className=' mt-40'>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-20">
                <div className=' relative'>
                    <img className='w-60' src={ticket1} alt="" />
                    <div className=' absolute top-5 left-5 space-y-5 '>
                        <h1 className='text-4xl font-bold'>ONE TIME
                            <br /> TICKET</h1>
                        <button onClick={handleTicketClick} className=' bg-yellow-400 font-bold py-2 px-1 rounded'>BUY NOW</button>
                        <h1 className=' text-6xl font-bold'>$100</h1>
                    </div>
                </div>
                <div className=' relative'>
                    <img className='w-60' src={ticket2} alt="" />
                    <div className=' absolute top-5 left-5 space-y-5'>
                        <h1 className='text-4xl font-bold'>ONE DAY
                            <br /> PASS</h1>
                        <button onClick={handleTicketClick} className=' bg-yellow-400 font-bold py-2 px-1 rounded'>BUY NOW</button>
                        <h1 className=' text-6xl font-bold'>$500</h1>
                    </div>
                </div>
                <div className=' relative'>
                    <img className='w-60' src={ticket3} alt="" />
                    <div className=' absolute top-5 left-5 space-y-5'>
                        <h1 className='text-4xl font-bold'>MONTHLY
                            <br /> PASS</h1>
                        <button onClick={handleTicketClick} className=' bg-yellow-400 font-bold py-2 px-1 rounded'>BUY NOW</button>
                        <h1 className=' text-6xl font-bold'>$500</h1>
                    </div>
                </div>
                <div className=' relative'>
                    <img className='w-60' src={ticket4} alt="" />
                    <div className=' absolute top-5 left-5 space-y-5'>
                        <h1 className='text-4xl font-bold'>ANNUAL
                            <br /> PASS</h1>
                        <button onClick={handleTicketClick} className=' bg-yellow-400 font-bold py-2 px-1 rounded'>BUY NOW</button>
                        <h1 className=' text-6xl font-bold'>$500</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Ticket;