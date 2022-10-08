import pp1 from '../../assets/1.png'
import pp2 from '../../assets/2.png'
import pp3 from '../../assets/3.png'
import pp4 from '../../assets/4.png'
import pp5 from '../../assets/5.png'
import pp6 from '../../assets/6.png'




export const ActiveChats = () => {
    return (
        <>
            <section>
                <div className='space-y-4   '>
                    <div className="flex justify-center  ">
                        <div className="relative w-full max-w-xl mr-6 focus-within:text-orange-600 text-blue-700">
                            <div className="absolute inset-y-0 flex items-center pl-2">
                                <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input className="w-full pl-8 pr-2 py-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md  focus:placeholder-gray-500 focus:bg-white focus:border-orange-300 focus:outline-none focus:shadow-outline-purple form-input" type="text" placeholder="Search for something here..." aria-label="Search" />
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className='w-1/6 mx-auto'>
                            <img src={pp1} alt="" className='w-6  2xl:w-full mx-auto' />
                            <p className='text-xs text-center'>Lilmow</p>
                        </div>
                        <div className='w-1/6 mx-auto'>
                            <img src={pp2} alt="" className='w-6 2xl:w-full mx-auto' />
                            <p className='text-xs text-center'>Ayo</p>
                        </div>
                        <div className='w-1/6 mx-auto'>
                            <img src={pp3} alt="" className='w-6 2xl:w-full mx-auto' />
                            <p className='text-xs text-center'>Emmma</p>
                        </div>
                        <div className='w-1/6'>
                            <img src={pp4} alt="" className='w-6 2xl:w-full mx-auto' />
                            <p className='text-xs text-center'>Ana</p>
                        </div>
                        <div className='w-1/6'>
                            <img src={pp5} alt="" className='w-6 2xl:w-full mx-auto' />
                            <p className='text-xs text-center'>Grace</p>
                        </div>
                        <div className='w-1/6'>
                            <img src={pp6} alt="" className='w-6 2xl:w-full mx-auto' />
                            <p className='text-xs text-center'>Moses</p>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}