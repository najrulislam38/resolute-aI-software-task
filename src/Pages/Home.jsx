const Home = () => {
  return (
    <div className="h-screen">
      <div className=" px-10">
        <div className="grid grid-cols-3 gap-5 mt-10">
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>Up Next</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                0
              </p>
            </div>
            <div className="space-y-3">{/* <TaskCard /> */}</div>
          </div>
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>In Progress</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                0
              </p>
            </div>
            <div className="space-y-3">
              {/* <TaskCard />
              <TaskCard /> */}
            </div>
          </div>
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>Up Next</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                0
              </p>
            </div>
            <div className="space-y-3">{/* <TaskCard /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
