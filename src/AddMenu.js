import React from 'react'

const AddMenu = ({ title, price, url, cate, descr, setTitle, setPrice, setCate, setDescr, setImage, handleSubmit }) => {

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <h1>Add A Meal</h1>
            <div className="input__control">
                <label>Title of Meal</label> <br /> <br />
                <input type="text" placeholder='name of food' value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="input__control">
                <label>Description</label> <br /> <br />
                <textarea name="" id="" cols="30" rows="10" placeholder='say something' value={descr} onChange={(e) => setDescr(e.target.value)} required ></textarea>
            </div>
            <div className="input__control">
                <label>Price</label> <br /> <br />
                <input type="number" placeholder='input price' value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <div className="input__control">
                <label>Category</label> <br /> <br />
                <select value={cate} onChange={(e) => setCate(e.target.value)} required >
                    <option value="breakfast">breakfast</option>
                    <option value="lunch">lunch</option>
                    <option value="dinner">dinner</option>
                </select>
            </div>
            <div className="input__control">
                <label>Photo</label> <br /> <br />
                <input type="url" required placeholder='Enter url' value={url} onChange={(e) => setImage(e.target.value)} />
            </div> <br />
            <button onClick={handleSubmit}>Add Menu</button>
        </form>
    )
}

export default AddMenu