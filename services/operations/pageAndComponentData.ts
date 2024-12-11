import {toast} from "react-hot-toast"

import { apiConnector } from '../apiConnector';
import { catalogData } from '../apis';
import useLoadingBarStore from "@/store/useLoadingBarStore";

export const getCatalogaPageData = async(categoryId:any) => {
  const  { setProgress }=useLoadingBarStore.getState();
  // const toastId = toast.loading("Loading...");
  setProgress(50);
  let result = [];
  try{
        const response = await apiConnector("POST", catalogData.CATALOGPAGEDATA_API, 
        {categoryId: categoryId,});
        console.log("CATALOG PAGE DATA API RESPONSE....", response);
        if(!response.data.success){
          console.error("Response:", response);

            throw new Error("Could not Fetch Category page data error");
          }

         result = response?.data;

  }
  catch(error:any) {
    console.log("CATALOG PAGE DATA API ERROR....", error);
    toast.error("No Course added to this category yet");
    result = error.response?.data;
  }
  // toast.dismiss(toastId);
  (setProgress(100));
  return result;
}

