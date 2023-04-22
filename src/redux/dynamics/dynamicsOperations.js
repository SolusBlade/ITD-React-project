import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDynamicsApi, getDynamicsByMonthApi } from "services/connectoinsApi";

// const token = {
//     set(token) {
//       axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     },
//     unset() {
//       axios.defaults.headers.common.Authorization = ``;
//     },
// };

// export const setToken = () => {
//     const storage = JSON.parse(localStorage.getItem("persist:auth"));

//     console.log(storage.token);
//     const filteredToken = storage.token.replace(/"/g, '');
//     // console.log('test', filteredToken);
//     // const filterTest = test.split('').map(elem => {
//     //     return elem === '"' ? '' : elem;
//     // }).join('')
//     // console.log(filterTest);
//     // axios.defaults.headers.common.Authorization = ``;
//     axios.defaults.headers.common['Authorization'] = `Bearer ${filteredToken}`;
//     // return storage.token;
// }

export const getDynamics = createAsyncThunk(
    'dynamics/getDynamics',

    async (_, thunkAPI) => {
        try{
            const response = await getDynamicsApi();

            // const data = await axios.get('https://flat-backend.p.goit.global/api/dynamics')
            // console.log("New data", data);
            // console.log("response data", response);
           return response.data;
        } catch (error) {
            console.log('getDynamics error')
            return thunkAPI.rejectWithValue(error.message);
        }
    }    
)

export const getDynamicsByMonth = createAsyncThunk(
    'dynamics/getDynamicsByMonth',

    async (data, thunkAPI) => {
        try {
            const response = await getDynamicsByMonthApi(data.year, data.month);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const postImage = createAsyncThunk(
    'dynamics/postImage',

    async (data, thunkAPI) => {
        // https://flat-backend.p.goit.global
        try{
            const response = await axios({
                method: 'patch',
                url: '/api/dynamics/flatImage',
                // headers: {},
                data: data
            });
            console.log('PostImage data', data)
            // const response = await axios.post('/api/dynamics/flatImage/', file)

            console.log('postImage response', response);

            return response;
        } catch (error) {
            console.log('postImage error')
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)