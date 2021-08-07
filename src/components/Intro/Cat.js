import React from 'react'
import { connect } from 'react-redux';
import { getImageCat } from '../../store/actions/actionForData';
import classes from './cat.module.css'

function Cat({ arr, getImageCat }) {
    React.useEffect(() => {
        getImageCat(10)
    }, [getImageCat])
    return (
        <div className={classes.container}>
            {arr.data && arr.data.map(item => (
                <div key={item.id} className={classes.containerGrid} >
                    <img src={item.url} width='100%' height='100%' alt='' />
                </div>
            ))}
        </div>
    )
}
const mapStateToProps = (state) => ({
    arr: state.arr
})
const mapDispatchToProps = {
    getImageCat
}

export default connect(mapStateToProps, mapDispatchToProps)(Cat)
