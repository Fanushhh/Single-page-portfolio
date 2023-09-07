import { websiteData } from "../websiteData";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  fullName: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const chatId = 5601580152;

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const my_text = `New message from: ${data.fullName} %0AEmail: ${data.email} %0AMessage: ${data.message}`;
    const url = `https://api.telegram.org/bot${
      import.meta.env.VITE_TELEGRAM_KEY
    }/sendMessage?chat_id=${chatId}&text=${my_text}`;
    await fetch(`${url}`, {
      method: "GET",
    });
    
    reset();
  };

  return (
    <section className="px-4 lg:px-[165px] bg-dark-grey relative after:content-[''] after:w-[530px] after:h-[129px] after:absolute after:bg-pattern-rings after:bg-no-repeat after:top-1/2 after:left-[-340px] after:z-[1] sm:flex sm:flex-col sm:justify-center sm:after:top-auto sm:after:bottom-1/4 sm:after:left-[-380px] lg:after:left-[-200px] lg:flex lg:items-center lg:flex-col  lg:w-full">
      <div className="lg:flex lg:py-[88px] lg:justify-between lg:max-w-[1100px] w-full">
        <div className=" pt-14 text-center lg:text-start sm:max-w-[445px] mx-auto lg:mx-0 sm:text-body sm:leading-body">
          <h1 className="text-[40px] tracking-[-1.14px] font-bold pb-[20px]">
            {websiteData.contact.title}
          </h1>
          <p>{websiteData.contact.description}</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 mt-12 sm:max-w-[445px] w-full mx-auto lg:mx-0"
        >
          <div>
            <input
              autoComplete="false"
              className=" bg-transparent uppercase border-b-2 border-light-grey pb-4 border-opacity-50  w-full px-6"
              type="text"
              placeholder="NAME"
              {...register("fullName", { required: "This is required" })}
            />
            <span className="text-red-400">{errors.fullName?.message}</span>
          </div>
          <div>
            <input
              autoComplete="false"
              className=" bg-transparent uppercase border-b-2 border-light-grey pb-4 border-opacity-50  w-full px-6"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: "Email is required",
                validate: {
                  maxLength: (v) =>
                    v.length <= 50 || "The email should have at most 50 characters",
                  matchPattern: (v) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <span className="text-red-400">{errors.email?.message}</span>
          </div>
          <div>
            <textarea
              autoComplete="false"
              className=" bg-transparent uppercase border-b-2 border-light-grey w-full border-opacity-50 pb-4 px-6"
              rows={5}
              cols={15}
              placeholder="Message"
              {...register("message")}
            />
          </div>
          <button className=" self-end uppercase mt-6 tracking-[2.29px] border-b-2 border-light-green pb-2">
            Send message
          </button>
        </form>
      </div>
      <hr className="my-14 lg:max-w-[1100px] w-full" />
      <div className=" w-full flex flex-col items-center gap-5 pb-14 sm:flex-row sm:justify-between px-8 lg:max-w-[1100px]">
        <p className="text-heading-m leading-m font-bold">
          {websiteData.heroSection.title}
        </p>
        <div className="flex gap-6">
          {websiteData.heroSection.logoArray.map((logo, index) => {
            return (
              <a href={logo.link} key={index} target="_blank">
                <img src={logo.img} alt="logo icon" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
