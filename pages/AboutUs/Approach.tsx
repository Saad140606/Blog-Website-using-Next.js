import Link from "next/link";
import img from "../../public/images/approch.jpg";

const Approch = () => {
  return (
    <div className=" flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-14">
      {/* content section  */}
      <div className="w-full md:w-2/4 space-y-4">
        <h1 className=" text-4xl font-bold ">Our <span className=" text-primary">Approch </span></h1>

        <h3 className=" font-semibold text-lg lg:text-2xl">
          Empower <span className=" text-primary">Individuals</span> to achieve sustainable mobility solutions and
          inspire a positive impact on the environment.
        </h3>
        <p className=" text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          quisquam!
        </p>
        <p className=" text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
          maiores obcaecati est natus fugiat officiis, iste ut harum consequatur
          laboriosam praesentium non velit perferendis perspiciatis temporibus,
          error nemo itaque autem.
        </p>
      </div>

      {/* img section  */}
      <div className="w-full md:w-2/5">
        <img className=" rounded-lg" src={"/images/approch.jpg"} alt="img" />
      </div>
    </div>
  );
};

export default Approch;
