export default function Body() {
  return (
    <div className="flex justify-between bg-backgroundYellow">
      <div>
        <img
          className="w-[20vw] mt-36"
          src="https://raw.githubusercontent.com/RaddyTheBrand/Notes-NodeJs-CRUD-MongoDB/8035f76e7b9a106c981fde8ef32dc3cf363260bf/public/img/human-1.svg"
          alt="person01"
        />
      </div>

      <div className="w-[50vw] mt-14">
        <img
        className="w-14 p-0"
        src="https://raw.githubusercontent.com/RaddyTheBrand/Notes-NodeJs-CRUD-MongoDB/8035f76e7b9a106c981fde8ef32dc3cf363260bf/public/img/stars.svg"
        alt="star"
        />

        <h1 className="text-6xl font-black text-baseTextColor text-center">
          Write your <br /> thoughts down
          <br /> as they come to <br /> you
        </h1>
        <div className="flex justify-end w-full">
          <img
             className="w-12"
            src="https://raw.githubusercontent.com/RaddyTheBrand/Notes-NodeJs-CRUD-MongoDB/8035f76e7b9a106c981fde8ef32dc3cf363260bf/public/img/stars.svg"
            alt="star"
          />
        </div>
        <p className="text-center">
          Notes is a simple to uses note taking app made with React nodejs
        </p>

        <div className="flex justify-center mt-5">
        <a 
        className="bg-baseTextColor text-white p-3 rounded-full"
        href="">
            Try Notes, it's FREE!
        </a>
        </div>
      </div>

      <div>
        <img
          className="w-[17vw] mt-36"
          src="https://raw.githubusercontent.com/RaddyTheBrand/Notes-NodeJs-CRUD-MongoDB/8035f76e7b9a106c981fde8ef32dc3cf363260bf/public/img/human-2.svg"
          alt="person02"
        />
      </div>
    </div>
  );
}
