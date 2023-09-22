import React, {useState}from "react";

function Mystery({displayData, setDisplayData}){
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        why: '',
      });

    function handleChange(e){
        const { name , value } = e.target
        
        setFormData({
            ...formData,
            [name]: value,
          })
    }

    function handleSubmit(e){
        e.preventDefault();

        fetch("http://localhost:3000/random",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => setDisplayData([...displayData,formData]))
    }


    return (
        <div>
            <h1>Mystery</h1>
            <form onSubmit={handleSubmit}>
                Name
                <input
                value={formData.title}
                name="title" 
                type="text"
                onChange={handleChange}
                ></input>
                Description
                <input 
                value={formData.description}
                name="description"
                type="text"
                onChange={handleChange}
                ></input>
                Why
                <input 
                value={formData.why} 
                name="why"
                type="text"
                onChange={handleChange}
                ></input>
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}


export default Mystery