import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../features/todo/loginSlice'

const app = configureStore({
    reducer:loginSlice,
})

export default app