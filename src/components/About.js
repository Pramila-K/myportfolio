import AboutImg from '../assets/img1.jpeg';
export default function About()
{
    return <section id='about' className="flex flex-col md:flex-row bg-secondary px-5">
        <div className="py-5 md:w-1/2">
        <img src={AboutImg} />
        </div>
        <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
            <h1 className="text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold">About Me</h1>
            <p className="pb-5"> Hi, My name is Pramila
            </p>
            <p className="pb-5"> I am proficient in Frontend skills like HTML, CSS, JavaScript, ReactJS, MySQL.</p>
            <p className="pb-5"></p>
        </div>
        </div>
    </section>
}