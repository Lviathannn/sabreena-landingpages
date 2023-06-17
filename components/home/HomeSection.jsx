export default function HomeSection() {
    return (
        <section
            className="flex flex-col lg:flex-row-reverse lg:px-20 px-10 md:px-16 py-16 gap-10 justify-between">
            <div
                className="xl:w-[600px] lg:w-[400px] lg:h-[500px] w-80 h-80 bg-hero xl:h-[700px] bg-cover rounded-t-md rounded-bl-[30%] self-center sm:self-end lg:self-end">
            </div>
            <article
                className=" flex flex-col gap-5 justify-center before:content-line before:absolute relative before:-z-50">
                <h1 className="text-[42px] lg:text-[64px] font-bold text-primary leading-[1.1]">Sabreena <br/><span
                    className="text-secondary">Construction</span>
                </h1>
                <p className="text-[16px] text-tertiary">Selamat Datang di Sabreena Construction! <br/>Bersama
                    Kami,Bangunan Impian Anda Menjadi Nyata</p>
                <div className="flex gap-5">
                    <button
                        className="px-8 py-2 bg-primary text-white rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm text-sm shadow-primary shadow-2xl hover:px-12  transition-all">Explore
                    </button>
                    <button
                        className="px-8 py-2 border-2 border-primary text-primary rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm text-sm hover:px-12 hover:bg-primary hover:shadow-2xl hover:shadow-primary transition-all hover:text-white hover:border-transparent">Contact
                    </button>
                </div>
                <div className="flex gap-8 mt-10 justify-center sm:justify-start lg:justify-center">
                    <div className="flex flex-col">
                        <p className="text-[25px] font-medium text-secondary before:content-orange before:absolute
                        before:-z-20 before:-left-4 before:-top-2 relative">500+</p>
                        <p className="text-[15px] text-tertiary">Project Selesai</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[25px] font-medium text-secondary before:content-blue before:absolute
                        before:-z-20 before:-left-4 before:-top-2 relative">200+</p>
                        <p className="text-[15px] text-tertiary">Bangunan Selesai</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[25px] font-medium text-secondary before:content-green before:absolute
                        before:-z-20 before:-left-4 before:-top-2 relative">50+</p>
                        <p className="text-[15px] text-tertiary">Total Pegawai</p>
                    </div>
                </div>
            </article>
        </section>
    )
}