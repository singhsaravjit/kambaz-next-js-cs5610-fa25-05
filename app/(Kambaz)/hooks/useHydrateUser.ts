/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../Account/reducer";

/**
 * Keeps accountReducer.currentUser in sync with localStorage.
 * - On mount: if Redux is empty but localStorage has a user, load it.
 * - Whenever Redux currentUser changes, save/remove localStorage.
 * Returns the effective current user object.
 */
export default function useHydrateUser() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  useEffect(() => {
    // If currentUser already exists in Redux, sync it to localStorage
    if (currentUser && currentUser._id) {
      window.localStorage.setItem(
        "kanbas-current-user",
        JSON.stringify(currentUser)
      );
      return;
    }

    // Otherwise, try restoring from localStorage
    try {
      const raw = window.localStorage.getItem("kanbas-current-user");
      if (!raw) return;

      const parsed = JSON.parse(raw);
      if (parsed && parsed._id) {
        dispatch(setCurrentUser(parsed));
      }
    } catch (err) {
      // bad JSON, ignore
    }
  }, [currentUser, dispatch]);

  return currentUser;
}
