import React from 'react';
import { dataApi } from './DataApi';
import '../App.css';


export default class ApiCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }

// const handleSubmit = (event) => {
//   event.preventDefault();
// }
    
    render () {
        // if (updateData()) {
            return (
                <div>
                    <p>Please get a new API URL from <a href='http://crudcrud.com' rel="noreferrer" target="_blank">http://crudcrud.com</a>.</p>
                    <p>Copy the 32 bit hex number and past it into ./rest/DataApi/DATA_ENDPOINT replacing</p>
                    <p>only the 32 bit hex number section of that URL.</p>
                    <p>The attempt below to automate that process is under construction.</p>
                    <p>Paste only the hex number here and click Update API URL</p>
                    <input
                        className='form-control'
                        style={{width: '400px'}}
                        type='text'
                    />
                    <button
                        className='btn btn-danger'
                        type='submit'
                        style={{width: '400px'}}
                    //   onClick={handleSubmit}
                    >Update API URL
                    </button>
                </div>
            );
        // }    
    } /* else {
        return (
            <div>
                <p>Current crudcrud url is {dataApi.DATA_ENDPOINT}.</p>
                <p>The API URL is current</p>
                    <input
                        disabled='true'
                        className='form-control'
                        style={{width: '400px'}}
                        type='text'
                    />
                    <button
                        disabled='true'
                        className='btn btn-success'
                        type='submit'
                        style={{width: '400px'}}
                    //   onClick={handleSubmit}
                    >Update API URL</button>
            </div>
        )
    } */

    updateData = async() => {
        const employees = await dataApi.get();
        if (employees === "GetNewCrudCrudHex") {
            alert(employees);
            return true;
        } return false;
    }
}

