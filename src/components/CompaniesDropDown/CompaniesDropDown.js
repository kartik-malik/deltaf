import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCompanies } from '../../state/action-creators/company'
import {
    setFilterDataArray,
    setStatusData,
} from '../../state/action-creators/filters'
import AddCompany from '../AddCompany/AddCompany'
import AddMember from '../AddMember/Addmember'
import classes from './CompaniesDropDown.module.css'

const CompaniesDropDown = () => {
    const { data } = useSelector((state) => state.companies)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setCompanies())
    }, [])
    useEffect(() => {
        setFilterData(data.map((item) => item.name))
    }, [data])
    // const handleChange = () => {}
    const [filterData, setFilterData] = useState([])
    const [status, setStatus] = useState('active')
    const [CompaniesContainer, setCompaniesContainer] = useState(false)
    useEffect(() => {
        dispatch(setStatusData(status))
    }, [status])
    useEffect(() => {
        console.log(filterData)
        dispatch(setFilterDataArray(filterData))
    }, [filterData])
    const handleChange = (compname) => {
        const index = filterData.indexOf(compname)
        if (index > -1) {
            console.log('fire')
            filterData.splice(index, 1)
            setFilterData([...filterData])
        } else {
            console.log('else')
            setFilterData([...filterData, compname])
        }
    }
    const handleChecked = (compname) => {
        return filterData.indexOf(compname) > -1
    }
    const selectAll = (e) => {
        const onlyName = data.map((item) => item.name)
        if (filterData.length < data.length) setFilterData([...onlyName])
        // else setFilterData([])
        else if (filterData.length == data.length) setFilterData([])
    }
    const toggleContainerDropdown = (e) => {
        // e.stop
        setCompaniesContainer((prev) => !prev)
    }
    return (
        <div className={classes.filterComponent}>
            <div>
                <AddCompany />
            </div>
            <div>
                <AddMember />
            </div>
            <div className={classes.companies_dropdown}>
                <div
                    className={classes.companies_dropdown_button}
                    onClick={toggleContainerDropdown}
                >
                    Companies {`(${filterData.length})`}
                </div>
                {CompaniesContainer && (
                    <div className={classes.companies_dropdown_container}>
                        <div className="">
                            <input
                                type="checkbox"
                                id="selectAll"
                                onClick={selectAll}
                                checked={data.length == filterData.length}
                            />
                            <label htmlFor="selectAll">{'Select All'}</label>
                        </div>
                        {data.map((comp) => {
                            let compname = comp.name
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
                )}
            </div>

            <div>
                <select onChange={(e) => setStatus(e.target.value)}>
                    <option value={'active'}>Active</option>
                    <option value={'inactive'}>Inactive</option>
                </select>
            </div>
        </div>
    )
}
export default CompaniesDropDown
