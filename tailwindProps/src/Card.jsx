function Card({name, btnText}) {
    return (
        <div>
            <div className="card bg-gray-500 image-full w-96 shadow-sm m-4">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-blue-700 font-bold">{name}</h2>
          <p>"Engineered with advanced cushioning technology, these running shoes absorb shock, protecting your feet on hard surfaces and providing a comfortable stride for long distances</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary bg-blue-300">{btnText}</button>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Card