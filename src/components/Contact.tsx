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
    <section className="px-4 bg-dark-grey">
      <div className=" pt-14 text-center">
        <h1 className="text-[40px] tracking-[-1.14px] font-bold pb-[20px]">
          {websiteData.contact.title}
        </h1>
        <p>{websiteData.contact.description}</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 mt-12 "
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
            {...register("email", { required: "This is required" })}
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
      <hr className="my-14" />
      <div className=" w-full flex flex-col items-center gap-5 pb-14">
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
