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
            const isExist = state.watchedLists.find(
                (item) => item.id === action.payload.id
            );
            if (isExist) {
                state.watchedLists;
            } else {
                state.watchedLists.push(action.payload);
            }
        },

        removeFromWatchedList: (state, action: PayloadAction<string>) => {
            const filterWatchList = state.watchedLists.filter(
                (item) => item.id !== action.payload
            );
            state.watchedLists = filterWatchList;
        },

        addToWatchingList: (state, action: PayloadAction<Episode>) => {
            const isExist = state.watchingLists.find(
                (item) => item.id === action.payload.id
            );
            const watchList = state.watchedLists.filter(
                (item) => item.id !== action.payload.id
            );
            if (isExist) {
                state.watchingLists;
            } else {
                state.watchingLists.push(action.payload);
                state.watchedLists = watchList;
            }
        },

        removeFromWatchingList: (state, action: PayloadAction<string>) => {
            const filterWatchingList = state.watchingLists.filter(
                (item) => item.id !== action.payload
            );
            state.watchingLists = filterWatchingList;
        },

        addToBeWatchedList: (state, action: PayloadAction<Episode>) => {
            const isExist = state.toBeWatchedLists.find(
                (item) => item.id === action.payload.id
            );
            const watchingList = state.watchingLists.filter(
                (item) => item.id !== action.payload.id
            );
            if (isExist) {
                state.toBeWatchedLists;
            } else {
                state.toBeWatchedLists.push(action.payload);
                state.watchingLists = watchingList;
            }
        },

        removeFromToBeWatchedList: (state, action: PayloadAction<string>) => {
            const filterWatchedList = state.toBeWatchedLists.filter(
                (item) => item.id !== action.payload
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
