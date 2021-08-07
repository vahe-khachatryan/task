import React from 'react'
import { connect } from 'react-redux';
import { fetchCategories, getImageCat } from '../../store/actions/actionForData';
import './Sidebar.css'

function Sidebar({ fetchCategories, category, getImageCat }) {
    const [state, setState] = React.useState(false)
    const [sort, setSort] = React.useState('')
    const [limit, setLimit] = React.useState(10)

    const show = () => {
        setState(!state)
    }

    const limitImage = () => {
        setLimit(limit + 10)
    }
    const setCategory = (sort) => {
        setSort(sort)
    }
    React.useEffect(() => {
        getImageCat(limit, sort)
    }, [getImageCat, limit, sort])
    React.useEffect(() => {
        fetchCategories()
    }, [fetchCategories])
    return (
        <div className='sidebarLeft'>
            <button onClick={limitImage} className='loadBtn'> Load 10 more images</button>
            <button onClick={show} className='categoryBtn' style={{backgroundColor:'blue'}}> Category</button>

            {state && category.data && category.data.map((item) => (
                <div key={item.id}>
                    <button onClick={() => setCategory(item.name)} className='categoryBtn'>{item.name}</button>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    category: state.category
})
const mapDispatchToProps = {
    fetchCategories,
    getImageCat
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
