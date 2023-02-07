import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import goalService from "./goalService"

const initialState = {
    goals : [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//create new goal
export const createGoal = createAsyncThunk('goals/create', async (goalData, thunkAPI) => {    //goals/create is the name of our action
    try {
        //thunkAPI object has a getState method we can use to get anything from anypart of the state
        //Here, we are getting token from auth State's user object using getState method
        const token = thunkAPI.getState().auth.user.token
       return await goalService.createGoal(goalData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
          || error.message || 
          error.toString()
         return thunkAPI.rejectWithValue(message) 
    }
})

//Get user goals
export const getGoals = createAsyncThunk('goals/getAll', async(_, thunkAPI) => {
    try {
        //Get token as it is protected route
        const token = thunkAPI.getState().auth.user.token
        return await goalService.getGoals(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
          || error.message || 
          error.toString()
         return thunkAPI.rejectWithValue(message) 
    }
})

export const goalSlice = createSlice({
    name: 'goal',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(createGoal.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createGoal.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.goals.push(action.payload)
        })
        .addCase(createGoal.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getGoals.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getGoals.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.goals = action.payload
        })
        .addCase(getGoals.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const {reset} = goalSlice.actions
export default goalSlice.reducer