import Image from "next/image";

const easy = "/easy.jpg";

export function Body() {
  return (
    <>
      <div className="mx-4 mb-12 mt-8 max-w-screen-xl sm:mx-auto md:pb-24 md:pt-12">
        <Image
          src={easy}
          alt="time"
          width={100}
          height={100}
          className="mx-auto rounded-xl text-gray-400 dark:text-gray-600"
        />
        <div className="h-70 flex flex-col items-center justify-center gap-10 rounded-lg text-center">
          <p className="mt-8 text-4xl font-medium capitalize md:text-6xl">
            It&apos;s literally so easy to use!
          </p>
          <p className="mx-8 mb-8 text-xl md:mx-40 md:text-2xl">
            You initially receive 5 credits to explore and understand how our
            system functions. If you find our service valuable, you can purchase
            100 credits for $5.00 NZD. Additional payment tiers will be
            introduced in the future.
          </p>
        </div>
      </div>
    </>
  );
}
