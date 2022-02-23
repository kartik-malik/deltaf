import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCompanies } from '../../state/action-creators/company'
import {
    setFilterDataArray,
    setStatusData,
} from '../../state/action-creators/filters'
const CompaniesDropDown = () => {
    const { data } = useSelector((state) => state.companies)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setCompanies())
        // dispatch(setFilterDataArray())
    }, [])

    // const handleChange = () => {}
    const [filterData, setFilterData] = useState([])
    const [status, setStatus] = useState('active')
    useEffect(() => {
        dispatch(setStatusData(status))
    }, [status])
    useEffect(() => {
        dispatch(setFilterDataArray(filterData))
    }, [filterData])
    const handleChange = (compname) => {
        const index = filterData.indexOf(compname)
        if (index > -1) {
            console.log('fire')
            filterData.splice(index, 1)
            setFilterData([...filterData])
        }
        // } else {
        //     console.log('else')
        //     setFilterData([...filterData, compname])
        // }
    }
    const handleChecked = (compname) => {
        return filterData.indexOf(compname) > -1
    }
    const selectAll = (e) => {
        if (filterData.length < data.length) setFilterData([...data])
        // else setFilterData([])
        else setFilterData([])
    }
    return (
        <>
            <div>
                <label htmlFor="selectAll">{'Select All'}</label>
                <input type="checkbox" id="selectAll" onClick={selectAll} />

                {data.map((compname) => {
                    return (
                        <div key={compname}>
                            <input
                                type="checkbox"
                                value={compname}
                                id={compname}
                                value={compname}
                                onChange={() => handleChange(compname)}
                                checked={handleChecked(compname)}
                            />
                            <label htmlFor={compname}>{compname}</label>
                        </div>
                    )
                })}
            </div>
            <div>
                <select onChange={(e) => setStatus(e.target.value)}>
                    <option value={'active'}>Active</option>
                    <option value={'inactive'}>Inactive</option>
                </select>
            </div>
        </>
    )
}
export default CompaniesDropDown
