const Form = () => {
  return (
    <section>
        <div className="flex justify-center items-center w-full bg-[#000000]">
            <div className="flex justify-center items-center lg:w-[60%] md:w-[80%] w-[90%] py-[6rem]">
                <form action="" className="w-full">
                    <input type="text" placeholder="Name" name="name" id="name" className="border-0 border-b border-[#ffffff] w-full bg-transparent outline-none py-4 px-4 placeholder:text-[#acaaaa] text-[#ffffff] mb-6" required />
                    <input type="tel" placeholder="Phone Number" name="number" id="number" className="border-0 border-b border-[#ffffff] w-full bg-transparent outline-none py-4 px-4 placeholder:text-[#acaaaa] text-[#ffffff] mb-6" required />
                    <input type="email" placeholder="Email" name="name" id="name" className="border-0 border-b border-[#ffffff] w-full bg-transparent outline-none py-4 px-4 placeholder:text-[#acaaaa] text-[#ffffff] mb-6" required />
                    <textarea name="about" id="about" cols={20} rows={6} placeholder="Briefly tell us about your project" className="border-0 border-b border-[#ffffff] w-full bg-transparent outline-none py-4 px-4 placeholder:text-[#acaaaa] text-[#ffffff] mb-6" required></textarea>
                    <button type="submit" className="bg-[#ffffff] w-full py-4 font-bold">SEND MESSAGE</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Form