import Image from "next/image"

export default async () => {
    return (
        <div>
        <div className="">
          <h2 className="text-4xl"></h2>
          <h1 className="text-lg "></h1>
          <h2>Runtime:  minutes</h2>
          <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-lg text-sm">
            
          </h2>
          <Image
            className="my-12 w-full"
            src={""}
            alt={""}
            width={1000}
            height={1000}
            priority
          />
        </div>
        <div className="my-4">
          <p className="text-lg"></p>
        </div>
      </div>
    )
}