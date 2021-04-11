import React from 'react';
import '../App.css';

const DATA_ENDPOINT = 'https://crudcrud.com/api/c627ade0ad8348c1b2b03a85f97778fa/employees';

/*
Optional API resources if you choose to use them:
https://crudcrud.com/ [this one so far is the most popular with Promineo students]
https://github.com/ripienaar/free-for-dev#apis-data-and-ml
https://thecatapi.com/
https://jsonplaceholder.typicode.com/
https://learning.postman.com/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/
 */

class DataApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            apiUrlPrefix: 'https://crudcrud.com/api/',
            apiHex: '',
            apiUrlSuffix: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        // let form = document.getElementById('form');
        // let data = new FormData(form);
        // for (const [ name, value ] of data ) {
        //     console.log(name,value);
        //     this.setState({ [name]: value });
        // }
        // this.setState({'apiHex': data.apiHex});
        // console.log(data.apiHex);
        const { target: { name, value } } = event
        console.log(event.target);
        this.setState({ [name]: value });
        console.log(`Update API URL button clicked. ${name}, ${value}`);
        console.log(`This is apiHex ${this.state.value}`);
    }

    handleChange = (event) => {
        event.preventDefault();
        const { target: { name, value } } = event
        this.setState({ [name]: value });
        console.log(`Update API URL button clicked. ${name}, ${value}`);
        console.log(this.state.apiHex);
    }

    get = async () => {
        try {
            const resp = await fetch(DATA_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            if (e.message === "NetworkError when attempting to fetch resource.") {
                console.log('get failed!', e);
                return "GetNewCrudCrudHex";
            }
        }
    }

    update = async(employee) => {
        try {
            let updatedWithoutId = {
                name: employee.name,
                age: employee.age,
                country: employee.country,
                position: employee.position,
                wage: employee.wage,
                password: employee.password,
                token: employee.token,
                authentication: employee.authentication
            }
            const resp = await fetch(`${DATA_ENDPOINT}/${employee._id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedWithoutId)
            });
            return resp;
        } catch(e) {
            console.error('update failed:', e);
        }
    }

    put = async (employee) => {
        try {
            const resp = await fetch(`${DATA_ENDPOINT}/${employee._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(employee)
            });
            return await resp.json();
        } catch(e) {
            console.log('put failed', e);
        }
    }

    create = async(employee) => {
        try {
            const resp = await fetch(`${DATA_ENDPOINT}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(employee)
            });
            return resp;
        } catch(e) {
            console.log('create failed', e);
        }
    }

    delete = async(_id) => {
        try {
            const resp = await fetch(`${DATA_ENDPOINT}/${_id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
            });
            return resp;
        } catch(e) {
            console.log('delete failed', e);
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
                    <p>Paste only the hex number here and click Update API URL</p>
                    {/* <form 
                        // name='apiHex'
                        id='form'
                        onSubmit={this.handleSubmit}> */}
                    <input
                        // id='form'
                        className='form-control'
                        style={{width: '400px'}}
                        type='text'
                        name='apiHex'
                        value={this.state.apiHex}
                        // onChange={this.handleChange}
                    />
                    <button
                        form='form'
                        className='btn btn-danger'
                        type='submit'
                        style={{width: '400px'}}
                        onClick={this.handleSubmit}
                    >Update API URL
                    </button>
                    {/* </form> */}
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
}

export const dataApi = new DataApi();
// export default DataApi;