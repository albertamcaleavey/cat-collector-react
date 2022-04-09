import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../../styles/Form.css'

// Services
import { getOne } from '../../services/cats'


// Components
import CatInput from './CatInput'

// Image Assets
import NerdCat from '../../assets/nerd-cat.svg'

const CatForm = (props) => {
  // using the useParams hook to extract an id parameter from this page's url 
  // in this case, the id = primary key of a cat
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  // based on the existence of an id, conditionally set form state with the existing properties of a resource (if updating)
  const handleSubmit = async (e) => {
    e.preventDefault()
    id ? props.updateCat(form) : props.addCat(form)
    navigate(`/cats`)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      // lets us fill all of the fields in the edit form with a cat's existing properites 
      setForm({
        id: data.cat.id,
        name: data.cat.name,
        breed: data.cat.breed,
        description: data.cat.description,
        age: data.cat.age
      })
    }
    id && fetchOne()
    return () => setForm({})
  }, [id])

  return (
    // if the id exists in the URL, we can assume a user wants to update an existing cat (since updating a resource requires a/:id)
    // if it doesn't, they want to create a new cat (since creating a new resource doesn't require a /:id)
    <>
      <div className="page-header">
        {id
        // based on the existence of an id, conditionally render the page title 
          ? <h1>Edit Cat</h1>
          : <><h1>Add Cat</h1><img src={NerdCat} alt="A cat using a computer" /></>
        }
      </div>

      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <CatInput form={form} handleChange={handleChange} />
          <button type="submit" className="btn submit">Submit!</button>
        </form>
      </section>
    </>
  )
}

export default CatForm