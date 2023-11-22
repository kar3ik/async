import {createSlice , createAsyncThunk } from '@reduxjs/toolkit'



// create action
// export const functionName = createAsyncThunk("name", callbackfunction)
export const createUser = createAsyncThunk("createUser",async (data, {rejectWithValue})=>{
    const response = await fetch("https://655d96aa9f1e1093c599886b.mockapi.io/crud" , {
        method : "POST",
        headers : {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })

    try{
        const result = await response.json()
        return result
    }catch(err){
        return rejectWithValue(err)


    }

})


// read action
// export const showUser = createAsyncThunk("showUser" , async({rejectWithValue}) =>{
//     const response = await fetch("https://655d96aa9f1e1093c599886b.mockapi.io/crud")
//     try{
//         const result = await response.json()
//         return result
//     }catch(err){
//         return rejectWithValue(err)

//     }

// })
export const showUser = createAsyncThunk("showUser", async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://655d96aa9f1e1093c599886b.mockapi.io/crud");
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });



export const userDetails = createSlice({
    name: "userDetails",
    initialState: {
      users: [],
      loading: false,
      error: null,
    },
    extraReducers: (builder) => {
      builder
            // createUser cases
        .addCase(createUser.pending, (state) => {
          state.loading = true;
        })
        .addCase(createUser.fulfilled, (state, action) => {
          state.loading = false;
          state.users.push(action.payload);
        })
        .addCase(createUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload; // Assuming you want to store the error in state
        })

        // showUser cases
      .addCase(showUser.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error when a new request is initiated
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = null; // Reset error when the request is successful
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

      
    },
  });



export default userDetails.reducer