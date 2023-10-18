export const Card = () => {
  return (
    <div className="z-[1] flex h-full w-full flex-col justify-center gap-2 px-6 lg:p-10 bg-gray-800 rounded-3xl border border-color-2">
      <h1 className="text-3xl font-semibold text-dark-9 2xl:text-4xl">
        Campaign
      </h1>
      <p className="text-lg font-medium text-constantWhite 2xl:text-xl">
        Create a customized claim page to reward onchain contributions.
      </p>
    </div>
  )
}