import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  name: "bonard",
  age: 120,
  status: "coder",
};

export const fetchUserName = createAsyncThunk('fetchuser',
async ()=>{
  const res = await  fetch("http://localhost:4000/user");
  const result = await res.json();
  console.log(result[0].email);
  return result[0].email;
}
)

const userReducer = createSlice({
  name: "person",
  initialState,
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
    },
    updateAge(state, action) {
      state.age = action.payload;
    },
    updateStatus(state, action) {
      state.status = action.payload;
    },
  },
  extraReducers:{
    [fetchUserName.fulfilled]:(state,action)=>{
      //add user to state array
      state.name = action.payload;
    },
    [fetchUserName.pending]:(state,action)=>{
      //add user to state array
      state.name = 'loading!!';
    },
    [fetchUserName.rejected]:(state,action)=>{
      //add user to state array
      state.name = 'try again';
    },
  }
});

export const { updateName, updateAge, updateStatus } = userReducer.actions;
export default userReducer.reducer;


// const userReducer = createReducer(initialState, (builder)=>{
//     builder.addCase('UPDATE_AGE', (state,action)=>{
//         state.age = action.payload
//     })
//     builder.addCase('UPDATE_NAME', (state,action)=>{
//       state.name = action.payload
//   })
//   builder.addCase(updateStatus.toString(), (state,action)=>{
//     state.status = action.payload
// })
// })
