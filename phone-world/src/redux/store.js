// store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice'; // Sửa đường dẫn và tên

export const store = configureStore({
    reducer: {
        counter: counterReducer, // Đặt tên reducer cho counter
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
