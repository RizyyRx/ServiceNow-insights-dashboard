import path from 'path';
import { useAuth } from 'providers/AuthProvider'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import paths from './paths';
import PageLoader from 'components/loading/PageLoader';

const ProtectedRoute = ({children}: {children: React.ReactNode}) => {
    const {session, loading} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(!loading && !session){
            navigate(paths.login,{replace: true});
        }
    },[session, loading, navigate]);

    if(loading){
        return <PageLoader/>;
    }

    if(session){
        return <>{children}</>;
    }

    return null;
}

export default ProtectedRoute;