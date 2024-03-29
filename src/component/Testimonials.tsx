import Image from "next/image";

const cassidy = "/cassidy.jpg";

export function Testimonials() {
  return (
    <>
      <section className="h-96 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
          <figure className="mx-auto max-w-screen-md">
            <svg
              className="mx-auto mb-3 h-12 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-xl font-medium text-gray-900 dark:text-white md:text-2xl">
                &quot;This website is awesome! So easy to use and so handy! I
                can generate so many different designs that I can work with to
                get my ideas flowing.&quot;
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-3">
              <Image
                className="rounded-full"
                src={cassidy}
                width={50}
                height={50}
                quality={100}
                alt="cassidy"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                  Cassidy Cross
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  The Conqueror Challenges
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
