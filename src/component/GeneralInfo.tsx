import Image from "next/image";

const time = "/time.jpg";

export function GeneralInfo() {
  return (
    <>
      <div className="mx-4 mb-12 max-w-screen-xl sm:mx-auto md:pb-24 md:pt-12">
        <Image
          src={time}
          alt="time"
          width={100}
          height={100}
          className="mx-auto h-20 w-20 rounded-xl text-gray-400 dark:text-gray-600 "
        />
        <div className="flex flex-col items-center justify-center gap-10 rounded-lg text-center">
          <p className="mt-8 text-4xl font-medium capitalize md:text-6xl">
            Let us save your time!
          </p>
          <p className="mx-8 mb-8 text-xl md:mx-40 md:text-2xl">
            Recruiting a designer to create digital logos and web elements for
            your website can be a daunting and lengthy process. By providing a
            unique description of your desired logos, we can swiftly produce
            your assets within a matter of seconds.
          </p>
        </div>
      </div>
    </>
  );
}
