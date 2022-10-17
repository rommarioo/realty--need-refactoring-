
import AllRequest from "./pages/AllRequest";
import Auth from "./pages/Auth";
import PersonalArea from "./pages/PersonalArea";
import Main from "./pages/Main";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
import Contact from "./pages/Contact"
import {All_REQUEST, LOGIN_ROUTE, PERSONAL_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE, QUIZ, ABOUT_US, CONTACT, STEP2, STEP3,BUYREQUEST,PROVIDERS,CONFIRM, STEP4, STEP5, RESULT, STEP6, STEP7,QUIZSALE,SALE2, All_REQUEST_SALE, All_PROVIDER} from './utils/consts';

import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";
import Step5 from "./pages/Step5";
import Step6 from "./pages/Step6";
import Step7 from "./pages/Step7";
import Result from "./pages/Result";
import Confirm from "./pages/Confirm";
import Providers from "./pages/Providers";
import BuyRequest from "./pages/BuyRequest";
import QuizSale from "./pages/QuizSale";
import Sale2 from "./pages/Sale2";
import AllSale from "./pages/AllSale";
import AllProvider from "./pages/AllProvider";
export const authRoutes = [
    
    
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: QUIZ,
        Component: Step1
    },
    {
        path: ABOUT_US,
        Component: About
    },
    {
        path: CONTACT,
        Component: Contact
    },
    {
        path: STEP2,
        Component: Step2
    },
    {
        path: STEP3,
        Component: Step3
    },
    {
        path: STEP4,
        Component: Step4
    },
    {
        path: STEP5,
        Component: Step5
    },
    {
        path: RESULT,
        Component: Result
    },
    {
        path: STEP6,
        Component: Step6
    },
    {
        path: STEP7,
        Component: Step7
    },
    {
        path: QUIZSALE,
        Component: QuizSale
    },
    {
        path: SALE2,
        Component: Sale2
    },
    {
        path: BUYREQUEST,
        Component: BuyRequest
    },
    {
        path: CONFIRM,
        Component: Confirm
    },
    {
        path: PROVIDERS,
        Component: Providers
    },
    {
        path: All_REQUEST_SALE,
        Component: AllSale
    },
    {
        path: All_PROVIDER,
        Component: AllProvider
    },
    {
        path: PERSONAL_ROUTE,
        Component: PersonalArea
    },
    {
        path: All_REQUEST,
        Component: AllRequest
    }
]
