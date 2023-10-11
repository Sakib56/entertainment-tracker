import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Episode } from "../../graphql/__generated__/graphql";

export interface EpisodesState {
    watchedLists: Episode[];
    watchingLists: Episode[];
    toBeWatchedLists: Episode[];
}

const initialState: EpisodesState = {
    watchedLists: [],
    watchingLists: [],
    toBeWatchedLists: [],
};

export const watchTrackerSlice = createSlice({
    name: "watchTracker",
    initialState,
    reducers: {
        addToWatchedList: (state, action: PayloadAction<Episode>) => {
            const inArray = state.watchedLists.find(
                data => data.id === action.payload.id
            );
            const watchingList = state.watchingLists.filter(
                data => data.id !== action.payload.id
            );
            const toBeWatchedList = state.toBeWatchedLists.filter(
                data => data.id !== action.payload.id
            );
            if (!inArray) {
                state.watchedLists.push(action.payload);
                state.watchingLists = watchingList;
                state.toBeWatchedLists = toBeWatchedList;
            }
        },

        removeFromWatchedList: (state, action: PayloadAction<string>) => {
            const removeWatchedList = state.watchedLists.filter(
                data => data.id !== action.payload
            );
            state.watchedLists = removeWatchedList;
        },

        addToWatchingList: (state, action: PayloadAction<Episode>) => {
            const inArray = state.watchingLists.find(
                data => data.id === action.payload.id
            );
            const watchedList = state.watchedLists.filter(
                data => data.id !== action.payload.id
            );
            const toBeWatchedList = state.toBeWatchedLists.filter(
                data => data.id !== action.payload.id
            );
            if (!inArray) {
                state.watchingLists.push(action.payload);
                state.watchedLists = watchedList;
                state.toBeWatchedLists = toBeWatchedList;
            }
        },

        removeFromWatchingList: (state, action: PayloadAction<string>) => {
            const filterWatchingList = state.watchingLists.filter(
                data => data.id !== action.payload
            );
            state.watchingLists = filterWatchingList;
        },

        addToBeWatchedList: (state, action: PayloadAction<Episode>) => {
            const inArray = state.toBeWatchedLists.find(
                data => data.id === action.payload.id
            );
            const watchedList = state.watchedLists.filter(
                data => data.id !== action.payload.id
            );
            const watchingList = state.watchingLists.filter(
                data => data.id !== action.payload.id
            );
            if (!inArray) {
                state.toBeWatchedLists.push(action.payload);
                state.watchedLists = watchedList;
                state.watchingLists = watchingList;
            }
        },

        removeFromToBeWatchedList: (state, action: PayloadAction<string>) => {
            const filterWatchedList = state.toBeWatchedLists.filter(
                data => data.id !== action.payload
            );
            state.toBeWatchedLists = filterWatchedList;
        },
    },
});

export const {
    addToWatchedList,
    removeFromWatchedList,
    addToWatchingList,
    removeFromWatchingList,
    addToBeWatchedList,
    removeFromToBeWatchedList
} = watchTrackerSlice.actions;

export default watchTrackerSlice.reducer;
